"use client";

import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/features/navigation/bottom-nav";
import { PageContainer } from "@/components/ui/page-container";

export default function TabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isReels = pathname === "/reels";

  return (
    <>
      <PageContainer isFullWidth={isReels} className={isReels ? "p-0 bg-black" : ""}>
        {children}
      </PageContainer>
      <BottomNav />
    </>
  );
}
