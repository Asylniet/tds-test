import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { MoreHorizontal, PenIcon, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import DeleteUserAlertDialog from "./table/DeleteUserAlertDialog";
import { User } from "@/helpers/validators/user";

type UserTableActionsProps = {
  user: User;
};

const UserTableActions: FC<UserTableActionsProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0 w-8 h-8">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            className="transition-colors cursor-pointer"
            asChild
          >
            <Link to={`/user/${user.id}`}>
              Edit
              <PenIcon className="ml-auto w-4 h-4" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => setOpen(true)}
          >
            Delete
            <TrashIcon className="ml-auto w-4 h-4" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteUserAlertDialog
        open={open}
        onOpenChange={setOpen}
        userId={user.id}
      />
    </>
  );
};

export default UserTableActions;
