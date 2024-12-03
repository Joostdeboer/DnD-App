import { TypeFromSelection } from 'groqd';
import { imageSelection } from '@/src/groqd/helper/objects';

export type Image = TypeFromSelection<typeof imageSelection>;
