import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllTagsOfType } from '@/src/queries/products/queries';
import { TagList } from '@/src/components/molecules/products/TagList';

export async function TagListing({ type }: { type: string }) {
    const { data: tags } = await sanityFetch({
        query: getAllTagsOfType,
        params: {
            type,
        },
    });

    return (
        <section>
            <TagList tags={tags} />
        </section>
    );
}
