import { InformationType } from '@/src/groqd/types/subqueries';

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
