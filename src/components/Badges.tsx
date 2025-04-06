import { styles } from '@/data/styles';

interface Props {
   badges: string[];
}

export const Badges = ({ badges }: Props) => {
   return (
      <div className="flex flex-wrap gap-y-2 ">
         {badges.map((item) => {
            const badgeStyles = styles[item];

            return (
               <span
                  className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-full flex items-center gap-x-1 ${badgeStyles.styles}`}
                  key={badgeStyles.name}
               >
                  <badgeStyles.icon />
                  {badgeStyles.name}
               </span>
            );
         })}
      </div>
   );
};
