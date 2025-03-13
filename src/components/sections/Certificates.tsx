import { CustomTitle } from '@/components/CustomTitle';
import { CustomTimeline } from '@/components/CustomTimeline';
import { TbCertificate } from 'react-icons/tb';
import { cv } from '@/data/data';

const Certificates = () => {
   const { certificates } = cv;

   const certificatesData = certificates.map(({ name, issuer, url, date }) => ({
      company: name,
      position: issuer,
      url,
      startDate: date,
      endDate: date,
   }));

   return (
      <section id="experiencia" className="lg:mb-20 mb-10">
         <CustomTitle>
            <TbCertificate />
            Certificados
         </CustomTitle>

         <CustomTimeline data={certificatesData} formatType="medium" />
      </section>
   );
};

export default Certificates;
