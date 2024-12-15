import { runQuery } from '@/src/configs/sanityConfig';
import { specificGodQuery } from '@/src/groqd/queries/products/gods';
import { SidebarPageLayout } from '@/src/components/templates/SidebarPageLayout';
import { ProductTemplate } from '@/src/components/templates/ProductTemplate';
import { PortableTextSection } from '@/src/components/molecules/products/PortableTextSection';
import { KEYS_TO_IGNORE } from '@/src/utils/constants/variables';

/**
 * TODO: figure out how to do proper revalidation
 *  - https://nextjs.org/docs/14/pages/building-your-application/data-fetching/incremental-static-regeneration
 *  - https://nextjs.org/docs/app/api-reference/functions/revalidatePath
 *  - https://victoreke.com/blog/sanity-webhooks-and-on-demand-revalidation-in-nextjs
 *  - https://www.sanity.io/learn/track/work-ready-next-js?ref=live
 *  - https://github.com/sanity-io/next-sanity
 *  - https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
 *  - https://github.com/sanity-io/sanity-template-nextjs-clean/tree/main#next-steps?ref=victoreke.com
 */
export const revalidate = 1000;

export default async function God({ params }: { params: { god: string } }) {
    if (!params.god) return <div>Loading...</div>;
    const god = await runQuery(specificGodQuery(params.god), ['god'], { god: params.god });
    if (!god) return <div>Loading data...</div>;

    const productSectionKeys = Object.keys(god).filter((key) => !KEYS_TO_IGNORE.includes(key));

    return (
        <SidebarPageLayout defaultAttributes={god.defaultAttributes} information={god.information}>
            <ProductTemplate defaultAttributes={god.defaultAttributes} updatedAt={god._updatedAt}>
                {productSectionKeys.map((key) => (
                    <PortableTextSection
                        key={key}
                        productSection={god[key]}
                        title={String(key).charAt(0).toUpperCase() + String(key).slice(1)}
                    />
                ))}
            </ProductTemplate>
        </SidebarPageLayout>
    );
}
