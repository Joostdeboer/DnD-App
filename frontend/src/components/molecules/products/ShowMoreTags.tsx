import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { KeyboardArrowDown } from '@mui/icons-material';
import { classNames } from '@/src/utils/functions/classnames';
import { MAX_TAGLIST_LENGTH } from '@/src/utils/constants/tags';
import Link from 'next/link';
import { useSetUrl } from '@/src/hooks/useSetUrl';

export function ShowMoreTags({
    nrOfUniqueTags,
    tags,
    tagParam,
}: {
    nrOfUniqueTags: number;
    tags: { tag: string; count: number }[];
    tagParam: string | null;
}) {
    const setUrl = useSetUrl();

    return (
        <Menu>
            {({ open }) => (
                <div>
                    <MenuButton className="font-bold text-brand-primary-500 hover:text-brand-primary-600 hover:underline w-fit self-end outline-none py-1">
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
                    <MenuItems anchor="bottom">
                        {/* apply styling to an inner div instead of MenuItems because max-h does not apply properly */}
                        <div
                            className={classNames([
                                'block outline-none border-2 border-brand-neutral-300 dark:border-brand-neutral-800',
                                'min-w-40 max-h-96 overflow-y-auto [--anchor-gap:4px]',
                            ])}
                        >
                            {tags.map(({ tag, count }) => {
                                return (
                                    <MenuItem key={tag}>
                                        <Link
                                            className={classNames([
                                                'text-sm flex flex-row gap-1 justify-between text-black hover:text-white dark:text-white px-2 py-1',
                                                'bg-brand-neutral-200 dark:bg-brand-neutral-700 hover:bg-brand-primary-600 dark:hover:bg-brand-primary-600',
                                            ])}
                                            href={setUrl([{ name: 'tag', value: tagParam !== tag && tag }])}
                                            replace
                                            prefetch={true}
                                        >
                                            <span>{tag}</span>
                                            <span>({count})</span>
                                        </Link>
                                    </MenuItem>
                                );
                            })}
                        </div>
                    </MenuItems>
                </div>
            )}
        </Menu>
    );
}
