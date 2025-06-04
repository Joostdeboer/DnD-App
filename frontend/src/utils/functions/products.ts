import { Information } from '@/src/sanity/types';
import { intlFormat, IntlFormatFormatOptions, IntlFormatLocaleOptions } from 'date-fns';

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
