'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'African',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'African Dancehall',
    icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'African Reggae',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Afrikaans',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Afro House',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Afro Soul',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Afro Beat',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Afro Folk',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Afro Fusion',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Afro Pop',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'AfroBeats',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Alte',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Alternative',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Alternative Rock',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Amapiano',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Baladas y Boleros',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Big Band',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Blues',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Brazilian',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: "Children's",
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Chinese',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Christian',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Comedy',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Contemporary Latin',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Country',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Easy Listening',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Educational',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Egyptian Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Electronic',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Enka',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Experimental',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Fitness and WorkOut',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Folk',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'French Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'German Folks',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'German Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Hip-Hop/Rap',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Holiday',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Inspirational',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'J-Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Jazz',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'K-Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Karaoke',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Kayokyoku',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Latin',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Latin Jazz',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Levant',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Levant Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Meghreb Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Meghreb Rai',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Metal',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'New Age',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Original Pilipino Music',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Pop',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Pop Latino',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Punk',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'R&B',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Raices',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Reggae',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Regional Mexicano',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Rock',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Singer/SongWriter',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Soul',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Soundtrack',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Spoken Word',
    icon: FaSkiing,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Trot',
    icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Vocal/Nostalgia',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'World',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Metal',
    icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Lake',
    icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!'
  },
]



const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/search';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;