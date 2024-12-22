import { InformationType } from '@/src/groqd/types/subqueries';
import { intlFormat } from 'date-fns';

/**
 * get the number of attributes that are added to the product page
 * @param information
 */
export function getNrOfAttributesForProduct(information?: InformationType) {
    let attributeLength = 0;
    if (information) {
        Object.keys(information).forEach((key) => {
            attributeLength += Object.values(information?.[key as keyof typeof information] ?? {}).length;
        });
    }
    return attributeLength;
}

export function formatDate(date: Date) {
    return intlFormat(
        date,
        {
            hourCycle: 'h24',
            dateStyle: 'long',
        },
        { locale: 'en-En' },
    );
}
