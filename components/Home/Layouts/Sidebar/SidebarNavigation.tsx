import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { navigationItems } from "@/data/data";
import { Button } from "../../../ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "../../../ui/badge";
import { useState } from "react";
const SidebarNavigation = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  return (
    <nav className="space-y-1">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-3">
        Navigation
      </h3>

      {navigationItems.map((item) => (
        <div key={item.name} className="space-y-1">
          {item.hasDropdown ? (
            <>
              <button
                onClick={() => toggleSection(item.name)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                )}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon size={18} />}
                  <span>{item.name}</span>
                </div>
                <ChevronRight
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    expandedSection === item.name && "rotate-90"
                  )}
                />
              </button>

              {/* Dropdown Items */}
              <div
                className={cn(
                  "overflow-hidden mt-3 transition-all duration-300 ease-out",
                  expandedSection === item.name
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="ml-4 space-y-1 border-l-2 border-muted pl-4">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link key={dropdownItem.name} href={dropdownItem.href}>
                      <div className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors group">
                        {dropdownItem.icon && (
                          <dropdownItem.icon
                            size={16}
                            className="text-muted-foreground group-hover:text-foreground"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium truncate">
                              {dropdownItem.name}
                            </span>
                            {dropdownItem.badge && (
                              <Badge className="text-xs px-1.5 py-0">
                                {dropdownItem.badge}
                              </Badge>
                            )}
                          </div>
                          {dropdownItem.description && (
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              {dropdownItem.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 px-3 py-2.5 h-auto",
                  "hover:bg-accent hover:text-accent-foreground",
                  "font-medium"
                )}
              >
                {item.icon && <item.icon size={18} />}
                {item.name}
              </Button>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SidebarNavigation;
