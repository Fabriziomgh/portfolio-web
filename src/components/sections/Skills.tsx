import { CustomTitle } from '@/components/CustomTitle';
import { TbUserShield } from 'react-icons/tb';
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
      </section>
   );
};

export default Skills;
