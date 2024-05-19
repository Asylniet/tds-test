import { User } from "@/helpers/validators/user";
import { ColumnDef } from "@tanstack/react-table";
import {
  EyeIcon,
  MoreHorizontal,
  PenIcon,
  TrashIcon,
  ArrowUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export const columns: ColumnDef<User>[] = [
  {
    header: "ID",
    accessorKey: "id",
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
    cell: ({ row }) => (
      <div className="truncate">
        {row.original.firstname} {row.original.lastname}
      </div>
    ),
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
  },
  {
    header: "Skills",
    accessorKey: "skills",
  },
  {
    header: "Date of Registration",
    accessorKey: "dateOfRegistration",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
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
              className="data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground transition-colors cursor-pointer"
              asChild
            >
              <Link to={`/user/${user.id}`}>
                View
                <EyeIcon className="ml-auto w-4 h-4" />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Edit
              <PenIcon className="ml-auto w-4 h-4" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Delete
              <TrashIcon className="ml-auto w-4 h-4" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
