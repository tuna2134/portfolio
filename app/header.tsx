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
        }
    ];
    return (
        <header className={styles.header}>
            <div className={styles.headerHW}>
                <div className={styles.title}>
                    <p>tn23</p>
                </div>
                <nav className={styles.navItems}>
                    {linkItems.map((linkItem, index) => (
                        <Link className={styles.navItem} href={linkItem.value} key={index}>{linkItem.name}</Link>
                    ))}
                </nav>
            </div>
        </header>
    )
};