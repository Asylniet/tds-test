import { User } from "@/helpers/validators/user";
import { ColumnDef } from "@tanstack/react-table";
import { fuzzySort } from "@/helpers/fuzzyFilter";
import { Checkbox } from "../../ui/checkbox";
import { Badge } from "../../ui/badge";
import UserTableActions from "./UserTableActions";
import { ColumnHeader } from "@/components/table/ColumnHeader";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
  },
  {
    header: ({ column }) => <ColumnHeader column={column} title="ID" />,
    accessorKey: "id",
    filterFn: "equalsString",
  },
  {
    header: ({ column }) => <ColumnHeader column={column} title="Name" />,
    accessorKey: "name",
    accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    cell: ({ row }) => (
      <div className="truncate">
        {row.original.firstname} {row.original.lastname}
      </div>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    header: ({ column }) => <ColumnHeader column={column} title="Email" />,
    accessorKey: "email",
    filterFn: "includesString",
  },
  {
    header: "Skills",
    accessorKey: "skills",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1">
        {row.original.skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    header: ({ column }) => (
      <ColumnHeader column={column} title="Date of Registration" />
    ),
    accessorKey: "dateOfRegistration",
    cell: ({ row }) => (
      <div>{row.original.dateOfRegistration.toLocaleDateString("ru-RU")}</div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <UserTableActions user={row.original} />,
  },
];
