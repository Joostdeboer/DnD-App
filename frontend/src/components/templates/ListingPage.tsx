'use client';

import { ProductListing } from '@/src/components/organisms/products/ProductListing';
import { Product } from '@/src/types/generic';
import { useState } from 'react';
import { SORTING_VARIANTS, SortingTypes } from '@/src/utils/constants/variables';
import { Listbox } from '@headlessui/react';
import { classNames } from '@/src/utils/functions/classnames';
import { KeyboardArrowDown } from '@mui/icons-material';

export function ListingPage({ products }: { products: Product[] }) {
    const [sorting, setSorting] = useState<SortingTypes>('name_asc');

    // TODO: decide if I want a listBox select, or integrate it into the header element of the table
    // TODO: revalidate the query based on the selection, so we can order by something else

    return (
        <div className="relative">
            <Listbox value={sorting} onChange={setSorting}>
                {({ open }) => (
                    <>
                        <Listbox.Button className="bg-brand-primary-500 text-white p-2 rounded-lg flex flex-row justify-between w-36 items-center">
                            <span>{sorting}</span>
                            <KeyboardArrowDown
                                className={classNames([
                                    open ? 'rotate-180' : 'rotate-0',
                                    'h-5 w-5 transition-transform ease-in-out duration-100',
                                ])}
                            />
                        </Listbox.Button>
                        <Listbox.Options className="bg-brand-primary-500 w-36 p-2 absolute">
                            {SORTING_VARIANTS.map((sortingMethod) => (
                                <Listbox.Option
                                    key={sortingMethod}
                                    value={sortingMethod}
                                    className="w-full hover:bg-brand-primary-600"
                                >
                                    {sortingMethod}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </>
                )}
            </Listbox>
            <ProductListing products={products} />
        </div>
    );
}
