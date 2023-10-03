"use client";
import Link from "next/link";
import React from "react";
import styles from "./header.module.scss";

export const Header: React.FC = () => {
  const linkItems = [
    {
      name: "language",
      value: "/#language",
    },
    {
      name: "discord",
      value: "/#discord",
    },
  ];
  const [hidden, setHidden] = React.useState(true);
  const actionHide = (hide: boolean) => {
    if (hidden !== hide) {
      setHidden(hide);
    }
  };
  const scrollEvent = () => {
    console.log(`${window.scrollY} ${document.documentElement.clientHeight}`);
    if (window.scrollY >= ((window.innerHeight * 2) / 3)) {
      actionHide(false);
    } else {
      actionHide(true);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    () => window.removeEventListener("scroll", scrollEvent);
  });
  return (
    <header
      className={`header ${styles.header} ${hidden ? styles.hidden : ""}`}
    >
      <div className={styles.headerHW}>
        <div className={styles.title}>
          <p>tn23</p>
        </div>
        <nav className={styles.navItems}>
          {linkItems.map((linkItem, index) => (
            <Link className={styles.navItem} href={linkItem.value} key={index}>
              {linkItem.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
