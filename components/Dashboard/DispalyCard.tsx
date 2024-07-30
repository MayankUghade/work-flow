import { TrashIcon } from "@radix-ui/react-icons";
import { MdOutlineEditNote } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Task } from "@prisma/client";
import { format, formatDistanceToNow } from "date-fns"; // Import formatDistanceToNow for relative time

export default function DisplayCard({ data }: { data: Task }) {
  const formattedDueDate = data.dueDate
    ? format(new Date(data.dueDate), "PPPpp")
    : "No deadline";

  // Convert createdAt to relative time
  const relativeCreatedAt = formatDistanceToNow(new Date(data.createdAt), {
    addSuffix: true,
  });

  // Adjust badge color based on priority
  const badgeColor =
    {
      low: "bg-green-400",
      medium: "bg-yellow-400",
      urgent: "bg-red-400",
    }[data.priority ? data.priority.toString() : "No priority"] ||
    "bg-gray-400";

  return (
    <div className="p-3 border rounded-lg dark:bg-gray-900 bg-gray-100 flex flex-col gap-3 mt-2">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">{data.title}</h1>
      </div>

      <p className="text-md text-muted-foreground">
        {data.description || "No description"}
      </p>

      <Badge className={`w-fit ${badgeColor} text-md`}>
        {data.priority || "No priority"}
      </Badge>

      <h1 className="text-sm">
        Deadline:{" "}
        <span className="text-muted-foreground">{formattedDueDate}</span>
      </h1>
      <h1 className="text-sm">Created {relativeCreatedAt}</h1>

      <div className="flex items-center gap-1 mt-2">
        <MdOutlineEditNote className="font-bold text-4xl cursor-pointer" />
        <TrashIcon className="font-bold text-4xl cursor-pointer" />
      </div>
    </div>
  );
}
