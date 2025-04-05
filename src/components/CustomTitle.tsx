interface Props {
   children: React.ReactNode;
}

export const CustomTitle = ({ children }: Props) => {
   return (
      <h2 className="flex items-center mb-6 lg:text-3xl text-2xl tracking-tighter font-semibold gap-x-3 text-white font-fira-code-variable">
         {children}
      </h2>
   );
};
