import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Tag } from '@/src/components/atoms/products/Tag';
import { KeyboardArrowDown } from '@mui/icons-material';
import { classNames } from '@/src/utils/functions/classnames';
import { MAX_TAGLIST_LENGTH } from '@/src/utils/constants/tags';
import { appendOrRemoveTag } from '@/src/utils/functions/tags';

export function ShowMoreTags({
    nrOfUniqueTags,
    tags,
    tagParam,
    url,
}: {
    nrOfUniqueTags: number;
    tags: { tag: string; count: number }[];
    tagParam: string | null;
    url: URL;
}) {
    return (
        <Menu>
            {({ open }) => (
                <div>
                    <MenuButton className="font-bold text-brand-primary-500 hover:text-brand-primary-600 hover:underline w-fit self-end outline-none">
                        <span className={classNames(['flex flex-row gap-2'])}>
                            <span>And {nrOfUniqueTags - MAX_TAGLIST_LENGTH} more tags</span>
                            <KeyboardArrowDown
                                className={classNames([
                                    open ? 'rotate-180' : 'rotate-0',
                                    'transition-transform ease-in-out duration-100',
                                ])}
                            />
                        </span>
                    </MenuButton>
                    {/* TODO: fix the width and other styles of the menu that drops down */}
                    <MenuItems
                        anchor="bottom end"
                        className="block outline-none bg-brand-secondary-500 origin-top-right"
                    >
                        {tags.map(({ tag, count }) => {
                            appendOrRemoveTag({ tag, tagParam, url });
                            return (
                                <MenuItem key={tag}>
                                    {/* TODO: don't make this a "Tag", but make this an actual dropdown with overflow */}
                                    <Tag
                                        tag={tag}
                                        count={count}
                                        key={tag}
                                        url={url.toString()}
                                        isSelected={tagParam === tag}
                                    />
                                </MenuItem>
                            );
                        })}
                    </MenuItems>
                </div>
            )}
        </Menu>
    );
}
