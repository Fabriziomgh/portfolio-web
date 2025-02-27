import { CustomTitle } from '@/components/CustomTitle';
import { TbBook2 } from 'react-icons/tb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EducationContent } from '@/components/EducationContent';
import { CertificationsContent } from '@/components/CertificationsContent';

const Education = () => {
   return (
      <section id="educacion" className="lg:mb-20 mb-10">
         <CustomTitle>
            <TbBook2 />
            Educación
         </CustomTitle>

         <Tabs defaultValue="university" className="lg:w-[448px] w-full">
            <TabsList className="space-x-3 px-3">
               <TabsTrigger value="university">Universidad</TabsTrigger>
               <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
            </TabsList>
            <TabsContent value="university">
               <div className="space-y-4">
                  <EducationContent />
               </div>
            </TabsContent>
            <TabsContent value="certifications">
               <div className="space-y-4">
                  <CertificationsContent />
               </div>
            </TabsContent>
         </Tabs>
      </section>
   );
};

export default Education;
