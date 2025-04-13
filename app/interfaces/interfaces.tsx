export interface HeaderProps {
  mainRef: React.RefObject<HTMLDivElement | null>;
  footerRef: React.RefObject<HTMLDivElement | null>;
}

export interface FooterProps {
  footerRef: React.RefObject<HTMLDivElement | null>;
}

export interface StandardButton {
  buttonType: "primary" | "secondary" | "standard-link";
  text: string;
  isALink: boolean; //np. gdyby login, sign up i inne przyciski prowadziły do jakiejś podstrony
  onClick?: () => void;
  disabled?: boolean;
  className?: string; //dodatkowa klasa
}

//Jeśli isALink jest true  trzeba go podawać
export interface LinkButton extends StandardButton {
  isALink: true;
  link: string;
}

//Jeśli isALink jest false nie trzeba go podawać
export interface WithoutLinkButton extends StandardButton {
  isALink: false;
  link?: never;
}

export interface LogoInterface {
  className?: string;
}
