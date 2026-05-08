import { Loader2Icon } from "lucide-preact"

import { cn } from "@/lib/utils.ts"

function Spinner({ className, strokeWidth, ...props }: preact.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      strokeWidth={strokeWidth?.toString()}
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
