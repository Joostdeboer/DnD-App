export function appendOrRemoveTag({ tag, tagParam, url }: { tag: string; tagParam: string | null; url: URL }) {
    if (tagParam !== tag) {
        url.searchParams.set('tag', tag);
    } else {
        url.searchParams.delete('tag');
    }
}
