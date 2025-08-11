import { darkenHexColor } from "@/lib/helpers";
import { FeatureProps } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeatureCard = ({ feature }: { feature: FeatureProps }) => {
  const textColor = darkenHexColor("var(--color-primary)", 100);

  return (
    <div className="group relative bg-transparent border border-muted-foreground/20 rounded-md p-8 transition-all duration-200 flex flex-col flex-shrink-0 max-w-[500px] w-full hover:bg-primary/10">
      <div className="flex flex-col h-full">
        <div className="mb-5">
          <div className="inline-block">
            <div className="p-4 rounded-full bg-primary/10 transition-all duration-300 ease-out transform group-hover:scale-105">
              <feature.icon
                className="h-8 w-8 transition-all duration-300"
                style={{
                  color: textColor,
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="mb-5 flex-1">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{
                color: textColor,
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                color: textColor,
              }}
            >
              {feature.description}
            </p>
          </div>

          <div className="mt-auto pt-2">
            <Link
              href="#"
              className="group/link inline-flex items-center gap-4 font-medium transition-all duration-300 py-3 px-4 -mx-4"
            >
              <span
                className="relative"
                style={{
                  color: textColor,
                }}
              >
                Learn more
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300 ease-out" />
              </span>

              <span className="p-1 rounded-full bg-primary-basic text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight className="size-3.5 sm:size-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
