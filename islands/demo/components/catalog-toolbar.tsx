import { Button } from "@/components/ui/button.tsx"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/islands/ui/input-group.tsx"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/islands/ui/toggle-group.tsx"
import { PlusIcon, SearchIcon, } from "lucide-preact"

export function CatalogToolbar() {
  return (
    <div className="flex items-center gap-3">
      <InputGroup className="flex-1">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search releases or catalog..." />
      </InputGroup>
      <Button>
        <PlusIcon />
        Upload New Release
      </Button>
      <ToggleGroup defaultValue={["releases"]} variant="outline">
        <ToggleGroupItem value="all-tracks">All Tracks</ToggleGroupItem>
        <ToggleGroupItem value="releases">Releases</ToggleGroupItem>
        <ToggleGroupItem value="top-earners">Top Earners</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
