import { User } from "@/helpers/validators/user";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { fuzzySort } from "@/helpers/fuzzyFilter";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import DeleteUserAlertDialog from "./DeleteUserAlertDialog";
import { useState } from "react";
import UserTableActions from "./UserTableActions";

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
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        ID
        <ArrowUpDown className="ml-2 w-4 h-4" />
      </Button>
    ),
    accessorKey: "id",
    filterFn: "equalsString",
  },
  {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 w-4 h-4" />
      </Button>
    ),
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
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 w-4 h-4" />
      </Button>
    ),
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
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date of Registration
        <ArrowUpDown className="ml-2 w-4 h-4" />
      </Button>
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
