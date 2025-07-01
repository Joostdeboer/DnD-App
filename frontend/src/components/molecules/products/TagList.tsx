import { useMemo } from 'react';
import { Tag } from '@/src/components/atoms/products/Tag';
import { Text } from '@/src/components/atoms/generic/Text';

// TODO: make the tags clickable -> onClick: set filter params and use that to filter for different artworks
export function TagList({ tags }: { tags: (string | null)[] }) {
    const { nrOfUniqueTags, sortedTags } = useMemo(() => {
        const tagsWithCount = tags.reduce<Record<string, number>>((acc, curr) => {
            if (curr) {
                acc[curr] = (acc[curr] ?? 0) + 1;
            }
            return acc;
        }, {});
        const tagsWithCountArray = Object.entries(tagsWithCount).map(([tag, count]) => ({ tag, count }));
        const nrOfUniqueTags = tagsWithCountArray.length;
        const sortedTags = tagsWithCountArray.sort((a, b) => b.count - a.count);

        return { nrOfUniqueTags, sortedTags };
    }, [tags]);

    return (
        <div className="flex flex-col gap-2">
            <Text>Total number of tags: {nrOfUniqueTags}</Text>
            <div className="flex flex-row flex-wrap gap-2 items-center">
                {sortedTags.map(({ tag, count }) => (
                    <Tag tag={tag} count={count} key={tag} />
                ))}
            </div>
        </div>
    );
}
