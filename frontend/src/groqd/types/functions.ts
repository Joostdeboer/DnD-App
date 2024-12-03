import { InferType } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';

export type PortableTextGroqd = InferType<ReturnType<typeof portableTextQuery>>;
