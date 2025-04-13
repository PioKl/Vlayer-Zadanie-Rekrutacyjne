import styles from "@/styles/layout/footer.module.scss";
import { FooterProps } from "@/interfaces/interfaces";
import Logo from "../ui/Logo";
import IconFacebook from "@/assets/icons/facebook.svg";
import IconInstagram from "@/assets/icons/instagram.svg";
import IconTwitter from "@/assets/icons/twitter.svg";
import IconLinkeding from "@/assets/icons/linkedin.svg";
import Button from "../ui/Button";

export default function Footer({ footerRef }: FooterProps) {
  return (
    <footer ref={footerRef} className={`wrapper ${styles.footer}`}>
      <div className={styles.support}>
        <Logo
          className={`${styles["logo-footer"]} ${styles["support__logo"]}`}
        />

        <ul className={styles["support__items-list"]}>
          <li className={styles["support__item"]}>
            <Button
              buttonType="standard-link"
              text={"Help Center"}
              isALink={true}
              link={"/"}
            />
          </li>
          <li className={styles["support__item"]}>
            <Button
              buttonType="standard-link"
              text={"FAQ"}
              isALink={true}
              link={"/"}
            />
          </li>
          <li className={styles["support__item"]}>
            <Button
              buttonType="standard-link"
              text={"TERMS & PRIVACY"}
              isALink={true}
              link={"/"}
            />
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <span className={styles["contact__company-name"]}>
          ©2021 Estatery. All rights reserved
        </span>
        <ul className={styles["contact__items-list"]}>
          <li className={styles["contact__items"]}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <IconFacebook />
            </a>
          </li>
          <li className={styles["contact__items"]}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <IconInstagram />
            </a>
          </li>
          <li className={styles["contact__items"]}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <IconTwitter />
            </a>
          </li>
          <li className={styles["contact__items"]}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <IconLinkeding />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
