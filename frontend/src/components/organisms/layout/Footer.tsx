import Link from 'next/link';
import { ClampedWidth } from '@/src/components/atoms/ClampedWidth';
import { BrandLogoText } from '@/src/components/atoms/BrandLogo';
import { Copyright } from '@/src/components/atoms/Copyright';

export function Footer() {
    // TODO: fix max-w-[1440px] to apply on the footer, and add content
    return (
        <ClampedWidth>
            <footer
                className="flex flex-row gap-4 bg-brand-primary-500 w-full shadow-extended-red"
                // style={{ boxShadow: '0 50vh 0 50vh #000;' }}
            >
                <div className="flex flex-col gap-2">
                    <BrandLogoText useDarkMode={false} />
                    <Copyright />
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="/luroa">Luroa</Link>
                    <Link href="/writing">Writing</Link>
                    <Link href="/gameplay">Gameplay</Link>
                    <Link href="/tools">Tools</Link>
                </div>
            </footer>
        </ClampedWidth>
    );
}
