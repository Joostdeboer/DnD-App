export function classNames(input: (string | undefined)[]) {
    return input.filter((str) => !!str).join(' ');
}
