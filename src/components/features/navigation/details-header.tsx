"use client";

import { CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface DetailsHeaderProps {
  title: string;
  onDone?: () => void;
  doneText?: string;
}

export function DetailsHeader({ title, onDone, doneText = "Done" }: DetailsHeaderProps) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between h-14 bg-background/80 backdrop-blur-md border-b px-4 -mx-4 md:-mx-8">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 -ml-2 rounded-full"
          onClick={() => router.back()}
        >
          <CaretLeft size={24} weight="bold" />
        </Button>
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      {onDone && (
        <Button 
          variant="ghost" 
          className="text-blue-500 font-bold hover:text-blue-600 hover:bg-transparent"
          onClick={onDone}
        >
          {doneText}
        </Button>
      )}
    </div>
  );
}
