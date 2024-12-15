import { runQuery } from '@/src/configs/sanityConfig';
import { specificGodQuery } from '@/src/groqd/queries/products/gods';
import { SidebarPageLayout } from '@/src/components/templates/SidebarPageLayout';
import { ProductTemplate } from '@/src/components/templates/ProductTemplate';
import { PortableTextSection } from '@/src/components/molecules/products/PortableTextSection';
import { KEYS_TO_IGNORE } from '@/src/utils/constants/variables';
import { PortableTextGroqd } from '@/src/groqd/types/functions';
import { Text } from '@/src/components/atoms/generic/Text';
import { getNrOfAttributesForProduct } from '@/src/utils/functions/products';

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
    const attributeLength = getNrOfAttributesForProduct(god.information);

    return (
        <SidebarPageLayout defaultAttributes={god.defaultAttributes ?? undefined} information={god.information}>
            <ProductTemplate defaultAttributes={god.defaultAttributes ?? undefined} updatedAt={god._updatedAt}>
                {attributeLength > 0 ? (
                    productSectionKeys.map((key) => (
                        <PortableTextSection
                            key={key}
                            // we know from filtering out the KEYS_TO_IGNORE that we are always left with a portable text entry
                            productSection={(god[key as keyof typeof god] as PortableTextGroqd | null) ?? undefined}
                            title={String(key).charAt(0).toUpperCase() + String(key).slice(1)}
                        />
                    ))
                ) : (
                    <Text isMuted size="sm" className="italic">
                        This entry does not contain any information yet. Please be patient while information is being
                        provided.
                    </Text>
                )}
            </ProductTemplate>
        </SidebarPageLayout>
    );
}
