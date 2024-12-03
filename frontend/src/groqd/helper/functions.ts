import { PortableTextSelection } from './objects';
import { q } from 'groqd';

export const portableTextQuery = (name: string) => q(name).filter().select(PortableTextSelection);
