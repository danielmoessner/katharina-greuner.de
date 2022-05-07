import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Animal } from "../types/animal";

interface Props {
  animal: Animal;
  image?: React.ReactNode;
  preview?: boolean;
}

function AnimalCard({ animal, preview, image = null }: Props) {
  return (
    <div>
      <div className="rounded-lg shadow">
        <Link href={`/wildtiere/${animal.slug}`}>
          <a>
            {!preview ? (
              <div className="relative block text-[0]">
                <Image
                  className="rounded-lg aspect-[16/10]"
                  src={animal.image}
                  alt={animal.title}
                  height={500}
                  width={800}
                  objectFit="cover"
                />
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg">{image}</div>
            )}
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start px-2 pt-4">
        <Link className="mb-2" href={`wildtiere/${animal.slug}`}>
          <div>
            <div className="mb-0 text-xs font-medium leading-tight tracking-tight text-gray-600 uppercase">
              {animal.category}
            </div>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-800">
              {animal.title}
            </h2>
          </div>
        </Link>
        <Link href={`wildtiere/${animal.slug}`}>
          <p className="text-sm leading-tight text-gray-900 line-clamp-3">
            {animal.excerpt}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default AnimalCard;
