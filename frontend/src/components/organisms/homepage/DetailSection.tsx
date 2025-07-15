import { Text } from '@/src/components/atoms/generic/Text';
import { classNames } from '@/src/utils/functions/classnames';
import { BUTTON_CLASSES, BUTTON_STYLE, TEXT_CLASSES } from '@/src/components/atoms/generic/Button';
import Link from 'next/link';
import { DetailCard } from '@/src/components/molecules/homepage/DetailCard';
import { AutoStories, Public, Whatshot, Diamond } from '@mui/icons-material';
import { Divider } from '@/src/components/atoms/generic/Divider';

export function DetailSection() {
    return (
        <div
            className={classNames([
                'flex flex-col w-full items-center rounded-md',
                // 'border border-brand-neutral-500',
            ])}
        >
            <div className="grid grid-cols-2 gap-y-4 md:gap-0 md:flex md:flex-row justify-around">
                <DetailCard
                    title="Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, itaque quam."
                    icon={<AutoStories className="size-32" />}
                />
                <DetailCard
                    title="Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, itaque quam."
                    icon={<Public className="size-32" />}
                />
                <DetailCard
                    title="Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, itaque quam."
                    icon={<Whatshot className="size-32" />}
                />
                <DetailCard
                    title="Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, itaque quam."
                    icon={<Diamond className="size-32" />}
                />
            </div>
            <Divider color="primary" />
            <div className="flex flex-col gap-4 max-w-lg items-center">
                <Text className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cupiditate deserunt
                    enim eos explicabo ipsa, magni minus molestias nam, natus omnis rem sed sequi vel veniam veritatis
                    vitae. Cumque!
                </Text>
                <Link
                    href="/luroa/about"
                    className={classNames([BUTTON_STYLE, BUTTON_CLASSES['primary'], TEXT_CLASSES['white']])}
                    prefetch={true}
                >
                    Read More
                </Link>
            </div>
        </div>
    );
}
