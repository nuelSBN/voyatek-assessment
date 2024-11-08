import { ContentType } from "../hooks/useModal";

export interface INavbarItem {
  icon: string;
  label: string;
  path: string;
  isActive: boolean;
}

export interface ICardItem {
  title: string;
  description: string;
  buttonText: string;
  contentType: ContentType;
  variant?: "dark" | "light" | "primary";
}
