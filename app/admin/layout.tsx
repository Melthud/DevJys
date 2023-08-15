"use client"
import { useAuthContext } from "@/components/contexts/authContext";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/sidebar";

function Layout({children}: {children: ReactNode}){
    const { isLoggedIn } = useAuthContext();

    if( !isLoggedIn ){
       redirect("/login")
        return null;
    }

    return <div className="probemos">
        <Sidebar/>
        {children}
        </div>
}

export default Layout;