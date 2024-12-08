import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { TypeFromSelection } from 'groqd';

export type InformationType = TypeFromSelection<typeof information>;
export type DefaultAttributesType = TypeFromSelection<typeof defaultAttributes>;
