import { FC, useState } from "react";
import { Command } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { Skill } from "@/helpers/validators/skill";
import MultiSelectBadges from "./MultiSelectBadges";
import SelectableList from "./SelectableList";
import { useSkillsInputValue } from "@/hooks/useSkillsInputValue";
import { useHandleSkillsSelection } from "@/hooks/useHandleSkillsSelection";

type SkillsMultiSelectProps = {
  userSkills: Skill[];
  onChange?: (values: Skill[]) => void;
};

/**
 * SkillsMultiSelect component.
 *
 * @component
 * @param {SkillsMultiSelectProps} props - The component props.
 * @param {Array<Skill>} props.userSkills - The array of user skills.
 * @param {Function} props.onChange - The function to handle skill selection change.
 * @returns {JSX.Element} The rendered SkillsMultiSelect component.
 */
const SkillsMultiSelect: FC<SkillsMultiSelectProps> = ({
  userSkills,
  onChange,
}) => {
  const { selected, setSelected, handleUnselect, selectables } =
    useHandleSkillsSelection(userSkills, onChange);
  const { handleKeyDown, inputRef, inputValue, setInputValue } =
    useSkillsInputValue(setSelected);
  const [open, setOpen] = useState(false);

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="bg-transparent overflow-visible"
    >
      <div className="border-input px-3 py-2 border rounded-md text-sm group ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          <MultiSelectBadges
            selected={selected}
            handleUnselect={handleUnselect}
          />
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
        <SelectableList
          open={open}
          inputValue={inputValue}
          selectables={selectables}
          onSelect={(value: Skill) => {
            setInputValue("");
            setSelected((prev) => [...prev, value]);
          }}
        />
      </div>
    </Command>
  );
};

export default SkillsMultiSelect;
