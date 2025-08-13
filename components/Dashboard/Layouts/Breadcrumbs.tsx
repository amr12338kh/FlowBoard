"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const paths = segments.map(
    (_, idx) => "/" + segments.slice(0, idx + 1).join("/")
  );
  const lastIndex = segments.length - 1;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, i) => (
          <Fragment key={segment + "-" + i}>
            <BreadcrumbItem>
              {i === lastIndex ? (
                <BreadcrumbPage className="capitalize">
                  {segment.replace(/-/g, " ")}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={paths[i]} className="capitalize">
                  {segment.replace(/-/g, " ")}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>

            {i !== lastIndex && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
