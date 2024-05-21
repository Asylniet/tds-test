import { UpdateUser, User, updateUserSchema } from "@/helpers/validators/user";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldType } from "@/types/field";
import SkillsMultiSelect from "@/components/SkillsMultiSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usersAPI } from "@/services/api/users";

type UserPageProps = {};

const UserPage: FC<UserPageProps> = () => {
  const navigate = useNavigate();
  const user = useLoaderData() as User;
  const form = useForm<UpdateUser>({
    resolver: zodResolver(updateUserSchema),
    mode: "onChange",
    defaultValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      skills: user.skills,
    },
  });

  const fields: FieldType<keyof UpdateUser>[] = [
    {
      name: "firstname",
      label: "First Name",
      placeholder: "John",
    },
    {
      name: "lastname",
      label: "Last Name",
      placeholder: "Doe",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "johndoe@example.com",
    },
  ];

  async function onSubmit(values: UpdateUser) {
    const response = await usersAPI.createUser(values);
    if (response) {
      navigate("/");
    }
  }
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Update the user</CardTitle>
        <CardDescription>
          Update the info about {user.firstname}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            method="POST"
          >
            {fields.map((_field) => (
              <FormField
                key={_field.name}
                control={form.control}
                name={_field.name}
                render={({ field }) => (
                  <FormItem>
                    {_field.label ? (
                      <FormLabel>{_field.label}</FormLabel>
                    ) : null}
                    <FormControl>
                      <Input placeholder={_field.placeholder} {...field} />
                    </FormControl>
                    {_field.description ? (
                      <FormDescription>{_field.description}</FormDescription>
                    ) : null}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <SkillsMultiSelect
                      userSkills={user.skills}
                      onChange={(values) => {
                        field.onChange(values);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={!form.formState.isValid}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserPage;
