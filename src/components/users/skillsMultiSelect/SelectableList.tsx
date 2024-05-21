import { FC } from "react";
import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { Skill } from "@/helpers/validators/skill";

type SelectableListProps = {
  selectables: Skill[];
  inputValue: string;
  onSelect: (value: Skill) => void;
  open: boolean;
};

const SelectableList: FC<SelectableListProps> = ({
  selectables,
  open,
  inputValue,
  onSelect,
}) => {
  return (
    <>
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
                  onSelect={(value: string) => onSelect(value as Skill)}
                  className="cursor-pointer"
                >
                  <span>{skill}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </div>
      ) : null}
    </>
  );
};

export default SelectableList;
