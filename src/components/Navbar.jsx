import {
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react";

import {Button} from "@/components/ui/button";

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

  return (
    <header className="border-b rounded-full px-6 py-3">
  <div className="grid grid-cols-3 items-center">

    {/* Left */}
    <div className="justify-self-start">
      <Menubar className="border-none shadow-none hover:text-gray-900 " >
        <MenubarMenu>
          <MenubarTrigger  className="cursor-pointer">Dashboard</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">More</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>

    {/* Center */}
    <h3 className="justify-self-center text-2xl ">
        <Link to="/" className=" text-gray-800 hover:text-gray-600">
         Shipper
        </Link>
    </h3> 

    {/* Right */}
    <div className="justify-self-end flex gap-2">
      <Button variant="outline" className="cursor-pointer"  onClick={() => navigate('/loginform')}>
        Login
      </Button>
      <Button className="cursor-pointer"   onClick={() => navigate('/signup')}>
        Sign Up
      </Button>
    </div>

  </div>
</header>
  );
}
