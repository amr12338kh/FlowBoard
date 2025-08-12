import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronsUpDown, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserAvatarProps } from "@/types/types";
import Link from "next/link";

const UserAvatar = ({
  session,
  className,
  avatarClassName,
  withText = true,
  withSittings = true,
}: UserAvatarProps) => {
  const username = session?.user?.name || "unknown";
  const userImage = session?.user?.image || "";
  const userEmail = session?.user?.email || "unknown";

  const AvatarIcon = ({ avatarClassName }: { avatarClassName?: string }) => (
    <Avatar className={cn(avatarClassName, "h-7 w-7 sm:h-10 sm:w-10")}>
      <AvatarImage src={userImage} alt={username} />
      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
        {username.split(" ")[0][0] + username.split(" ")[1]?.[0]}
      </AvatarFallback>
    </Avatar>
  );

  if (!withText) return <AvatarIcon avatarClassName={avatarClassName} />;

  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      <div className="flex items-center gap-2 cursor-pointer group/avatar">
        <AvatarIcon avatarClassName="h-9! w-9! " />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm truncate group-hover/avatar:text-primary transition-colors">
            {username}
          </h3>
          <p className="text-xs text-muted-foreground truncate line-clamp-1">
            {userEmail}
          </p>
        </div>
      </div>
      {withSittings ? (
        <Link href="/settings" className="ml-4">
          <Settings
            size={16}
            className="text-muted-foreground hover:text-foreground hover:scale-105 transition-colors"
          />
        </Link>
      ) : (
        <div className="">
          <ChevronsUpDown className="size-4" />
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
