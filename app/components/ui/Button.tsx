import React from "react";
import styles from "@/styles/ui/button.module.scss";
import Link from "next/link";
import { LinkButton, WithoutLinkButton } from "@/interfaces/interfaces";

type ButtonProps = LinkButton | WithoutLinkButton; //Z linkiem, bądź bez, jeśli użytkownik wpisze isALink to wyskoczy, że trzeba podać link, jeśli nie zostanie zastosowany WithoutLink

export default function Button({
  buttonType,
  text,
  isALink,
  link,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  const buttonClass = `${styles["button"]} ${styles[`--${buttonType}`]}
  } ${disabled && styles["--disabled"]} ${className}`;
  return isALink ? (
    <Link
      href={link as string}
      className={buttonClass}
      aria-disabled={disabled ? true : false} //dodanie aria-disabled jak disabled
      tabIndex={disabled ? -1 : 0} //wyłącznie z tabIndexu jak disabled
    >
      {text}
    </Link>
  ) : (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled ? true : false}
      tabIndex={disabled ? -1 : 0}
    >
      {text}
    </button>
  );
}
