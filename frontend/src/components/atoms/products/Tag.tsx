export function Tag({ tag, count }: { tag: string | null; count?: number }) {
    return (
        <div className="rounded-full bg-brand-primary-500 w-fit px-4 text-sm flex flex-row gap-1 justify-center">
            <span>{tag}</span>
            <span>({count})</span>
        </div>
    );
}
