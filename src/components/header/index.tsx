import TextField from "../textfield";
import logo from "../../assets/images/go-logo.svg";
import user from "../../assets/images/user.svg";
import dropdown from "../../assets/icons/CaretDown.svg";
import { firstNavbarItem, secondNavbarItem } from "../../constants";
import NavItem from "../navitem";
import Button from "../button";

export default function Header() {
  return (
    <div className="h-[134px] w-full bg-white flex justify-between items-center px-10 sticky top-0 z-20">
      <div className="flex gap-4 w-[30%]">
        <img src={logo} alt="Go logo" title="Go logo" />
        <TextField />
      </div>
      <div className="flex justify-between w-[60%]">
        <div className="flex gap-6">
          {firstNavbarItem.map((item, index) => {
            return <NavItem item={item} key={index} />;
          })}
        </div>
        <div className="w-[1px] bg-[#98A2B3] "></div>
        <Button text="Subscribe" variant="primary" />
        <div className="flex gap-6 ">
          {secondNavbarItem.map((item, index) => {
            return <NavItem item={item} key={index} />;
          })}
          <button className="flex items-center gap-2">
            <img src={user} alt="Jane Doe" />
            <img src={dropdown} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
