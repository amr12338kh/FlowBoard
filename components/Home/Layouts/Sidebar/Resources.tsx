import { Button } from "@/components/ui/button";
import { HelpCircle, User } from "lucide-react";
import Link from "next/link";

const Resources = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
        Resources
      </h3>
      <div className="space-y-1">
        <Link href="/help">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-2 text-sm"
          >
            <HelpCircle size={16} />
            Help Center
          </Button>
        </Link>
        <Link href="/docs">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-2 text-sm"
          >
            <User size={16} />
            Documentation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Resources;
