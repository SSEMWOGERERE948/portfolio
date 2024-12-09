"use client";

import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="text-sm py-2 px-4">
      {name}
    </Badge>
  );
}