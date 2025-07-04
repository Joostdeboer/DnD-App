import { SidebarPageLayout } from '@/src/components/templates/SidebarPageLayout';
import { ProductTemplate } from '@/src/components/templates/ProductTemplate';
import { PortableTextSection } from '@/src/components/molecules/products/PortableTextSection';
import { KEYS_TO_IGNORE } from '@/src/utils/constants/variables';
import { Text } from '@/src/components/atoms/generic/Text';
import { getNrOfAttributesForProduct } from '@/src/utils/functions/products';
import { DefaultAttributes, Information } from '@/src/sanity/types';
import { PortableTextBlock } from '@sanity/types';
import { NoProductContentText, NoProductText } from '@/src/components/atoms/generic/NoProductText';

export function GenericProductPage({
    product,
}: {
    product?: {
        defaultAttributes?: DefaultAttributes;
        information?: Information;
        _updatedAt?: string;
    } | null;
}) {
    if (product === null) return <NoProductText />;
    if (!product) return <Text>Loading data...</Text>;

    const productSectionKeys = Object.keys(product).filter((key) => !KEYS_TO_IGNORE.includes(key));
    const attributeLength = getNrOfAttributesForProduct(product.information);

    return (
        <SidebarPageLayout defaultAttributes={product.defaultAttributes ?? undefined} information={product.information}>
            <ProductTemplate defaultAttributes={product.defaultAttributes ?? undefined} updatedAt={product._updatedAt}>
                {attributeLength > 0 ? (
                    productSectionKeys.map((key) => (
                        <PortableTextSection
                            key={key}
                            // we know from filtering out the KEYS_TO_IGNORE that we are always left with a portable text entry
                            productSection={
                                (product[key as keyof typeof product] as PortableTextBlock | null) ?? undefined
                            }
                            title={String(key).charAt(0).toUpperCase() + String(key).slice(1)}
                        />
                    ))
                ) : (
                    <NoProductContentText />
                )}
            </ProductTemplate>
        </SidebarPageLayout>
    );
}
