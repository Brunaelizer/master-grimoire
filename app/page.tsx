import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <main>
      <Button>
        <Link href="/campaigns" className="hidden sm:block">
          Campaigns
        </Link>
      </Button>
    </main>
  );
}

export default HomePage;
