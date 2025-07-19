import { Text } from '@/src/components/atoms/generic/Text';
import { Field, Radio, RadioGroup } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '@/src/utils/functions/classnames';

export function ToggleOptions<T>({
    lineText,
    toggleValue,
    setToggleValue,
    toggleOptions,
}: {
    lineText: string;
    toggleValue: T;
    setToggleValue: (input: T) => void;
    toggleOptions: T[];
}) {
    return (
        <div className="flex flex-row items-center">
            <Text>{lineText}</Text>
            <RadioGroup
                value={toggleValue}
                onChange={setToggleValue}
                aria-label="Server size"
                className="flex flex-row rounded-full p-1"
            >
                {toggleOptions.map((sortingOption) => (
                    <Field key={`${sortingOption}`} className="group">
                        <Radio as={Fragment} value={sortingOption}>
                            {({ checked }) => (
                                <span
                                    className={classNames([
                                        'flex items-center justify-center px-2',
                                        'group-first:rounded-l-full group-last:rounded-r-full',
                                        'text-black dark:text-white',
                                        checked
                                            ? 'bg-brand-primary-500 cursor-default'
                                            : 'bg-brand-neutral-200 dark:bg-brand-neutral-800 group-hover:text-brand-primary-500 cursor-pointer',
                                    ])}
                                >
                                    {String(sortingOption).charAt(0).toUpperCase() + String(sortingOption).slice(1)}
                                </span>
                            )}
                        </Radio>
                    </Field>
                ))}
            </RadioGroup>
        </div>
    );
}
