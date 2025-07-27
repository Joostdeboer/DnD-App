import { AllProductsOfTypeResult } from '@/src/sanity/types';
import { PaginatedProductsBody } from '@/src/app/api/paginated-products/route';

export async function loadMoreArtworks({
    page,
    setPage,
    setDisableLoadMore,
    setArtworks,
    currentArtworks,
    searchParams,
}: {
    page: number;
    setPage: (page: number) => void;
    setDisableLoadMore: (loadMore: boolean) => void;
    setArtworks: (artworks: AllProductsOfTypeResult) => void;
    currentArtworks: AllProductsOfTypeResult;
    searchParams: Pick<PaginatedProductsBody, 'sort' | 'dir' | 'tag'>;
}) {
    // fetch the paginated products, with a page and type being mandatory
    const products = await fetch(`/api/paginated-products`, {
        method: 'post',
        body: JSON.stringify({ type: 'artwork', page, ...searchParams }),
    });
    const body: {
        status: number;
        products: AllProductsOfTypeResult;
    } = await products.json();

    if (!products.ok || products.status > 200)
        throw new Error(`Something went wrong fetching new artworks on page ${page}`);

    // update the provided states in case their conditions are met
    if (body.products.length > 0) {
        setPage(page + 1);
        setArtworks([...currentArtworks, ...body.products]);
    } else {
        setDisableLoadMore(true);
    }
}
