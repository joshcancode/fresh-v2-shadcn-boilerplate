import { Loader2Icon } from "lucide-preact"

import { cn } from "cn"

function Spinner({ className, ...props }: preact.ComponentProps<"svg"> & { strokeWidth?: number | string }) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
