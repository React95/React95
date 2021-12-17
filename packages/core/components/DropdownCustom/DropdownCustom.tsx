import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useClickAway } from 'react-use';
import {
  CaretButton,
  Option,
  Options,
  Overlay,
  Select,
  SelectedValue,
  Wrapper,
} from './DropdownCustom.styles';

import { convertOptionsToObjects } from './helpers';

type Value = string | number;
export type DropdownCustomOptionObject = {
  value: Value;
  onClick?: (value: Value, index: number) => void;
};
export type DropdownCustomOption = Value | DropdownCustomOptionObject;

type PropsWithHTMLAttributes<T, U> = Omit<U, keyof T> & T;

export type DropdownCustomProps = PropsWithHTMLAttributes<
  {
    options: DropdownCustomOption[];
    defaultOpen?: boolean;
    defaultIndex?: number;
    maxHeight?: CSSStyleDeclaration['maxHeight'];
    onChange?: (value: Value, index: number) => void;
  },
  React.HTMLAttributes<HTMLDivElement>
>;

const DropdownCustom = forwardRef<HTMLDivElement, DropdownCustomProps>(
  (
    {
      options,
      defaultOpen = false,
      defaultIndex,
      maxHeight,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [optionObjects, setOptionObjects] = useState<
      DropdownCustomOptionObject[]
    >(convertOptionsToObjects(options));

    useEffect(() => {
      setOptionObjects(convertOptionsToObjects(options));
    }, [options]);

    const optionsRef = useRef<HTMLDivElement>(null);
    useClickAway(optionsRef, () => {
      setOpen(false);
      setHoveredIndex(null);
    });

    const resetHoveredIndex = useCallback(() => {
      setHoveredIndex(null);
    }, []);

    const handleSelectClick = useCallback(() => {
      setOpen(!isOpen);
      if (isOpen) {
        resetHoveredIndex();
      }
    }, [isOpen]);

    const handleOptionClick = useCallback((index: number) => {
      setSelectedIndex(index);
      resetHoveredIndex();
      const option = optionObjects[index];

      onChange?.(option.value, index);
      option.onClick?.(option.value, index);
    }, []);

    const handleOptionHover = useCallback((index: number) => {
      setHoveredIndex(index);
    }, []);

    return (
      <Wrapper>
        <Select {...rest} ref={ref} onClick={handleSelectClick}>
          <Overlay>
            <SelectedValue>
              {selectedIndex !== undefined &&
                optionObjects[selectedIndex].value}
            </SelectedValue>
            <CaretButton />
          </Overlay>
          <Options
            isOpen={isOpen}
            onMouseLeave={resetHoveredIndex}
            maxHeight={maxHeight}
            ref={optionsRef}
          >
            {optionObjects.map((option, index) => (
              <Option
                key={option.value}
                isHighlighted={
                  index === hoveredIndex ||
                  (index === selectedIndex && hoveredIndex === null)
                }
                onClick={() => handleOptionClick(index)}
                onMouseEnter={() => handleOptionHover(index)}
              >
                {option.value}
              </Option>
            ))}
          </Options>
        </Select>
      </Wrapper>
    );
  },
);

export default DropdownCustom;
