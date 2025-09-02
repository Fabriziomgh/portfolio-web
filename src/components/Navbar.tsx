import {
   TbBriefcase,
   TbCode,
   TbMenu2,
   TbUser,
   TbUserShield,
   TbX,
} from 'react-icons/tb';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.webp';
import clsx from 'clsx';

const links = [
   {
      name: 'Resumen',
      href: '#resumen',
      icon: TbUser,
   },
   {
      name: 'Experiencia',
      href: '#experiencia',
      icon: TbBriefcase,
   },
   {
      name: 'Tecnologías',
      href: '#tecnologias',
      icon: TbUserShield,
   },
   {
      name: 'Proyectos',
      href: '#proyectos',
      icon: TbCode,
   },
];

export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <nav
         className={clsx(
            'fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ',
            isScrolled
               ? 'backdrop-blur-md bg-black/30'
               : 'backdrop-blur-sm bg-black/10'
         )}
      >
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between">
               <img src={logo} alt="Logo" className="h-14 w-24" />

               <div className="hidden md:block">
                  <div className="flex items-center space-x-8">
                     {links.map((item) => (
                        <a
                           href={item.href}
                           key={item.name}
                           className="flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200  text-secondary bg-transparent hover:text-primary hover:bg-background-card cursor-pointer hover:scale-105"
                        >
                           <item.icon size={16} />
                           <span className="text-sm font-medium">
                              {item.name}
                           </span>
                        </a>
                     ))}
                  </div>
               </div>

               <div className="md:hidden">
                  <button
                     onClick={() => setIsOpen((prev) => !prev)}
                     className={clsx(
                        'rounded-lg p-2 transition-colors duration-200 text-primary',
                        isOpen ? 'text-primary' : 'bg-transparent'
                     )}
                  >
                     {isOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
                  </button>
               </div>
            </div>
         </div>

         {isOpen && (
            <div className="md:hidden border-b-2 border-border">
               <div className=" px-4 py-6 backdrop-blur-md bg-background-card">
                  <div className="space-y-1">
                     {links.map((item) => (
                        <a
                           href={item.href}
                           onClick={() => setIsOpen(false)}
                           key={item.name}
                           className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors duration-200 text-secondary hover:text-primary hover:bg-background bg-transparent cursor-pointer active:bg-background active:text-primary"
                        >
                           <item.icon className="h-5 w-5" />
                           <span className="font-medium">{item.name}</span>
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         )}
      </nav>
   );
};
