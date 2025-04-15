import React, { useState } from 'react';
import { Meme } from '../types/meme';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from '@nextui-org/react';
import { PencilIcon } from '@heroicons/react/24/outline';

interface MemeTableProps {
  memes: Meme[];
  onUpdateMeme: (meme: Meme) => void;
}

export default function MemeTable({ memes, onUpdateMeme }: MemeTableProps) {
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (meme: Meme) => {
    setSelectedMeme(meme);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (selectedMeme) {
      onUpdateMeme(selectedMeme);
      setIsModalOpen(false);
    }
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Назва' },
    { key: 'image', label: 'Посилання на картинку' },
    { key: 'likes', label: 'Лайки' },
    { key: 'actions', label: 'Дії' },
  ];

  return (
    <>
      <Table aria-label="Таблиця мемів">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={memes}>
          {(meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell>{meme.image}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  startContent={<PencilIcon className="h-4 w-4" />}
                  onPress={() => handleEdit(meme)}
                >
                  Редагувати
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Редагування мема</ModalHeader>
              <ModalBody>
                {selectedMeme && (
                  <div className="space-y-4">
                    <Input
                      label="Назва"
                      value={selectedMeme.name}
                      onValueChange={(value) =>
                        setSelectedMeme({ ...selectedMeme, name: value })
                      }
                      isRequired
                      minLength={3}
                      maxLength={100}
                    />
                    <Input
                      label="Посилання на картинку"
                      value={selectedMeme.image}
                      onValueChange={(value) =>
                        setSelectedMeme({ ...selectedMeme, image: value })
                      }
                      isRequired
                      type="url"
                    />
                    <Input
                      label="Лайки"
                      value={selectedMeme.likes.toString()}
                      onValueChange={(value) =>
                        setSelectedMeme({
                          ...selectedMeme,
                          likes: parseInt(value) || 0,
                        })
                      }
                      type="number"
                      min={0}
                      max={99}
                    />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Скасувати
                </Button>
                <Button color="primary" onPress={handleSave}>
                  Зберегти
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
} 