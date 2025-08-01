import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserAvatarProps } from "@/types/types";
import Link from "next/link";

const UserAvatar = ({
  session,
  className,
  avatarClassName,
  withText = true,
}: UserAvatarProps) => {
  const username = session?.user?.name || "unknown";
  const userImage = session?.user?.image || "";
  const userEmail = session?.user?.email || "unknown";

  const avatarIcon = () => (
    <Avatar className={cn(avatarClassName, "h-10 w-10 ring-2 ring-primary/10")}>
      <AvatarImage src={userImage} alt={username} />
      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
        {username.split(" ")[0][0] + username.split(" ")[1]?.[0]}
      </AvatarFallback>
    </Avatar>
  );

  if (!withText) return avatarIcon();

  return (
    <div className={cn("flex items-center gap-5", className)}>
      <Link
        href="/account"
        className="flex items-center p-3 gap-3 rounded-lg bg-background cursor-pointer group hover:bg-muted/50 transition-colors"
      >
        {avatarIcon()}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
            {username}
          </h3>
          <p className="text-xs text-muted-foreground truncate">{userEmail}</p>
        </div>
      </Link>
      <Link href="/settings">
        <Settings
          size={16}
          className="text-muted-foreground mr-2 hover:text-foreground hover:scale-105 transition-colors"
        />
      </Link>
    </div>
  );
};

export default UserAvatar;
