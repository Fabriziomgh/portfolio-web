import { ModeToggle } from '@/components/mode-toggle';
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
      label: 'Hábilidades',
      href: '#habilidades',
   },
   {
      label: 'Proyectos',
      href: '#proyectos',
   },
];

const Navbar = () => {
   return (
      <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
         <nav className="w-full flex justify-center text-sm font-medium">
            <ul className="dark:bg-gray-800 shadow-lg bg-gray-200/90 flex md:py-2 px-2 md:px-4 md:gap-x-4 gap-x-2 text-[10px] md:text-base justify-center items-center w-max rounded-3xl  ">
               {links.map((item) => (
                  <li key={item.href}>
                     <a
                        className="hover:text-blue-500 transition"
                        href={item.href}
                     >
                        {item.label}
                     </a>
                  </li>
               ))}

               <li>
                  <ModeToggle />
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
