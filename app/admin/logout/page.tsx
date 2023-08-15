"use client"

import { useAuthContext } from "@/components/contexts/authContext";
import { useEffect } from "react";

export default function page() {
    const {logout} = useAuthContext();
    useEffect(()=>{
        logout();
    });
  return null;
}
