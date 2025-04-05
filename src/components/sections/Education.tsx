import { CustomTitle } from '@/components/CustomTitle';
import { CustomTimeline } from '@/components/CustomTimeline';

import { TbBook2 } from 'react-icons/tb';

import { cv } from '@/data/data';

const Education = () => {
   const { education } = cv;
   const educationData = education.map(({ institution, area, ...item }) => ({
      ...item,
      company: institution,
      position: area,
   }));

   return (
      <section id="educacion" className="lg:mb-20 mb-10">
         <CustomTitle>
            <TbBook2 />
            Educación
         </CustomTitle>
         <CustomTimeline data={educationData} formatType="YYYY" />
      </section>
   );
};

export default Education;
