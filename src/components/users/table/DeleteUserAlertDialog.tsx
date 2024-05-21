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
import useUserStore from "@/store/userStore";

type DeleteUserAlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: User["id"];
};

/**
 * Component for displaying an alert dialog to confirm the deletion of a user.
 * @param open - Boolean indicating whether the alert dialog is open.
 * @param onOpenChange - Function to handle the change in the open state of the alert dialog.
 * @param userId - The ID of the user to be deleted.
 * @returns The DeleteUserAlertDialog component.
 */
const DeleteUserAlertDialog: FC<DeleteUserAlertDialogProps> = ({
  open,
  onOpenChange,
  userId,
}) => {
  const { deleteUser } = useUserStore();
  const handleDelete = async () => {
    try {
      await usersAPI.deleteUser(userId).then(() => {
        toast.success("User deleted successfully");
      });
      deleteUser(userId);
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
