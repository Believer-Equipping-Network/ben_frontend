import { IconType } from "react-icons";

export interface ResourcesProps {
  name: string;
  description: string;
  href: string;
  icon: IconType;
}

export interface MessageProps {
  id: number;
  name: string;
  href: string;
}

export interface TestimonialsProps {
  id: number;
  stars: number;
  profileImageSrc: string;
  heading: string;
  quote: string;
  name: string;
  profession: string;
}

export interface FeaturesProps {
  id: number;
  name: string;
  description: string;
  icon: IconType;
}
