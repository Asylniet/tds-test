import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChevronLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { User } from "@/helpers/validators/user";
import UserForm from "./UserForm";

type UserFormCardProps = {
  user?: User;
};

const UserFormCard: FC<UserFormCardProps> = ({ user }) => {
  const title = user ? `Update a user` : "Create a new user";
  const description = user
    ? `Update the info about ${user.firstname} ${user.lastname}`
    : "Create a new user";
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ChevronLeftIcon className="w-4 h-4" />
            </Link>
          </Button>
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <UserForm user={user} />
      </CardContent>
    </Card>
  );
};

export default UserFormCard;
