import { InputHTMLAttributes, useState, useEffect } from "react";
import { Input } from "./ui/input";

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
