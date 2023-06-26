import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    copywrite_holder,
    copywrite_year,
    production_holder,
    production_year,
    record_label,
    imageSrc,
    category,
    genre,
    secondarygenre,
    language,
    audio,
    preview,
    lyrics,
    copywrite_documentation,
    releasing_date,
    playlist,
    nft_wallet_id,
    total_nfts,
    nft_price,
    location,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      copywrite_holder,
      copywrite_year: parseInt(copywrite_year, 10),
      production_holder,
      production_year: parseInt(production_year, 10),
      record_label,
      imageSrc,
      category,
      genre,
      secondarygenre,
      language,
      audio,
      preview,
      lyrics,
      copywrite_documentation,
      releasing_date,
      playlist,
      nft_wallet_id,
      total_nfts,
      nft_price,
      locationValue: location.value,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
