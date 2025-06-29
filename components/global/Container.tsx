import { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto  px-8", className)}>{children}</div>;
}
export default Container;
