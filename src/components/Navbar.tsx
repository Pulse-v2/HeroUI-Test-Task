'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();

  return (
    <Navbar className="w-full max-w-full">
      <NavbarBrand>
        <p className="font-bold text-inherit">Довідник мемів</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-2 sm:gap-4" justify="center">
        <NavbarItem>
          <Button 
            color="primary" 
            variant="flat" 
            size="sm"
            onPress={() => router.push('/table')}
          >
            Таблиця
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            color="primary" 
            variant="flat" 
            size="sm"
            onPress={() => router.push('/list')}
          >
            Список
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
} 