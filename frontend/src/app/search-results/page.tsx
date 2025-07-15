import { Text } from '@/src/components/atoms/generic/Text';

export default async function SearchResultsPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | undefined>>;
}) {
    const { search } = await searchParams;

    return (
        <div>
            <Text>You are searching for: &#34;{search}&#34;</Text>
            <Text>Querying for it, and showing results is to be implemented later :)</Text>
        </div>
    );
}
