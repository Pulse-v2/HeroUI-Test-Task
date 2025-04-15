'use client';

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { Meme } from '../../types/meme';
import { fetchMemes } from '../../services/memeService';
import Navigation from '../../components/Navbar';

export default function TablePage() {
  const router = useRouter();
  const [memes, setMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedMeme, setEditedMeme] = useState<Meme | null>(null);
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

  const handleEdit = (meme: Meme) => {
    setSelectedMeme(meme);
    setEditedMeme({ ...meme });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editedMeme) {
      const updatedMemes = memes.map(meme => 
        meme.id === editedMeme.id ? editedMeme : meme
      );
      setMemes(updatedMemes);
      localStorage.setItem('memes', JSON.stringify(updatedMemes));
      setIsModalOpen(false);
    }
  };

  const handleNameChange = (value: string) => {
    if (editedMeme) {
      setEditedMeme({ ...editedMeme, name: value });
    }
  };

  const handleImageChange = (value: string) => {
    if (editedMeme) {
      setEditedMeme({ ...editedMeme, image: value });
    }
  };

  const handleLikesChange = (value: string) => {
    if (editedMeme) {
      setEditedMeme({ ...editedMeme, likes: parseInt(value) });
    }
  };

  if (isLoading) {
    return <div className="p-4">Завантаження...</div>;
  }

  return (
    <div>
      <Navigation />
      <div className="p-4">
        <Table aria-label="Меми">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Назва</TableColumn>
            <TableColumn>Посилання</TableColumn>
            <TableColumn>Лайки</TableColumn>
            <TableColumn>Дії</TableColumn>
          </TableHeader>
          <TableBody>
            {memes.map((meme) => (
              <TableRow key={meme.id}>
                <TableCell>{meme.id}</TableCell>
                <TableCell>{meme.name}</TableCell>
                <TableCell>
                  <Link href={meme.image} isExternal showAnchorIcon>
                    Переглянути мем
                  </Link>
                </TableCell>
                <TableCell>{meme.likes}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleEdit(meme)}>
                    Редагувати
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalContent>
            <ModalHeader>Редагування мема</ModalHeader>
            <ModalBody>
              <Input
                label="ID"
                value={editedMeme?.id.toString()}
                isReadOnly
              />
              <Input
                label="Назва"
                value={editedMeme?.name}
                onChange={(e) => handleNameChange(e.target.value)}
                minLength={3}
                maxLength={100}
                isRequired
              />
              <Input
                label="URL картинки"
                value={editedMeme?.image}
                onChange={(e) => handleImageChange(e.target.value)}
                type="url"
                isRequired
              />
              <Input
                label="Лайки"
                type="number"
                value={editedMeme?.likes.toString()}
                onChange={(e) => handleLikesChange(e.target.value)}
                min={0}
                max={99}
                isRequired
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => setIsModalOpen(false)}>
                Скасувати
              </Button>
              <Button color="primary" onPress={handleSave}>
                Зберегти
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
} 