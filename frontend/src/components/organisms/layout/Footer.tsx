import Link from 'next/link';

export function Footer() {
    // TODO: fix max-w-[1440px] to apply on the footer, and add content
    return (
        <footer className="flex flex-row gap-4 bg-brand-primary-700 w-full">
            <div className="flex flex-col gap-2">
                <div>Image here</div>
                <div>Copyright?</div>
            </div>
            <div className="flex flex-col gap-2">
                <Link href="/luroa">Luroa</Link>
                <Link href="/writing">Writing</Link>
                <Link href="/gameplay">Gameplay</Link>
                <Link href="/tools">Tools</Link>
            </div>
        </footer>
    );
}
