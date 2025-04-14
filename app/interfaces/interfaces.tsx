import { StaticImageData } from "next/image";

export interface HeaderInterface {
  mainRef: React.RefObject<HTMLDivElement | null>;
  footerRef: React.RefObject<HTMLDivElement | null>;
}

export interface FooterInterface {
  footerRef: React.RefObject<HTMLDivElement | null>;
}

export interface StandardButton {
  buttonType: "primary" | "secondary" | "standard-link" | "tab";
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

export interface Property {
  propertyType: "House" | "Apartments";
  image: string | StaticImageData; //string jakby ścieżka lokalna była, trzeba byłoby obslużyć url, static do statycznych importów
  price: number;
  billingPeriod: "month" | "day" | "week" | "year";
  name: string;
  address: string;
}

export interface PropertyCardInterface extends Property {
  type: "showcase" | "favourite";
}

export interface PropertiesInterface {
  id: number;
  type: string;
  properties: Property[];
}

export interface PropertiesCardsInterface {
  activeTab: number;
  allProperties: PropertiesInterface[];
}

export interface CustomersInterface {
  id: number;
  name: string;
  profession: string;
  opinion: string;
  avatarImage: string | StaticImageData;
}
