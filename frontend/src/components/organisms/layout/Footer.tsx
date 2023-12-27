import Link from 'next/link';
import { ClampedWidth } from '@/src/components/atoms/ClampedWidth';
import { BrandLogoText } from '@/src/components/atoms/BrandLogo';
import { Copyright } from '@/src/components/atoms/Copyright';

export function Footer() {
    return (
        <ClampedWidth className="mt-auto">
            <footer className="flex flex-row gap-16 bg-brand-primary-500 w-full pt-4 pb-10 grow px-2 md:px-4 divide-x divide-brand-primary-600">
                <div className="flex flex-col gap-2">
                    <BrandLogoText useDarkMode={false} />
                    <Copyright />
                </div>
                <div className="flex flex-col gap-2 pl-10">
                    <Link href="/luroa" className="hover:underline">
                        Luroa
                    </Link>
                    <Link href="/writing" className="hover:underline">
                        Writing
                    </Link>
                    <Link href="/gameplay" className="hover:underline">
                        Gameplay
                    </Link>
                    <Link href="/tools" className="hover:underline">
                        Tools
                    </Link>
                </div>
            </footer>
        </ClampedWidth>
    );
}
