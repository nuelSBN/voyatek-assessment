import { INavbarItem } from "../types/constants";
import activities from "../assets/icons/RoadHorizon.svg";
import hotels from "../assets/icons/Buildings.svg";
import flight from "../assets/icons/AirplaneTilt.svg";
import student from "../assets/icons/Student.svg";
import visa from "../assets/icons/NewspaperClipping.svg";
import immigration from "../assets/icons/SuitcaseRolling.svg";
import firstAidKit from "../assets/icons/FirstAidKit.svg";
import pack from "../assets/icons/Package.svg";

export const sideBarItem: INavbarItem[] = [
  {
    icon: activities,
    label: "Activities",
    path: "/",
    isActive: false,
  },
  {
    icon: hotels,
    label: "Hotels",
    path: "/",
    isActive: false,
  },
  {
    icon: flight,
    label: "Flight",
    path: "/",
    isActive: false,
  },
  {
    icon: student,
    label: "Study",
    path: "/",
    isActive: false,
  },
  {
    icon: visa,
    label: "Visa",
    path: "/",
    isActive: false,
  },
  {
    icon: immigration,
    label: "Immigration",
    path: "/",
    isActive: false,
  },
  {
    icon: firstAidKit,
    label: "Medical",
    path: "/",
    isActive: false,
  },
  {
    icon: pack,
    label: "Vacation Packages",
    path: "/",
    isActive: false,
  },
];
