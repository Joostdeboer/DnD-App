import { Information } from '@/src/sanity/types';
import { intlFormat, IntlFormatFormatOptions, IntlFormatLocaleOptions } from 'date-fns';
import { HeaderLinkType } from '@/src/utils/constants/links';

/**
 * get the number of attributes that are added to the product page
 * @param information
 */
export function getNrOfAttributesForProduct(information?: Information) {
    let attributeLength = 0;
    if (information) {
        Object.keys(information).forEach((key) => {
            attributeLength += Object.values(information?.[key as keyof typeof information] ?? {}).length;
        });
    }
    return attributeLength;
}

export function formatDate(
    date: Date,
    options?: { formatOptions?: IntlFormatFormatOptions; localeOptions?: IntlFormatLocaleOptions },
) {
    return intlFormat(
        date,
        {
            hourCycle: 'h24',
            dateStyle: 'long',
            ...options?.formatOptions,
        },
        { locale: 'en-En', ...options?.localeOptions },
    );
}

/**
 * recursively find the value of `checkedValue` - if it exists - and return it from the list of `input`
 * @param input
 * @param checkedValue
 * @param writingType
 */
export function findLinkRecursively({
    input,
    checkedValue,
    writingType,
}: {
    input: HeaderLinkType[];
    checkedValue: string;
    writingType: string | null;
}): string | undefined {
    const mapped = input
        .map((item) => {
            if (item.sanityType === checkedValue) {
                if (item.writingType !== undefined) {
                    return item.writingType === writingType ? item.href : undefined;
                } else {
                    return item.href;
                }
            }
            if (!item.menuItems) return undefined;
            return findLinkRecursively({ input: item.menuItems, checkedValue, writingType });
        })
        .filter((item) => item !== undefined);

    if (mapped.length > 1) throw new Error(`Too many items (${mapped.length}) match: "${mapped[0]}"`);
    if (mapped.length === 0) return undefined;
    return mapped[0];
}
