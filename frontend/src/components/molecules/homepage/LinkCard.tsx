import { classNames } from '@/src/utils/functions/classnames';
import { Text } from '@/src/components/atoms/generic/Text';
import { Divider } from '@/src/components/atoms/generic/Divider';
import Link from 'next/link';
import { KeyboardArrowRight } from '@mui/icons-material';

export function LinkCard({
    title,
    description,
    href,
    textSide = 'right',
}: {
    title: string;
    description: string;
    href: string;
    textSide?: 'left' | 'right';
}) {
    return (
        <div
            className={classNames([
                'flex flex-col gap-2',
                textSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse',
            ])}
        >
            <div className="md:flex-1 border-2 border-dashed border-brand-neutral-500 w-full h-52" />
            <div className="md:flex-1 flex flex-col gap-1 max-w-md pt-4">
                <Text size="xl" className="pl-10">
                    {title ?? 'Title'}
                </Text>
                <Divider color="neutral" hasPadding={false} />
                <Text className="pl-10">{description ?? 'Some explanation'}</Text>
                <Link
                    href={href}
                    className={classNames([
                        'font-bold text-brand-primary-500 hover:text-brand-primary-600 hover:underline w-fit self-end',
                    ])}
                >
                    <span className="flex flex-row gap-2">
                        <span>Read More</span>
                        <KeyboardArrowRight />
                    </span>
                </Link>
            </div>
        </div>
    );
}
