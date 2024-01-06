import { Text } from '@/src/components/atoms/generic/Text';
import { ReactNode } from 'react';

export function DetailCard({ title, description, icon }: { title: string; description: string; icon?: ReactNode }) {
    return (
        <div className="flex flex-col items-center max-w-xs">
            {icon ? (
                <div className="text-black dark:text-white">{icon}</div>
            ) : (
                <div className="border-2 border-dashed border-brand-neutral-500 size-32" />
            )}
            <Text className="text-center" size="xl">
                {title}
            </Text>
            <Text className="text-center" size="sm">
                {description}
            </Text>
        </div>
    );
}
