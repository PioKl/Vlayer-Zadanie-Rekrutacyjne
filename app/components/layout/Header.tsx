import React, { useRef, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { HeaderInterface } from "@/interfaces/interfaces";
import styles from "@/styles/layout/header.module.scss";
import stylesLogo from "@/styles/ui/logo.module.scss";
import buttonStyles from "@/styles/ui/button.module.scss";
import Logo from "@/components/ui/Logo";
import MenuOpenIcon from "@/assets/icons/menu-open-icon.svg";
import MenuCloseIcon from "@/assets/icons/close-icon.svg";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header({ mainRef, footerRef }: HeaderInterface) {
  const bodyRef = useRef<HTMLBodyElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const btnOpen = useRef<HTMLButtonElement>(null);
  const btnClose = useRef<HTMLButtonElement>(null);
  const navMenu = useRef<HTMLDivElement>(null);

  //W celu uniknięcia błędu document is not defined
  useEffect(() => {
    bodyRef.current = document.body as HTMLBodyElement;
  }, []);

  const handleBtnOpen = () => {
    btnOpen.current?.setAttribute("aria-expanded", "true");

    //Odblokowanie możliwości interakcji (klawiatura i myszka) i widoczności dla accessibility
    navMenu.current?.removeAttribute("inert");
    navMenu.current?.removeAttribute("style");
    //Zablokowanie możliwości interakcji
    mainRef.current?.setAttribute("inert", "");
    footerRef.current?.setAttribute("inert", "");

    //Wyłączenie scrolla
    if (bodyRef.current) {
      disableBodyScroll(bodyRef.current);
    }

    //Ustawienie focusa na przycisk zamykające menu
    btnClose.current?.focus();

    //Dodanie modyfikatora
    if (headerRef.current) {
      headerRef.current.classList.add(styles["--transparent"]);
    }
  };

  const closeMobileMenu = () => {
    btnOpen.current?.setAttribute("aria-expanded", "false");

    //Zablokowanie możliwości interakcji (klawiatura i myszka) i widoczności dla accessibility
    navMenu.current?.setAttribute("inert", "");

    //Odblokowanie możliwości interakcji
    mainRef.current?.removeAttribute("inert");
    footerRef.current?.removeAttribute("inert");

    //Przywrócenie scrolla
    if (bodyRef.current) {
      enableBodyScroll(bodyRef.current);
    }

    //Ustawienie focusa na otwieranie menu
    btnOpen.current?.focus();

    //Timeout w celu nie przesuwania się menu z dynamiczną zmiana rozdzielczości
    setTimeout(() => {
      if (navMenu.current) {
        navMenu.current.style.transition = "none";
      }
    }, 500);

    // Usunięcie modyfikatora
    if (headerRef.current) {
      headerRef.current.classList.remove(styles["--transparent"]);
    }
  };

  const handleBtnClose = () => {
    closeMobileMenu();
  };

  const handleBtnLink = () => {
    handleBtnClose();
    navMenu.current?.removeAttribute("inert");
    navMenu.current?.removeAttribute("style");
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 69.375em)");

    const setupNavMenu = () => {
      if (media.matches && navMenu.current) {
        //mobile
        //Zablokowanie możliwości interakcji (klawiatura i myszka) i widoczności dla accessibility
        navMenu.current.setAttribute("inert", "");

        //Żeby nie przesuwało się z dynamiczną zmianą rozdzielczości
        navMenu.current.style.transition = "none";
      } else {
        //desktop
        handleBtnClose();
        //Odblokowanie możliwości interakcji (klawiatura i myszka) i widoczności dla accessibility
        navMenu.current?.removeAttribute("inert");
      }
    };
    setupNavMenu();
    media.addEventListener("change", setupNavMenu);
    return () => media.removeEventListener("change", setupNavMenu);
  });

  return (
    <header ref={headerRef} className={styles.header}>
      <nav className={`wrapper ${styles.nav}`}>
        <button
          id="btnOpen"
          aria-expanded="false"
          ref={btnOpen}
          onClick={handleBtnOpen}
          className={`${styles["nav__burger-menu-button"]} ${styles["nav__burger-menu-open-button"]}`}
        >
          <MenuOpenIcon />
        </button>
        <button
          id="btnClose"
          aria-label="Close"
          ref={btnClose}
          onClick={handleBtnClose}
          className={`${styles["nav__burger-menu-button"]} ${styles["nav__burger-menu-close-button"]}`}
        >
          <MenuCloseIcon />
        </button>
        <Logo
          className={`${styles["logo-header"]} ${stylesLogo["--header"]}`}
        />
        <div
          className={`${styles["nav-menu"]}`}
          role="dialog"
          aria-labelledby="nav-label"
          ref={navMenu}
        >
          <div className={`${styles["nav-menu__links-container"]}`}>
            <ul
              className={styles["nav-menu__links-item-list"]}
              //Najbliższy kliknięty li w menu wywołuje handleBtnLink, czyli zamknie menu
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest("li")) {
                  handleBtnLink();
                }
              }}
            >
              {/* W przypadku rozbudowy linki do poszczególnych stron */}
              <li className={styles["nav-menu__links-item"]}>
                <Link href="/">Rent</Link>
              </li>
              <li className={styles["nav-menu__links-item"]}>
                <Link href="/">Buy</Link>
              </li>
              <li className={styles["nav-menu__links-item"]}>
                <Link href="/">Sell</Link>
              </li>
              <li className={styles["nav-menu__links-item"]}>
                <Link href="/">Manage Property</Link>
              </li>
              <li className={styles["nav-menu__links-item"]}>
                <Link href="/">Resources</Link>
              </li>
            </ul>
            <div className={styles["nav-menu__auth-links"]}>
              {/* W przypadku rozbudowy linki do logowania/rejestracji*/}
              <Button
                buttonType="secondary"
                text={"Login"}
                isALink={true}
                link={"/"}
                className={buttonStyles["--auth"]}
                onClick={handleBtnLink}
              />
              <Button
                buttonType="primary"
                text={"Sign up"}
                isALink={true}
                link={"/"}
                className={buttonStyles["--auth"]}
                onClick={handleBtnLink}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
