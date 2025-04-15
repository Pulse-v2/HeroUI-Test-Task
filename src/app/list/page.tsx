'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { Meme } from '../../types/meme';
import { fetchMemes } from '../../services/memeService';
import Navigation from '../../components/Navbar';

export default function ListPage() {
  const router = useRouter();
  const [memes, setMemes] = useState<Meme[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMemes = async () => {
      setIsLoading(true);
      const savedMemes = localStorage.getItem('memes');
      if (savedMemes) {
        setMemes(JSON.parse(savedMemes));
      } else {
        const fetchedMemes = await fetchMemes();
        setMemes(fetchedMemes);
        localStorage.setItem('memes', JSON.stringify(fetchedMemes));
      }
      setIsLoading(false);
    };

    loadMemes();
  }, []);

  if (isLoading) {
    return <div className="p-4">Завантаження...</div>;
  }

  return (
    <div>
      <Navigation />
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {memes.map((meme) => (
            <Card key={meme.id} className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">{meme.name}</p>
                  <p className="text-small text-default-500">Лайків: {meme.likes}</p>
                </div>
              </CardHeader>
              <CardBody>
                <Image
                  alt={meme.name}
                  src={meme.image}
                  width="100%"
                  height={200}
                  className="object-cover"
                  fallbackSrc="https://via.placeholder.com/300x200?text=Мем+не+знайдено"
                />
              </CardBody>
              <CardFooter>
                <Link href={meme.image} isExternal showAnchorIcon>
                  <Button color="primary" variant="flat" fullWidth>
                    Переглянути оригінал
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 