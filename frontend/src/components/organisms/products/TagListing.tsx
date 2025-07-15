import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllTagsOfType } from '@/src/queries/products/queries';
import { TagList } from '@/src/components/molecules/products/TagList';
import { Divider } from '@/src/components/atoms/generic/Divider';
import { headers } from 'next/headers';

export async function TagListing({ type }: { type: string }) {
    const { data: tags } = await sanityFetch({
        query: getAllTagsOfType,
        params: {
            type,
        },
    });
    // fetch the headers and parse them into a host to append to the url for the tagList
    const headersList = await headers();
    const hostname = headersList.get('x-forwarded-host') ?? '';
    const protocol = headersList.get('x-forwarded-proto');
    const host = protocol ? `${protocol}://${hostname}` : hostname;

    return (
        <section>
            <TagList tags={tags} host={host} />
            <Divider />
        </section>
    );
}
