import { Text } from '@/src/components/atoms/generic/Text';
import { DetailSection } from '@/src/components/organisms/homepage/DetailSection';
import { Divider } from '@/src/components/atoms/generic/Divider';
import { LinkSection } from '@/src/components/organisms/homepage/LinkSection';

export default async function Home() {
    return (
        <div className="flex flex-col gap-8 py-32 w-full">
            {/*<AboutSection />*/}
            <DetailSection />
            <Divider color="primary" hasPadding={false} />
            <LinkSection />
            <Divider color="primary" hasPadding={false} />
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 flex flex-col flex-1 border border-brand-neutral-500 rounded-md p-4">
                    <Text>Recently Updated</Text>
                </div>
                <div className="flex flex-col border border-brand-neutral-500 rounded-md p-4">
                    <Text>Fact-of-the-day</Text>
                </div>
            </div>
        </div>
    );
}
