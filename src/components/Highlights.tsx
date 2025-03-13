interface Props {
   highlights: readonly string[];
}

export const Highlights = ({ highlights }: Props) => {
   return (
      <div className="flex flex-wrap gap-y-2 ">
         {highlights.map((item) => (
            <span
               className=" text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-gray-700 text-gray-300"
               key={item}
            >
               {item}
            </span>
         ))}
      </div>
   );
};
