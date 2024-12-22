"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
//import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
//import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  //const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
Athsara     
 </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => {
          console.log("Logout");
        }}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;