import { Skill, skills } from "@/helpers/validators/skill";
import { useCallback, useState, useEffect } from "react";

/**
 * Custom hook for handling skills selection.
 *
 * @param initialSkills - The initial array of skills.
 * @param onChange - Optional callback function to be called when the selected skills change.
 * @returns An object containing the selected skills, a function to handle unselecting a skill, the function to set the selected skills, and the available selectables.
 */
export const useHandleSkillsSelection = (
  initialSkills: Skill[],
  onChange?: (values: Skill[]) => void
) => {
  const [isDirty, setIsDirty] = useState(false);
  const [selected, setSelected] = useState(initialSkills);

  const handleUnselect = useCallback((skill: Skill) => {
    setSelected((prev) => prev.filter((s) => s !== skill));
  }, []);

  const selectables = skills.filter(
    (skill) => !selected.some((s) => s === skill)
  );

  useEffect(() => {
    if (selected.length > 0) setIsDirty(true);
    isDirty && onChange?.(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, isDirty]);

  return { selected, handleUnselect, setSelected, selectables };
};
