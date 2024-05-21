import { InputHTMLAttributes, useState, useEffect } from "react";
import { Input } from "./ui/input";

/**
 * A debounced input component that delays the onChange event until a specified delay has passed.
 *
 * @param value - The initial value of the input.
 * @param onChange - The callback function to be called when the input value changes.
 * @param delay - The delay in milliseconds before triggering the onChange event. Default is 500ms.
 * @param props - Additional props to be passed to the underlying input element.
 */
const DebouncedInput = ({
  value: initialValue,
  onChange,
  delay = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  delay?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, onChange, value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default DebouncedInput;
