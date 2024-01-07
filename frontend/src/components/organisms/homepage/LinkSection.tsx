import { Text } from '@/src/components/atoms/generic/Text';
import { LinkCard } from '@/src/components/molecules/homepage/LinkCard';
import { Divider } from '@/src/components/atoms/generic/Divider';

export function LinkSection() {
    /**
     * A carousel/multi-section area where, using images and text,
     * the core sections are displayed/highlighted for ease of navigation
     * and to give an overview of what you can expect on those pages.
     */
    return (
        <div>
            {/* TODO: make a header atom */}
            <Text className="text-center text-5xl">About</Text>
            <Divider color="neutral" />
            <div className="flex flex-col gap-y-2">
                <LinkCard
                    textSide="right"
                    href="/luroa"
                    title="Luroa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consequuntur corporis earum eius eos exercitationem id ipsam modi nisi qui quia quod reiciendis sunt, tempore velit vitae voluptatem"
                />
                <LinkCard
                    textSide="left"
                    href="/gameplay"
                    title="Gameplay"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consequuntur corporis earum eius eos exercitationem id ipsam modi nisi qui quia quod reiciendis sunt, tempore velit vitae voluptatem"
                />
                <LinkCard
                    textSide="right"
                    href="/writing"
                    title="Writing"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consequuntur corporis earum eius eos exercitationem id ipsam modi nisi qui quia quod reiciendis sunt, tempore velit vitae voluptatem"
                />
                <LinkCard
                    textSide="left"
                    href="/tools"
                    title="Tools"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consequuntur corporis earum eius eos exercitationem id ipsam modi nisi qui quia quod reiciendis sunt, tempore velit vitae voluptatem"
                />
            </div>
        </div>
    );
}
