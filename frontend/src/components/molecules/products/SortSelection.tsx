'use client';

import { classNames } from '@/src/utils/functions/classnames';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSetUrl } from '@/src/hooks/useSetUrl';
import { SortingOption, sortingOptions } from '@/src/utils/constants/variables';

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
        <Listbox value={sort} onChange={onChange}>
            <ListboxButton className="rounded-md bg-brand-neutral-500 px-4 border w-72">{sort.name}</ListboxButton>
            <ListboxOptions anchor="bottom start" className="bg-brand-neutral-500 px-4 w-72">
                {sortingOptions.map((option) => (
                    <ListboxOption key={`${option.sort}_${option.dir}`} value={option}>
                        {({ focus }) => (
                            <span className={classNames(['flex gap-2', focus && 'bg-blue-100'])}>{option.name}</span>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}
