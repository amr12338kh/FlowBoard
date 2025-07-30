import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserAvatarProps } from "@/types/types";
import Link from "next/link";

const UserAvatar = ({
  name,
  email,
  image,
  initials,
  className,
  avatarClassName,
  withText = true,
}: UserAvatarProps) => {
  const avatarIcon = () => (
    <Avatar className={cn(avatarClassName, "h-10 w-10 ring-2 ring-primary/10")}>
      <AvatarImage src={image} alt={name} />
      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
        {initials || name.split(" ")[0][0] + name.split(" ")[1][0]}
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
            {name}
          </h3>
          <p className="text-xs text-muted-foreground truncate">{email}</p>
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
