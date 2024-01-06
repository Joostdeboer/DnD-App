import { Colors } from '@/src/components/atoms/generic/Button';
import { classNames } from '@/src/utils/functions/classnames';

const DIVIDER_COLORS: Record<Colors, string> = {
    primary: 'via-brand-primary-500',
    secondary: 'via-brand-secondary-500',
    success: 'via-brand-success-500',
    neutral: 'via-brand-neutral-500',
};

export function Divider({ color = 'primary', hasPadding = true }: { color?: Colors; hasPadding?: boolean }) {
    return (
        <div className={classNames([hasPadding ? 'py-8' : '', 'w-full'])}>
            <div className={classNames([DIVIDER_COLORS[color], 'bg-gradient-to-r from-transparent h-px w-full'])} />
        </div>
    );
}
