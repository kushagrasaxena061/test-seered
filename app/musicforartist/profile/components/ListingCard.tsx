'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import HeartButton from "@/app/components/HeartButton";
import Button from "@/app/components/Button";


interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;  //remove
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();


  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  return (
    
    <div 
      onClick={() => router.push(`/listings/${data.id}`)} 
      className="col-span-1 cursor-pointer flex group">
      <div className="flex flex-col gap-2 w-full">
        <div 
          className=" 
            aspect-square 
            w-32
            relative 
            overflow-hidden 
            rounded-xl">
          <Image
            fill
            className="object-cover group-hover:scale-110 transition"
            src={data.imageSrc}
            alt="Listing"
          />
          <div className="absolute top-3 right-3">
            <HeartButton 
              listingId={data.id} 
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {data.title},
        </div>
        <div className="font-semibold text-lg">
          {data.playlist}
        </div>
        <div className="font-light text-gray-400">
          {data.category}
        </div>
       
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
    
    
   );
}
 
export default ListingCard;