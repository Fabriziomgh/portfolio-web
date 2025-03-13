import { IconType } from 'react-icons/lib';

interface Props {
   children: React.ReactNode;
   icon: IconType;
   title: string;
   href: string;
   target?: boolean;
}

export const CustomLink = ({
   children,
   title,
   icon: Icon,
   href,
   target = false,
}: Props) => {
   return (
      <a
         target={target ? '_blank' : ''}
         title={title}
         href={href}
         className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-300 transition duration-100 bg-gray-600 border border-gray-800 rounded-xl text-md hover:bg-gray-600/60 hover:border-gray-700 hover:text-white"
      >
         <Icon />
         {children}
      </a>
   );
};
