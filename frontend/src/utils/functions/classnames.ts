export function classNames(input: (string | undefined | false)[]) {
    return input.filter((str) => !!str).join(' ');
}
