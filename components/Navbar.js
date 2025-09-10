import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  const navItems = [
    { name: "About", href: "/about" },
    // { name: "Articles", href: "/articles" },
    { name: "Projects", href: "/projects" },
    { name: "Uses", href: "/uses" }
  ];

  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.navItem} ${router.pathname === item.href ? styles.active : ""
            }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
