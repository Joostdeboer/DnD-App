import { Text } from '@/src/components/atoms/generic/Text';
import { Heading } from '@/src/components/atoms/generic/Heading';

export function RandomFactSection() {
    // inspiration: https://www.worldanvil.com/worldbuilding-prompts
    return (
        <div className="flex flex-col">
            <Heading className="bg-brand-primary-500 p-2 rounded-t-md">Random Fact</Heading>
            <Text>Insert some text here, queried from Sanity</Text>
        </div>
    );
}
