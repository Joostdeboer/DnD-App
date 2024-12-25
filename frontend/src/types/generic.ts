import { DefaultAttributesType, InformationType } from '@/src/groqd/types/subqueries';

const TEXT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'logo'] as const;
export type TextSizes = (typeof TEXT_SIZES)[number];

const HEADER_VARIANTS = ['title', 'subTitle'] as const;
export type HeaderVariants = (typeof HEADER_VARIANTS)[number];

export interface Product {
    _updatedAt: Date;
    _createdAt: Date;
    defaultAttributes?: DefaultAttributesType | null;
    information?: InformationType | null;
}

// taken from https://stackoverflow.com/questions/73159893/typescript-string-dot-notation-of-nested-generic-type-that-belongs-to-property-o
export type Dot<T extends string, U extends string> = '' extends U ? T : `${T}.${U}`;
export type PathsToProps<T, V> = T extends V
    ? ''
    : {
          [K in Extract<keyof T, string>]: Dot<K, PathsToProps<T[K], V>>;
      }[Extract<keyof T, string>];
