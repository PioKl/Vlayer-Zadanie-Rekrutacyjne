import Link from "next/link";
import LogoIcon from "@/assets/icons/logo.svg";
import styles from "@/styles/ui/logo.module.scss";
import { LogoInterface } from "@/interfaces/interfaces";

export default function Logo({ className }: LogoInterface) {
  return (
    <Link href="/" className={`${styles["logo-container"]} ${className}`}>
      <LogoIcon className={styles["logo-container__icon"]} />
      <span className={styles["logo-container__name"]}>Estatery</span>
    </Link>
  );
}
