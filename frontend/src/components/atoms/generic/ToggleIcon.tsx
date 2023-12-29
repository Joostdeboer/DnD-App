import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { clipPathSupported } from '@/src/utils/functions/toggleIcon';
import { classNames } from '@/src/utils/functions/classnames';

const clipPath = (value: string) => ({
    WebkitClipPath: value,
    clipPath: value,
});

// Taken from https://mui.wertarbyte.com/#material-ui-toggle-icon and adapted for React 18
export function ToggleIcon({
    renderOffIcon,
    renderOnIcon,
    className,
    duration = '500ms',
    on = false,
}: {
    renderOffIcon: ({ style }: { style: CSSProperties }) => ReactElement;
    renderOnIcon: ({ style }: { style: CSSProperties }) => ReactElement;
    className?: string;
    duration?: string;
    on?: boolean;
}) {
    const [isClipPathSupported, setIsClipPathSupported] = useState(false);
    useEffect(() => {
        setIsClipPathSupported(clipPathSupported());
    }, []);

    return (
        <div className={classNames([className, 'w-6 h-6 relative inline-block'])}>
            {renderOffIcon({
                style: {
                    ...clipPath(on ? 'polygon(0% 0%, 0% 0%, 0% 0%)' : 'polygon(0% 200%, 0% 0%, 200% 0%)'),
                    visibility: !on || isClipPathSupported ? 'visible' : 'hidden',
                    transition:
                        'clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1), -webkit-clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    transitionDuration: duration,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                },
            })}
            {renderOnIcon({
                style: {
                    ...clipPath(
                        on ? 'polygon(100% -100%, 100% 100%, -100% 100%)' : 'polygon(100% 100%, 100% 100%, 100% 100%)',
                    ),
                    visibility: on || isClipPathSupported ? 'visible' : 'hidden',
                    transition:
                        'clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1), -webkit-clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    transitionDuration: duration,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                },
            })}
        </div>
    );
}
