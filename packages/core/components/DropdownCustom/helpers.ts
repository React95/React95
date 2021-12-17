import {
  DropdownCustomOption,
  DropdownCustomOptionObject,
} from './DropdownCustom';

const isOptionObject = (
  option: DropdownCustomOption,
): option is DropdownCustomOptionObject =>
  typeof option === 'object' && option !== null && 'value' in option;

const convertOptionToObjects = (
  option: DropdownCustomOption,
): DropdownCustomOptionObject => {
  if (isOptionObject(option)) {
    return option;
  }
  return { value: option };
};

export const convertOptionsToObjects = (options: DropdownCustomOption[]) =>
  options.map(convertOptionToObjects);
