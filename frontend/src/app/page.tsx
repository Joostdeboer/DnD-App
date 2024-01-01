import { runQuery } from '../configs/sanityConfig';
import { godsQuery } from '../groqd/queries';
import { Text } from '@/src/components/atoms/generic/Text';

export default async function Home() {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    const gods = await runQuery(godsQuery);

    return (
        <div>
            {gods.map((god) => {
                return (
                    <Text key={god.name}>
                        God name: {god.name}, the {god.title}.
                    </Text>
                );
            })}
        </div>
    );
}
