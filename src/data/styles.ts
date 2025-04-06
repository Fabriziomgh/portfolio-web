import { IconType } from 'react-icons';
import {
   TbBrandReact,
   TbBrandNextjs,
   TbBrandTailwind,
   TbAtom,
   TbLayoutGrid,
   TbDeviceMobile,
   TbBrandTypescript,
   TbExplicit,
} from 'react-icons/tb';

export interface TechnologyStyle {
   name: string;
   styles: string;
   icon: IconType;
}

export const styles: Record<string, TechnologyStyle> = {
   react: {
      name: 'React.js',
      styles: 'bg-blue-400 text-gray-900',
      icon: TbBrandReact,
   },
   next: {
      name: 'Next.js',
      styles: 'bg-gray-800 text-white',
      icon: TbBrandNextjs,
   },
   tailwind: {
      name: 'Tailwind CSS',
      styles: 'bg-teal-300 text-gray-800',
      icon: TbBrandTailwind,
   },
   zustand: {
      name: 'Zustand',
      styles: 'bg-purple-300 text-gray-800',
      icon: TbAtom,
   },
   'material-ui': {
      name: 'Material UI',
      styles: 'bg-indigo-300 text-gray-800',
      icon: TbLayoutGrid,
   },
   'react-native': {
      name: 'React Native',
      styles: 'bg-orange-300 text-gray-800',
      icon: TbDeviceMobile,
   },
   expo: {
      name: 'Expo',
      styles: 'bg-gray-800 text-gray-100',
      icon: TbExplicit,
   },
   typescript: {
      name: 'TypeScript',
      styles: 'bg-blue-500 text-gray-900',
      icon: TbBrandTypescript,
   },
};
