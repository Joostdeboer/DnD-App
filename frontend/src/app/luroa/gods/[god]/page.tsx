import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { sanityFetch } from '@/src/configs/sanityConfig';
import { specificTypePageQuery } from '@/src/queries/products/queries';

/**
 * TODO: figure out how to do proper revalidation
 *  - https://nextjs.org/docs/14/pages/building-your-application/data-fetching/incremental-static-regeneration
 *  - https://nextjs.org/docs/app/api-reference/functions/revalidatePath
 *  - https://victoreke.com/blog/sanity-webhooks-and-on-demand-revalidation-in-nextjs
 *  - https://www.sanity.io/learn/track/work-ready-next-js?ref=live
 *  - https://github.com/sanity-io/next-sanity
 *  - https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
 *  - https://github.com/sanity-io/sanity-template-nextjs-clean/tree/main#next-steps?ref=victoreke.com
 *  - https://www.sanity.io/plugins/next-sanity
 *  - https://nextjs.org/docs/app/deep-dive/caching
 *  - https://nextjs.org/docs/pages/building-your-application/data-fetching
 *
 *  https://www.sanity.io/learn/course/content-driven-web-application-foundations/fetch-sanity-content
 *  https://www.sanity.io/learn/course/controlling-cached-content-in-next-js/debugging-caching-in-development
 */

export default async function God({ params }: { params: Promise<{ god: string }> }) {
    const { god: godParam } = await params;
    if (!godParam) return <div>Loading...</div>;
    const { data: god } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'god',
            name: godParam,
        },
    });

    return <GenericProductPage product={god} />;
}
