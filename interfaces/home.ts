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
