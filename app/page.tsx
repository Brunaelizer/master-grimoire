import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <Button>
        <Link href="/campaigns" className="hidden sm:block">
          Campaigns
        </Link>
      </Button>
    </div>
  );
}

export default HomePage;
