'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle,
  center
}) => {
  return ( 
    <div className="text-white">
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-3xl font-bold">
        {title}
      </div>
      <div className="font-semibold text-white mt-2">
        {subtitle}
      </div>
    </div>
    </div>
   );
}
 
export default Heading;