import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import LogoutButton from "@/components/LogoutButton";

import { Button } from "@/components/ui/button";
import { getUser } from "@/utils/supabase/server";

async function Header() {
  const user = await getUser();
  return (
    <header className="px3 relative flex h-24 w-full items-center justify-between sm:px-8 shadow-card-foreground">
      <Link className="" href="/">
        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          Master&apos;s Grimoire
        </h1>
      </Link>

      <div className="">
        <NavigationMenu>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">About</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenu>
      </div>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <Button asChild>
            <Link href="/login" className="hidden sm:block">
              Login
            </Link>
          </Button>
        )}
        <Button asChild>
          <Link href="/signup" className="hidden sm:block">
            Sign Up
          </Link>
        </Button>
      </div>
    </header>
  );
}

export default Header;
