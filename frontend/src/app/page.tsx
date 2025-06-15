import { DetailSection } from '@/src/components/organisms/homepage/DetailSection';
import { Divider } from '@/src/components/atoms/generic/Divider';
import { LinkSection } from '@/src/components/organisms/homepage/LinkSection';
import { RecentlyUpdatedSection } from '@/src/components/organisms/homepage/RecentlyUpdatedSection';
import { RandomFactSection } from '@/src/components/organisms/homepage/RandomFactSection';

export default async function Home() {
    return (
        <div className="flex flex-col gap-8 py-32 w-full">
            {/*<AboutSection />*/}
            <DetailSection />
            <Divider color="primary" hasPadding={false} />
            <LinkSection />
            <Divider color="primary" hasPadding={false} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RecentlyUpdatedSection />
                <RandomFactSection />
            </div>
        </div>
    );
}
