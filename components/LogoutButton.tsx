"use client";

import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogOut = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const errorMessage = null
    if (!errorMessage) {
      console.log("teste");
      toast.success("Logged out", {
        description: "You have been successfully signed out.",
        duration: 4000
      });
      setLoading(false);
      router.push("/");
      return;
    }

    toast.error("Error", {
        description: "Unable to logout",
    });
    
    setLoading(false);
  };
  return (
    <Button className="w-20" variant="outline" onClick={handleLogOut}>
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
}

export default LogoutButton;
