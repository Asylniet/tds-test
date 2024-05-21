import { FC } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "lucide-react";

type AddNewUserButtonProps = {};

const AddNewUserButton: FC<AddNewUserButtonProps> = () => {
  return (
    <Button asChild variant="outline">
      <Link to="/user/new">
        <PlusSquareIcon className="w-4 h-4" />
        <span className="ml-2">Add new user</span>
      </Link>
    </Button>
  );
};

export default AddNewUserButton;
