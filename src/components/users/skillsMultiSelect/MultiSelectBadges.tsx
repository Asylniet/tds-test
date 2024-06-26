import { Skill } from "@/helpers/validators/skill";
import { FC } from "react";
import { Badge } from "../../ui/badge";
import { X } from "lucide-react";

type MultiSelectBadgesProps = {
  selected: Skill[];
  handleUnselect: (skill: Skill) => void;
};

/**
 * Renders a list of badges for the selected skills.
 * @param {Object} props - The component props.
 * @param {string[]} props.selected - The array of selected skills.
 * @param {Function} props.handleUnselect - The function to handle unselecting a skill.
 * @returns {JSX.Element} - The rendered component.
 */
const MultiSelectBadges: FC<MultiSelectBadgesProps> = ({
  selected,
  handleUnselect,
}) => {
  return (
    <>
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
    </>
  );
};

export default MultiSelectBadges;
