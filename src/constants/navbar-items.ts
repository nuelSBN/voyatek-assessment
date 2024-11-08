import { INavbarItem } from "../types/constants";
import home from "../assets/icons/House.svg";
import dashboard from "../assets/icons/ChartPieSlice.svg";
import wallet from "../assets/icons/Wallet.svg";
import planTrip from "../assets/icons/ListChecks.svg";
import handcoin from "../assets/icons/HandCoins.svg";
import notification from "../assets/icons/Bell.svg";
import cart from "../assets/icons/Basket.svg";
import create from "../assets/icons/PlusSquare.svg";

export const firstNavbarItem: INavbarItem[] = [
  {
    icon: home,
    label: "home",
    path: "/",
    isActive: false,
  },
  {
    icon: dashboard,
    label: "dashboard",
    path: "/",
    isActive: false,
  },
  {
    icon: wallet,
    label: "wallet",
    path: "/",
    isActive: false,
  },
  {
    icon: planTrip,
    label: "Plan a trip",
    path: "/",
    isActive: true,
  },
  {
    icon: handcoin,
    label: "Commission for life",
    path: "/",
    isActive: false,
  },
];

export const secondNavbarItem: INavbarItem[] = [
  {
    icon: notification,
    label: "Notification",
    path: "/",
    isActive: false,
  },
  {
    icon: cart,
    label: "carts",
    path: "/",
    isActive: false,
  },
  {
    icon: create,
    label: "create",
    path: "/",
    isActive: false,
  },
];
