import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

// based on https://victoreke.com/blog/sanity-webhooks-and-on-demand-revalidation-in-nextjs
export async function POST(req: NextRequest) {
    try {
        const hookSecret = process.env.SANITY_REVALIDATE_SECRET;
        const { body, isValidSignature } = await parseBody<{ _type: string; slug?: string | undefined }>(
            req,
            hookSecret,
        );
        if (!isValidSignature) return new Response('Invalid signature', { status: 401 });
        if (!body?._type) return new Response('Bad request', { status: 400 });

        revalidateTag(body._type);
        return NextResponse.json({
            status: 200,
            revalidated: true,
            now: Date.now(),
            body,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.error(e);
        return new Response(e.message, { status: 500 });
    }
}
