'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Довідник мемів</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button 
            color="primary" 
            variant="flat" 
            onPress={() => router.push('/table')}
          >
            Таблиця
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            color="primary" 
            variant="flat" 
            onPress={() => router.push('/list')}
          >
            Список
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
} 