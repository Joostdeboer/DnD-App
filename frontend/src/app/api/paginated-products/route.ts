import { NextResponse } from 'next/server';
import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PAGE_SIZE } from '@/src/utils/constants/query';

export interface PaginatedProductsBody {
    type?: string;
    page?: number;
    sort?: string | null;
    dir?: string | null;
    tag?: string | null;
}

/**
 * fetch products of type `req.type` depending on the provided page, with optional sorting, sorting dir and tags
 * @param req
 * @constructor
 */
export async function POST(req: Request) {
    try {
        const body: PaginatedProductsBody = await req.json();

        if (body?.page === undefined || body?.type === undefined) {
            return new Response(
                `Parameters "page" and "type" are required. Found page = "${body?.page}" and type = "${body?.type}"`,
                // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes - 422 means the params were correct, but could not be processed
                { status: 422 },
            );
        }
        const { page, sort, dir, tag, type } = body;
        const pagination = { start: page * PAGE_SIZE + 1, end: (page + 1) * PAGE_SIZE };

        const { data: products } = await sanityFetch({
            query: getAllByTypeQuery({
                sorting: sort,
                direction: dir,
                filters: [tag ? '$filterTag in defaultAttributes.tags' : undefined],
                pagination,
            }),
            params: {
                type,
                filterTag: tag ?? '',
            },
        });

        return NextResponse.json({
            status: 200,
            products,
        });
    } catch (e: any) {
        return new Response(e.message, { status: 500 });
    }
}
