import { IconType } from 'react-icons';

interface Props {
   name: string;
   icon: IconType;
   description: string;
   category: string;
}

export const CardTechnology = ({ name, icon: Icon, description }: Props) => {
   return (
      <div className="group bg-background-card border-border relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg">
         <div className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
               <div className="text-white">
                  <Icon className="size-10" />
               </div>
            </div>

            <h3 className="mb-2 text-lg text-primary font-semibold transition-colors duration-300">
               {name}
            </h3>

            <p className="mb-3 text-sm leading-relaxed text-secondary">
               {description}
            </p>
         </div>

         <div
            className="absolute  inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-10 "
            style={{
               background: `linear-gradient(135deg, transparent 0%, var(--color-third) 100%)`,
            }}
         />
      </div>
   );
};
