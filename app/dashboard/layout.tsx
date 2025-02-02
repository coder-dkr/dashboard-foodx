import type { Metadata } from "next";
import SideNav from "@/components/SideNav";
import PageContent from "@/components/PageContent";
import Header from "@/components/Header";

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
   <div className="absolute top-0 z-[-2] h-screen w-screen custom-gradient"></div>



        <SideNav/>
        <PageContent>
          <Header/>
          {children}
        </PageContent>
      </section>

  );
}
