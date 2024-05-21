import {
  FC,
  useRef,
  useState,
  useCallback,
  KeyboardEvent,
  useEffect,
} from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { Skill, skills } from "@/helpers/validators/skill";

type SkillsMultiSelectProps = {
  userSkills: Skill[];
  onChange?: (values: Skill[]) => void;
};

const SkillsMultiSelect: FC<SkillsMultiSelectProps> = ({
  userSkills,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Skill[]>(userSkills);
  const [inputValue, setInputValue] = useState("");

  const handleUnselect = useCallback((skill: Skill) => {
    setSelected((prev) => prev.filter((s) => s !== skill));
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
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
  }, []);

  const selectables = skills.filter(
    (skill) => !selected.some((s) => s === skill)
  );

  useEffect(() => {
    if (selected.length > 0) setIsDirty(true);
    isDirty && onChange?.(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="bg-transparent overflow-visible"
    >
      <div className="border-input px-3 py-2 border rounded-md text-sm group ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
              <button
                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUnselect(skill);
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={() => handleUnselect(skill)}
              >
                <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
              </button>
            </Badge>
          ))}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select frameworks..."
            className="flex-1 bg-transparent ml-2 placeholder:text-muted-foreground outline-none"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="top-0 z-10 absolute bg-popover shadow-md border rounded-md w-full text-popover-foreground animate-in outline-none">
            <CommandList>
              <CommandEmpty>No results found for "{inputValue}"</CommandEmpty>
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((skill) => (
                  <CommandItem
                    key={skill}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={(value) => {
                      setInputValue("");
                      setSelected((prev) => [...prev, skill]);
                    }}
                    className="cursor-pointer"
                  >
                    <span>{skill}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </div>
        ) : null}
      </div>
    </Command>
  );
};

export default SkillsMultiSelect;
