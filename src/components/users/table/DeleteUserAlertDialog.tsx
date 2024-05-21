import { FC } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../ui/alert-dialog";
import { User } from "@/helpers/validators/user";
import { usersAPI } from "@/services/api/users";
import { toast } from "sonner";

type DeleteUserAlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: User["id"];
};

const DeleteUserAlertDialog: FC<DeleteUserAlertDialogProps> = ({
  open,
  onOpenChange,
  userId,
}) => {
  const handleDelete = async () => {
    console.log("Deleting user");
    try {
      console.log("userId", userId);
      await usersAPI.deleteUser(userId).then(() => {
        toast.success("User deleted successfully");
      });
    } catch (error) {
      toast.error("An error occurred while deleting the user");
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete the user?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the user.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteUserAlertDialog;
