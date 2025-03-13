import { CustomTitle } from '@/components/CustomTitle';
import { CustomTimeline } from '@/components/CustomTimeline';
import { TbBriefcase } from 'react-icons/tb';

import { cv } from '@/data/data';
const Experience = () => {
   const { work } = cv;
   const workData = work.map(({ name, ...item }) => ({
      ...item,
      company: name,
   }));
   return (
      <section id="experiencia" className="lg:mb-20 mb-10">
         <CustomTitle>
            <TbBriefcase />
            Experiencia Profesional
         </CustomTitle>

         <CustomTimeline data={workData} formatType="medium" />
      </section>
   );
};

export default Experience;
