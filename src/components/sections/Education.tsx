import { CustomTitle } from '@/components/CustomTitle';
import { CustomTimeline } from '@/components/CustomTimeline';

import { TbBook2, TbCertificate } from 'react-icons/tb';

import { cv } from '@/data/data';

const Education = () => {
   const { education, certificates } = cv;
   const educationData = education.map(({ institution, area, ...item }) => ({
      ...item,
      company: institution,
      position: area,
   }));

   const certificatesData = certificates.map(({ name, issuer, url, date }) => ({
      company: name,
      position: issuer,
      url,
      startDate: date,
      endDate: date,
   }));

   return (
      <section id="educacion" className="lg:mb-20 mb-10">
         <div className="flex flex-col sm:flex-row  lg:gap-x-2 justify-evenly">
            <div>
               <CustomTitle>
                  <TbBook2 />
                  Educación
               </CustomTitle>
               <CustomTimeline data={educationData} formatType="YYYY" />
            </div>
            <div>
               <CustomTitle>
                  <TbCertificate />
                  Certificados
               </CustomTitle>
               <CustomTimeline data={certificatesData} formatType="medium" />
            </div>
         </div>
      </section>
   );
};

export default Education;
