import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationItems } from "@/data/data";
import Link from "next/link";
import { Badge } from "../../../ui/badge";
import { LucideIcon } from "lucide-react";
import React from "react";
const HeaderNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-0">
        {navigationItems.map((nav, i) => (
          <NavigationMenuItem key={i}>
            {nav.hasDropdown ? (
              <NavigationMenuTrigger>{nav.name}</NavigationMenuTrigger>
            ) : (
              <Link href={nav.href}>
                <NavigationMenuTrigger
                  className="hover:bg-transparent! cursor-pointer bg-transparent!"
                  icon={false}
                >
                  {nav.name}
                </NavigationMenuTrigger>
              </Link>
            )}
            {nav.hasDropdown && (
              <NavigationMenuContent>
                <ul className="grid p-2 lg:p-6 w-[400px] gap-4 lg:gap-5 md:w-[600px] md:grid-cols-3 lg:w-[800px]">
                  {nav.dropdownItems?.map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.name}
                      href={item.href}
                      badge={item.badge}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = ({
  title,
  children,
  href,
  badge,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  badge?: string;
  icon?: LucideIcon;
}) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="lg:p-4">
        <Link href={href}>
          <div className="flex items-center">
            {icon && React.createElement(icon, { className: "mr-2 h-4 w-4" })}
            <div className="text-sm leading-none font-medium flex items-center gap-2">
              {title}
              {badge && <Badge className="ml-2">{badge}</Badge>}
            </div>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default HeaderNavigation;
