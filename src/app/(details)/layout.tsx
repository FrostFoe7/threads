"use client";

import { usePathname } from "next/navigation";
import { PageContainer } from "@/components/ui/page-container";

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isReel = pathname.startsWith("/reel/");

  return (
    <PageContainer isFullWidth={isReel} className={isReel ? "p-0" : "pb-0"}>
      {children}
    </PageContainer>
  );
}
