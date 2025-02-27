import { CustomTitle } from '@/components/CustomTitle';
import { TbUserShield } from 'react-icons/tb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { DisplayContent } from '../DisplayContent';
import { cv } from '@/data/data';

const Skills = () => {
   const {
      skills: { softSkills, technicalSkills },
   } = cv;
   return (
      <section id="habilidades" className="mb-20">
         <CustomTitle>
            <TbUserShield />
            Hábilidades
         </CustomTitle>

         <Tabs defaultValue="techniques" className="w-full">
            <TabsList className="space-x-3 px-3">
               <TabsTrigger value="techniques">Técnicas</TabsTrigger>
               <TabsTrigger value="soft">Blandas</TabsTrigger>
            </TabsList>
            <TabsContent value="techniques">
               <div className="space-y-4">
                  <DisplayContent arr={technicalSkills} />
               </div>
            </TabsContent>
            <TabsContent value="soft">
               <div className="space-y-4">
                  <DisplayContent arr={softSkills} />
               </div>
            </TabsContent>
         </Tabs>
      </section>
   );
};

export default Skills;
