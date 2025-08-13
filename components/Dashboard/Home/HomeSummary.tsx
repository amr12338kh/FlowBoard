import { auth } from "@/auth";
import { formatDate, getGreeting } from "@/lib/helpers";
import { Check, Users2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HomeSummary = async () => {
  const date = new Date();
  const session = await auth();

  return (
    <div className="text-center space-y-2 sm:space-y-3">
      <p className="font-semibold text-base sm:text-lg">
        {formatDate(date, false)}
      </p>
      <h3 className="font-semibold text-2xl sm:text-3xl">
        {getGreeting(session?.user?.name?.split(" ")[0] || "Guest")}
      </h3>
      <div className="py-3 sm:py-1 px-2 sm:px-4 lg:px-8 rounded-full bg-secondary-basic flex items-center gap-3 lg:gap-8">
        <Select>
          <SelectTrigger className="border-none shadow-none cursor-pointer p-0 text-xs sm:text-sm text-muted-foreground">
            <SelectValue placeholder="My week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="my week">My week</SelectItem>
            <SelectItem value="my month">My month</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1 lg:p-2 text-muted-foreground">
          <Check className="size-4 sm:size-5 hidden sm:block" />
          <span className="text-sm sm:text-lg font-semibold">1</span>
          <span className="text-xs sm:text-sm font-medium">task completed</span>
        </div>
        <div className="flex items-center gap-1 lg:p-2 text-muted-foreground">
          <Users2 className="size-4 sm:size-5 hidden sm:block" />
          <span className="text-sm sm:text-lg font-semibold">0</span>
          <span className="text-xs sm:text-sm font-medium">collaborators</span>
        </div>
      </div>
    </div>
  );
};

export default HomeSummary;
