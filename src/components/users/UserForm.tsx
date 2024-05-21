import { FC } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fields } from "@/components/users/fields";
import SkillsMultiSelect from "./skillsMultiSelect/SkillsMultiSelect";
import { User } from "@/helpers/validators/user";
import { useUserForm } from "@/hooks/useUserForm";

type UserFormProps = {
  user?: User;
};

/**
 * UserForm component.
 * Renders a form for editing user details.
 *
 * @component
 * @param {UserFormProps} props - The component props.
 * @param {User} props.user - The user object containing the initial values for the form fields.
 * @returns {JSX.Element} The rendered UserForm component.
 */
const UserForm: FC<UserFormProps> = ({ user }) => {
  const { form, onSubmit } = useUserForm(user);
  return (
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
                {_field.label ? <FormLabel>{_field.label}</FormLabel> : null}
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
                  userSkills={user ? user.skills : []}
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
  );
};

export default UserForm;
