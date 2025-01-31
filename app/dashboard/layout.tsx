import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideNav from "@/components/SideNav";

export const metadata: Metadata = {
  title: "FoodX Dashboard",
  description: "FoodX Dashboard is used by Admin to get the sales , users , orders analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section
        suppressContentEditableWarning
        className={`flex`}
      >
        <SideNav/>
        {children}
      </section>

  );
}
