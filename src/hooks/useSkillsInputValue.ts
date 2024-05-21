import { Skill } from "@/helpers/validators/skill";
import { useCallback, useRef, useState, KeyboardEvent } from "react";

export const useSkillsInputValue = (
  setSelected: React.Dispatch<React.SetStateAction<Skill[]>>
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [setSelected]
  );

  return { inputRef, inputValue, setInputValue, handleKeyDown };
};
