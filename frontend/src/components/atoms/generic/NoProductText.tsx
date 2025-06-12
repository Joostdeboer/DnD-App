import { Text } from '@/src/components/atoms/generic/Text';

export function NoProductText() {
    return (
        <Text isMuted>
            This entry does not exist (yet?) in the database. Please try a different entry, or if you are sure it should
            exist, send me a message!
        </Text>
    );
}

export function NoProductContentText() {
    return (
        <Text isMuted size="sm" className="italic">
            This entry does not contain any information yet. Please be patient while information is being provided.
        </Text>
    );
}
