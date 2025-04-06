import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
const links = [
   {
      label: 'Sobre mí',
      href: '#sobremi',
   },
   {
      label: 'Experiencia',
      href: '#experiencia',
   },
   {
      label: 'Educación',
      href: '#educacion',
   },
   {
      label: 'Tecnologías',
      href: '#tecnologias',
   },
   {
      label: 'Proyectos',
      href: '#proyectos',
   },
];

export const Navbar = () => {
   const [activeSection, setActiveSection] = useState('');

   useEffect(() => {
      const handleScroll = () => {
         links.forEach((link) => {
            const section = document.querySelector(link.href) as HTMLElement;
            if (section) {
               const sectionTop = section.offsetTop;
               const sectionHeight = section.offsetHeight;

               if (
                  window.scrollY >= sectionTop - sectionHeight / 3 &&
                  window.scrollY < sectionTop + sectionHeight
               ) {
                  setActiveSection(link.href);
               }
            }
         });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
         <nav className="flex px-3  rounded-full text-gray-200 justify-center items-center">
            <ul
               className={clsx(
                  'flex py-2 px-4 md:gap-x-4 gap-x-2 text-[10px] sm:text-sm justify-center items-center w-max rounded-3xl',
                  {
                     'shadow-lg bg-gray-700 ': activeSection !== '',
                  }
               )}
            >
               {links.map((item) => (
                  <li key={item.href}>
                     <a
                        className={clsx(
                           'transition duration-200 hover:text-blue-500  font-medium',
                           {
                              'text-blue-500': activeSection === item.href,
                           }
                        )}
                        href={item.href}
                     >
                        {item.label}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
};
