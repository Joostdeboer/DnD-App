'use client';

import { useMemo, useState } from 'react';
import { Tag } from '@/src/components/atoms/products/Tag';
import { useSearchParams, usePathname } from 'next/navigation';
import { ShowMoreTags } from '@/src/components/molecules/products/ShowMoreTags';
import { MAX_TAGLIST_LENGTH, tagSortingOptions } from '@/src/utils/constants/tags';
import { appendOrRemoveTag } from '@/src/utils/functions/tags';
import { ToggleOptions } from '@/src/components/molecules/products/ToggleOptions';

export function TagList({ tags, host }: { tags: (string | null)[]; host: string }) {
    const [toggleSort, setToggleSort] = useState(tagSortingOptions[0]);

    const { nrOfUniqueTags, sortedTags } = useMemo(() => {
        const tagsWithCount = tags.reduce<Record<string, number>>((acc, curr) => {
            if (curr) {
                acc[curr] = (acc[curr] ?? 0) + 1;
            }
            return acc;
        }, {});
        const tagsWithCountArray = Object.entries(tagsWithCount).map(([tag, count]) => ({ tag, count }));
        const nrOfUniqueTags = tagsWithCountArray.length;
        const sortedTags = tagsWithCountArray.sort((a, b) => {
            let verifyCondition = b.count - a.count === 0;
            if (toggleSort === tagSortingOptions[1]) {
                verifyCondition = a.tag.localeCompare(b.tag) !== 0;
            }
            return verifyCondition ? a.tag.localeCompare(b.tag) : b.count - a.count;
        });

        return { nrOfUniqueTags, sortedTags };
    }, [tags, toggleSort]);

    const params = useSearchParams();
    const pathname = usePathname();

    const tagParam = params.get('tag');
    const url = new URL(host + pathname + '?' + params.toString());

    const currentTag = sortedTags.find((tag) => tag.tag === tagParam);
    const urlWithoutTag = new URL(url.toString());
    if (currentTag) {
        appendOrRemoveTag({ tag: currentTag?.tag, tagParam, url: urlWithoutTag });
    }

    const remainingTags = currentTag ? sortedTags.filter((tag) => tag.tag !== tagParam) : sortedTags;

    return (
        <div className="flex flex-col gap-2">
            <ToggleOptions
                toggleValue={toggleSort}
                setToggleValue={setToggleSort}
                toggleOptions={tagSortingOptions}
                lineText="Sort tags by"
            />
            <div className="flex flex-row flex-wrap gap-2 items-center">
                {!!currentTag && (
                    <Tag
                        tag={currentTag.tag}
                        count={currentTag.count}
                        url={urlWithoutTag.toString()}
                        isSelected={tagParam === currentTag.tag}
                    />
                )}
                {remainingTags.slice(0, MAX_TAGLIST_LENGTH).map(({ tag, count }) => {
                    appendOrRemoveTag({ tag, tagParam, url });
                    return <Tag tag={tag} count={count} key={tag} url={url.toString()} isSelected={tagParam === tag} />;
                })}
            </div>
            {nrOfUniqueTags > MAX_TAGLIST_LENGTH && (
                <ShowMoreTags
                    nrOfUniqueTags={nrOfUniqueTags}
                    tags={remainingTags.slice(MAX_TAGLIST_LENGTH)}
                    tagParam={tagParam}
                    url={url}
                />
            )}
        </div>
    );
}
