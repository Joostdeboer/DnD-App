import { Text } from '@/src/components/atoms/generic/Text';
import { runQuery } from '@/src/configs/sanityConfig';
import { godsQuery } from '@/src/groqd/queries';

export default async function Gods() {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    const gods = await runQuery(godsQuery);

    return (
        <div className="flex flex-col gap-2">
            <Text>TODO: Gods</Text>
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
