import { Badge } from './ui/badge';

interface Props {
   highlights: readonly string[];
   variante?:
      | 'outline'
      | 'default'
      | 'secondary'
      | 'destructive'
      | 'available'
      | null
      | undefined;
}

export const Highlights = ({ highlights, variante = 'outline' }: Props) => {
   return (
      <div className="flex flex-wrap gap-2 mt-2">
         {highlights.map((item) => (
            <Badge variant={variante} key={item}>
               {item}
            </Badge>
         ))}
      </div>
   );
};
