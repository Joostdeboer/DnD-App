import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/src/components/organisms/layout/Header';
import { Footer } from '@/src/components/organisms/layout/Footer';
import { classNames } from '@/src/utils/functions/classnames';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'The Luroan Codex',
    description: 'A website containing information about Luroa',
    icons: {
        icon: 'DnD-App/public/icon.ico',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body
                className={classNames([
                    inter.className,
                    'bg-brand-neutral-100 dark:bg-brand-neutral-900 flex flex-col items-center',
                ])}
            >
                <div className="max-w-[1440px] w-full">
                    <Header />
                    <div className="flex flex-row items-start">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
