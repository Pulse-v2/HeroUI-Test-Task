import React from 'react';
import { Meme } from '../types/meme';
import { Card, CardHeader, CardBody, CardFooter, Image, Link } from '@nextui-org/react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface MemeListProps {
  memes: Meme[];
}

export default function MemeList({ memes }: MemeListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {memes.map((meme) => (
        <Card key={meme.id} className="max-w-[400px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{meme.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={meme.name}
              className="object-cover rounded-xl"
              src={meme.image}
              width="100%"
            />
          </CardBody>
          <CardFooter className="flex justify-between">
            <div className="flex items-center text-danger">
              <HeartIcon className="h-5 w-5 mr-1" />
              <span>{meme.likes}</span>
            </div>
            <Link
              isExternal
              href={meme.image}
              className="flex items-center text-default-500"
              showAnchorIcon
              anchorIcon={<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />}
            >
              Переглянути
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 