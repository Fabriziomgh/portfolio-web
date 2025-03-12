interface Props {
   highlights: readonly string[];
}

export const Highlights = ({ highlights }: Props) => {
   return (
      <div className="flex flex-wrap gap-2 mt-2">
         {highlights.map((item) => (
            <span key={item}>{item}</span>
         ))}
      </div>
   );
};
