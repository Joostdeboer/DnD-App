'use client';

import { AllProductsOfTypeResult } from '@/src/sanity/types';
import { useBreakpoint } from '@/src/hooks/useBreakpoint';
import { splitInColumns } from '@/src/utils/functions/products';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { classNames } from '@/src/utils/functions/classnames';
import {
    BUTTON_CLASSES,
    BUTTON_CLASSES_DISABLED,
    BUTTON_STYLE,
    TEXT_CLASSES,
} from '@/src/components/atoms/generic/Button';
import { PAGE_SIZE } from '@/src/utils/constants/query';
import { MapArtworksColumn } from '@/src/components/molecules/products/MapArtworksColumn';
import { loadMoreArtworks } from '@/src/utils/functions/api';

/**
 *
 * @see https://www.june.so/blog/tailwind-css-masonry-layout for how this idea was inspired
 * @param products
 * @constructor
 */
export function OrganizedArtworkListing({ products }: { products: AllProductsOfTypeResult }) {
    // get all search params, to be provided to the callback function
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');
    const sort = searchParams.get('sort');
    const dir = searchParams.get('dir');

    // define initial values for page and the button's disabled state
    const INITIAL_PAGE = 1;
    const INITIAL_DISABLE_STATE = products.length < PAGE_SIZE;

    // states to keep track of the button, page, and the current list of art
    const [page, setPage] = useState(INITIAL_PAGE);
    const [disableLoadMore, setDisableLoadMore] = useState(INITIAL_DISABLE_STATE);
    const [artworks, setArtworks] = useState(products);

    // when changing sorting/dir at server side, update the artwork list to be that list, and reset the page and loading state
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setArtworks(products);
        setPage(INITIAL_PAGE);
        setDisableLoadMore(INITIAL_DISABLE_STATE);
    }, [INITIAL_PAGE, INITIAL_DISABLE_STATE, products]);

    // verify the art columns, and remember their sorting so we can switch between large and small screens easily
    const { isBelowMd } = useBreakpoint('md');
    const { isBelowLg } = useBreakpoint('lg');

    const cols2 = useMemo(() => splitInColumns({ input: artworks, colsToSplit: 2 }), [artworks]);
    const cols4 = useMemo(() => splitInColumns({ input: artworks, colsToSplit: 4 }), [artworks]);
    const cols5 = useMemo(() => splitInColumns({ input: artworks, colsToSplit: 5 }), [artworks]);
    const artworkCols = useMemo(() => {
        if (isBelowMd) {
            return cols2;
        } else if (isBelowLg) {
            return cols4;
        } else {
            return cols5;
        }
    }, [isBelowMd, isBelowLg, cols2, cols4, cols5]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="columns-2 md:columns-4 lg:columns-5 w-full gap-4">
                {artworkCols.map((artworkCol, index) => (
                    <MapArtworksColumn artworks={artworkCol} key={index} />
                ))}
            </div>
            <button
                disabled={disableLoadMore}
                className={classNames([
                    BUTTON_STYLE,
                    BUTTON_CLASSES['primary'],
                    TEXT_CLASSES['white'],
                    disableLoadMore && BUTTON_CLASSES_DISABLED['primary'],
                ])}
                onClick={async () =>
                    await loadMoreArtworks({
                        page,
                        setPage,
                        setDisableLoadMore,
                        setArtworks,
                        currentArtworks: artworks,
                        searchParams: { tag, sort, dir },
                    })
                }
            >
                Load more
            </button>
        </div>
    );
}
