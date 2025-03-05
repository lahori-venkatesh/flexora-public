import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}
export function SearchBar({
  onSearch,
  placeholder = "Search..."
}: SearchBarProps) {
  return <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input type="search" placeholder={placeholder} onChange={e => onSearch(e.target.value)} className="pl-10 px-[41px] mx-0" />
    </div>;
}