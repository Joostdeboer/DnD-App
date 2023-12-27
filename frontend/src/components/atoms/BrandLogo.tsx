import { TextSizes } from '@/src/types/generic';
import { classNames } from '@/src/utils/functions/classnames';
import { headerSizes } from '@/src/utils/constants/text';

export function BrandLogo() {
    return (
        <svg
            id="eTG5Fhu6IHx1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 200"
            transform="scale(1 0.9)"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            className="w-full h-full"
        >
            <text
                dx="0"
                dy="0"
                fontFamily='"Source Sans Pro"'
                fontSize="60"
                fontWeight="400"
                transform="translate(85.520484 133.394134)"
                strokeWidth="0"
            >
                <tspan y="0" fontWeight="400" strokeWidth="0">
                    UROA
                </tspan>
            </text>
            <text
                dx="0"
                dy="0"
                fontFamily='"Source Sans Pro"'
                fontSize="45"
                fontWeight="400"
                letterSpacing="15"
                transform="translate(102.643551 169.602341)"
                strokeWidth="0"
            >
                <tspan y="0" fontWeight="400" strokeWidth="0">
                    ODE
                </tspan>
            </text>

            {/* L/C */}
            <rect
                width="5"
                height="75"
                rx="2"
                ry="2"
                transform="translate(49.943838 95.017778)"
                fill="#af0b08"
                strokeWidth="0"
            />
            <rect
                width="40"
                height="5"
                rx="2"
                ry="2"
                transform="translate(49.943838 165.017778)"
                fill="#af0b08"
                strokeWidth="0"
            />
            <rect
                width="1.045853"
                height="55.90086"
                rx="1.05"
                ry="1.05"
                transform="matrix(1.675449 1.704949-.612442 0.601845 88.859309 131.67334)"
                fill="#af0b08"
                strokeWidth="0"
            />
            <rect
                width="1.045853"
                height="61.723866"
                rx="1.05"
                ry="1.05"
                transform="matrix(1.690263 1.690263-.607166 0.607166 88.529946 128.663969)"
                fill="#af0b08"
                strokeWidth="0"
            />
            <line
                x1="0"
                y1="-20"
                x2="0"
                y2="20"
                transform="matrix(-.700909-.71325-.954796 0.938276 69.765296 150.764811)"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
            />

            {/* N/X */}
            <rect
                width="5"
                height="42.946118"
                rx="0"
                ry="0"
                transform="translate(257.07333 93.877893)"
                fill="#08a4af"
                strokeWidth="0"
            />
            <rect
                width="10.226434"
                height="42.946118"
                rx="0"
                ry="0"
                transform="matrix(-.44312 0.20663 0.449789 0.964576 262.111316 93.877893)"
                fill="#08a4af"
                strokeWidth="0"
            />
            <rect
                width="5"
                height="42.946118"
                rx="0"
                ry="0"
                transform="translate(276.896479 93.877893)"
                fill="#08a4af"
                strokeWidth="0"
            />
            <rect
                width="6.917859"
                height="45.806177"
                rx="0"
                ry="0"
                transform="matrix(.625935 0.361384-.420249 0.727893 277.566352 134.1758)"
                fill="#08a4af"
                strokeWidth="0"
            />
            <rect
                width="6.917859"
                height="46.762572"
                rx="0"
                ry="0"
                transform="matrix(.625935-.361383 0.411654 0.713006 257.07333 136.6758)"
                fill="#08a4af"
                strokeWidth="0"
            />
        </svg>
    );
}

export function BrandLogoText({ size = 'lg', useDarkMode = true }: { size?: TextSizes; useDarkMode?: boolean }) {
    return (
        <div
            className={classNames([
                'grid text-black w-fit grid-cols-6 grid-rows-2 text-center',
                useDarkMode ? 'dark:text-white' : undefined,
                headerSizes[size].title,
            ])}
        >
            <div className="row-start-1 contents">
                <span>L</span>
                <span>u</span>
                <span>r</span>
                <span>o</span>
                <span>a</span>
                <span>n</span>
            </div>
            <div
                className={classNames([
                    useDarkMode ? 'dark:text-white' : undefined,
                    headerSizes[size].subTitle,
                    'row-start-2 contents text-black',
                ])}
            >
                <span className="col-start-2">C</span>
                <span>o</span>
                <span>d</span>
                <span>e</span>
                <span>x</span>
            </div>
        </div>
    );
}
