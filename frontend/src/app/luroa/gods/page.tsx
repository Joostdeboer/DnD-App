import { Heading } from '@/src/components/atoms/generic/Heading';
import { runQuery } from '@/src/configs/sanityConfig';
import { godsQuery } from '@/src/groqd/queries/products/gods';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { ProductListing } from '@/src/components/organisms/products/ProductListing';

export const revalidate = 1000;

export default async function Gods() {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    // https://github.com/vercel/next.js/tree/canary/examples/cms-sanity
    const gods = await runQuery(godsQuery, ['gods']);

    // TODO: sorting

    return (
        <PageLayout>
            <Heading>List of Gods</Heading>
            <ProductListing products={gods} />
        </PageLayout>
    );
}
