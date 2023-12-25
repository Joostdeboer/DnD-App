import { runQuery } from '../configs/sanityConfig';
import { godsQuery } from '../groqd/queries';

export default async function Home() {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    const gods = await runQuery(godsQuery);

    return (
        <div>
            {gods.map((god) => {
                return (
                    <div key={god.name}>
                        God name: {god.name}, the {god.title}
                    </div>
                );
            })}
        </div>
    );
}
