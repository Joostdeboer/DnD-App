import { Text } from '@/src/components/atoms/generic/Text';
import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { BUTTON_CLASSES, BUTTON_STYLE, TEXT_CLASSES } from '@/src/components/atoms/generic/Button';

export function AboutSection() {
    return (
        <div className="grid grid-cols-2 w-full h-96 border border-brand-neutral-500 rounded-lg">
            <div className="col-start-1 p-2 w-full h-full">
                <div className="border-4 border-dashed border-brand-neutral-500 rounded-md w-full h-full">
                    <span className="flex flex-col h-full items-center justify-center italic text-brand-neutral-500">
                        Image
                    </span>
                </div>
            </div>
            <div className="col-start-2 flex flex-col items-center pt-10 gap-4">
                <Text size="xl">About the world</Text>
                <Text className="line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis deleniti dignissimos
                    doloremque enim magni quaerat quidem reiciendis sapiente unde. Ad culpa cupiditate delectus
                    explicabo laborum qui quo quod soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda delectus eligendi reiciendis sed tenetur. Consectetur, delectus deleniti deserunt dolorum
                    excepturi facere iste itaque mollitia, qui reiciendis repellendus rerum tempora vero.
                </Text>
                <Link
                    href="/luroa/about"
                    className={classNames([BUTTON_STYLE, BUTTON_CLASSES['primary'], TEXT_CLASSES['white']])}
                >
                    Read More
                </Link>
            </div>
        </div>
    );
}
