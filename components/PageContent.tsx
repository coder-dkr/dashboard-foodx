import { PageContentProps } from "@/types";

const PageContent: React.FC<PageContentProps> = ({ children, className }) => {
  return (
    <div
      className={`p-8 ml-[20rem] right-7 bg-gradient-to-b from-white via-white to-white/50 shadow-lg shadow-white/20 absolute left-4 top-6 bottom-0 rounded-t-[2rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContent;
