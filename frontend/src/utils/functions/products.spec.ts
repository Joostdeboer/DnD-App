import { findLinkRecursively } from '@/src/utils/functions/products';
import { HEADERLINKS, HeaderLinkType } from '@/src/utils/constants/links';
import { PRODUCT_TYPES } from '@/src/utils/constants/variables';

describe('products file', () => {
    describe('findLinkRecursively function', () => {
        it('should return the checked value', () => {
            const result = findLinkRecursively({
                input: HEADERLINKS,
                checkedValue: 'god',
                writingType: null,
            });
            expect(result).toEqual('/luroa/gods');
        });
        it('should return the checked value if a writingType is present', () => {
            const result = findLinkRecursively({
                input: HEADERLINKS,
                checkedValue: 'writing',
                writingType: 'story',
            });
            expect(result).toEqual('/writing/stories');
        });
        it('should return undefined if it is not present', () => {
            const result = findLinkRecursively({
                input: HEADERLINKS,
                checkedValue: 'test!',
                writingType: null,
            });
            expect(result).toEqual(undefined);
        });
        it('should return undefined if the input is empty', () => {
            const result = findLinkRecursively({
                input: [],
                checkedValue: 'god',
                writingType: null,
            });
            expect(result).toEqual(undefined);
        });
        it('should return the actual value if incompatible checkedValue with writingType', () => {
            const result = findLinkRecursively({
                input: HEADERLINKS,
                checkedValue: 'god',
                writingType: 'story',
            });
            expect(result).toEqual('/luroa/gods');
        });
        it('should throw an error if multiple entries are returned', () => {
            const input: HeaderLinkType[] = [
                {
                    name: 'option1',
                    href: '/option1',
                    menuItems: [
                        {
                            name: 'test',
                            href: '/option1/test',
                            sanityType: PRODUCT_TYPES.GOD,
                        },
                        {
                            name: 'test',
                            href: '/option1/test',
                            sanityType: PRODUCT_TYPES.GOD,
                        },
                    ],
                },
            ];

            try {
                findLinkRecursively({
                    input,
                    checkedValue: 'god',
                    writingType: null,
                });
                fail();
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
                if (e instanceof Error) {
                    expect(e.message).toEqual(
                        `Too many items (${input[0].menuItems?.length}) match: "${input[0].menuItems?.[0].href}"`,
                    );
                }
            }
        });
    });
});
