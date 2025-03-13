interface SoftAndTechniquesSkills {
   categoria: string;
   descripcion: string;
}

interface Props {
   arr: SoftAndTechniquesSkills[];
}

export const DisplayContent = ({ arr }: Props) => {
   return (
      <>
         {arr.map((item) => {
            return (
               <div key={item.categoria} className="mt-2">
                  <div>
                     <h3 className="text-xl font-bold text-yellow-400 ">
                        {item.categoria}
                     </h3>

                     <h4 className="  text-gray-600 ">{item.descripcion}</h4>
                  </div>
               </div>
            );
         })}
      </>
   );
};
