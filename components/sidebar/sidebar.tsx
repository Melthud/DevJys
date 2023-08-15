import Image from "next/image";
import Link from "next/link";
import { AiFillAppstore, AiOutlineLogout, AiFillBook, AiFillShopping, AiOutlineUser } from "react-icons/ai";

const sidebarItems =[{
        name: "Cursos",
        href: "/admin/cursos",
        icon: AiFillBook
        
    },{
        name: "Ventas",
        href: "/admin/ventas",
        icon: AiFillShopping
    },{
        name: "Captadores",
        href: "/admin/captadores",
        icon: AiOutlineUser
    },{
        name: "Salir",
        href: "/admin/logout",
        icon: AiOutlineLogout
    }];

export default function sidebar() {
  return (
    <div>
        <aside className="sidebar">
            <div className="sidebar_top">
                <Image src="/logo.jpg"
                width={80}
                height={80}
                alt="JYS EMPRESA"
                className="sidebar_logo"></Image>
                <p className="sidebar_logo_name">JYSDev</p>
            </div>
            <ul className="sidebar_list">
                {sidebarItems.map(({name, href, icon: Icon})=>(
                    <li className="sidebar_item" key={name}>
                    <Link href={href} className="sidebar_link">
                    <span className="sidebar_icon">
                        <Icon/>
                    </span>
                    <span className="sidebar_name">{name}</span></Link>
                </li>
                ))}
            </ul>
        </aside>
    </div>
  )
}
