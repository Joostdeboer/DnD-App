'use client';

import { classNames } from '@/src/utils/functions/classnames';
import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSetUrl } from '@/src/hooks/useSetUrl';
import { SortingOption, sortingOptions } from '@/src/utils/constants/variables';
import { Text } from '@/src/components/atoms/generic/Text';

export function SortSelection({
    sortParam,
    dirParam,
}: {
    sortParam: string | undefined;
    dirParam: string | undefined;
}) {
    const setUrl = useSetUrl();
    const router = useRouter();

    const selectedSort =
        sortingOptions.find((option) => option.sort === sortParam && option.dir === dirParam) ?? sortingOptions[0];

    const [sort, setSort] = useState(selectedSort);

    function onChange(inputSort: SortingOption) {
        setSort(inputSort);
        router.push(
            setUrl([
                { name: 'sort', value: inputSort.sort },
                { name: 'dir', value: inputSort.dir },
            ]),
        );
    }

    return (
        <Field>
            <Label>
                <Text>Sort art by:</Text>
            </Label>
            <div className="relative">
                <Listbox value={sort} onChange={onChange}>
                    <ListboxButton
                        className={classNames([
                            'rounded-md p-1 w-full border-2 border-brand-primary-500 outline-none',
                            'bg-brand-neutral-200 text-black',
                            'dark:bg-brand-neutral-800 dark:text-white',
                        ])}
                    >
                        {sort.name}
                    </ListboxButton>
                    <ListboxOptions
                        modal={false}
                        className={classNames([
                            'rounded-md absolute w-full border-2 border-brand-primary-500 top-10 cursor-pointer outline-none',
                            'bg-brand-neutral-200 text-black',
                            'dark:bg-brand-neutral-800 dark:text-white',
                        ])}
                    >
                        {sortingOptions.map((option) => (
                            <ListboxOption key={`${option.sort}_${option.dir}`} value={option}>
                                {({ focus }) => (
                                    <span
                                        className={classNames([
                                            'flex gap-2 px-2 py-1',
                                            focus && 'bg-brand-primary-600 text-white',
                                        ])}
                                    >
                                        {option.name}
                                    </span>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </div>
        </Field>
    );
}
