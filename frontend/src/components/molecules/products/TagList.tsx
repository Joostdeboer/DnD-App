'use client';

import { useMemo } from 'react';
import { Tag } from '@/src/components/atoms/products/Tag';
import { Text } from '@/src/components/atoms/generic/Text';
import { useSearchParams, usePathname } from 'next/navigation';

export function TagList({ tags, host }: { tags: (string | null)[]; host: string }) {
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

    const params = useSearchParams();
    const pathname = usePathname();

    const tagParam = params.get('tag');
    const url = new URL(host + pathname + '?' + params.toString());

    return (
        <div className="flex flex-col gap-2">
            <Text>Total number of tags: {nrOfUniqueTags}</Text>
            <div className="flex flex-row flex-wrap gap-2 items-center">
                {sortedTags.map(({ tag, count }) => {
                    if (tagParam !== tag) {
                        url.searchParams.set('tag', tag);
                    } else {
                        url.searchParams.delete('tag');
                    }
                    return <Tag tag={tag} count={count} key={tag} url={url.toString()} isSelected={tagParam === tag} />;
                })}
            </div>
        </div>
    );
}
