import { Text } from '@/src/components/atoms/generic/Text';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllRecentProducts } from '@/src/queries/products/queries';
import { findLinkRecursively, formatDate } from '@/src/utils/functions/products';
import Link from 'next/link';
import { KeyboardArrowRight } from '@mui/icons-material';
import { HEADERLINKS } from '@/src/utils/constants/links';

export async function RecentlyUpdatedSection() {
    const { data: recentPosts } = await sanityFetch({
        query: getAllRecentProducts,
        params: {
            start: 0,
            end: 9,
        },
    });

    return (
        <div className="md:col-span-2 flex flex-col flex-1">
            <Heading className="bg-brand-primary-500 p-2 rounded-t-md">Recently Updated</Heading>
            <div className="flex flex-col">
                {recentPosts.length > 0 &&
                    recentPosts.map((recentPost) => {
                        if (!recentPost.defaultAttributes?.slug?.current) return;
                        const postLink = findLinkRecursively({
                            input: HEADERLINKS,
                            checkedValue: recentPost._type,
                            writingType: recentPost.writingType,
                        });

                        return (
                            <Link
                                className="flex flex-row items-start justify-between py-1 border-b last:border-b-0 hover:bg-brand-neutral-200 hover:dark:bg-brand-neutral-700"
                                key={recentPost.defaultAttributes?.slug?.current}
                                href={postLink + '/' + recentPost.defaultAttributes?.slug?.current}
                            >
                                <div className="flex flex-col ml-2">
                                    <Text>{recentPost.defaultAttributes?.name}</Text>
                                    <Text size="sm" className="italic" isMuted>
                                        ({recentPost._type})
                                    </Text>
                                </div>
                                <Text size="sm" className="italic mr-2">
                                    {formatDate(new Date(recentPost._updatedAt), {
                                        formatOptions: { timeStyle: 'short' },
                                    })}
                                </Text>
                            </Link>
                        );
                    })}
            </div>
            <Link
                href="/recently-updated"
                className="font-bold text-brand-primary-500 hover:text-brand-primary-600 hover:underline w-fit self-end pt-2"
            >
                <span className="flex flex-row items-center ">
                    <span>See more</span>
                    <KeyboardArrowRight />
                </span>
            </Link>
        </div>
    );
}
