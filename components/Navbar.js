import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  const [hovered, setHovered] = useState('');

  const navItems = [
    { name: "G", href: "/" }, // botão G
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Uses", href: "/uses" }
  ];

  return (
    <nav className={styles.navbar}>
      {/* Botão G */}
      <Link
        href="/"
        className={`${styles.navLogo} ${router.pathname === '/' ? styles.active : ""}`}
        onMouseEnter={() => setHovered('G')}
        onMouseLeave={() => setHovered('')}
      >
        {hovered === 'G' && <span className={styles.navHovered}></span>}
        G
      </Link>

      {/* Itens centrais */}
      <div className={styles.navItemsWrapper}>
        {navItems.filter(item => item.name !== "G").map((item) => {
          const isActive = router.pathname === item.href;
          const isHovered = hovered === item.name;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.active : ""}`}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered('')}
            >
              {isHovered && <span className={styles.navHovered}></span>}
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
