import { client } from '@/configs/apolloConfig';
import { AllGodsDocument } from '@/graphql/documents';
import { God } from '@/graphql/generated/graphql';

export default async function Home() {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    const { data }: { data: { allGod: Partial<God>[] } } = await client.query({ query: AllGodsDocument });

    return (
        <div className="bg-red-500">
            <div>Hello World!</div>
            {data.allGod.map((god) => {
                return <div key={god.name}>God name: {god.name}</div>;
            })}
        </div>
    );
}
