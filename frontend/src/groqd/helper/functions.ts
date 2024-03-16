import { PortableTextSelection } from './objects';
import { InferType, q } from 'groqd';

export type PortableTextGroqd = InferType<ReturnType<typeof portableTextQuery>>;
export const portableTextQuery = (name: string) => q(name).filter().select(PortableTextSelection);
