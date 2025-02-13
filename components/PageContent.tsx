import { PageContentProps } from "@/types";

const PageContent: React.FC<PageContentProps> = ({ children, className }) => {
  return (
    <div 
    style={{borderTopLeftRadius : '2rem' , borderTopRightRadius : '2rem'}}
      className={`p-8 pt-0 w-full h-screen overflow-x-hidden overflow-y-auto  sm:w-auto sm:h-auto min-h-auto sm:ml-20 lg:ml-[17.5rem] sm:right-5 lg:right-7 bg-white backdrop-blur-xl shadow-lg sm:absolute sm:left-4 sm:top-6 sm:bottom-0 rounded-t-[2rem]  pb-[4rem] sm:pb-8 ${className} noscroll smoothScroll`}
    >
      {children}
    </div>
  );
};

export default PageContent;
