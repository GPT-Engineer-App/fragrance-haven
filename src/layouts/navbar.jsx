import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "../../public/images/logo.png"; // Corrected logo import
import { CircleUser, Menu, Package2, ShoppingCart } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <img src={logo} alt="Crescendo Logo" className="h-8 w-auto" /> {/* Corrected logo */}
          <span className="sr-only">Crescendo</span>
        </NavItem>
        <DesktopNav />
        <MobileNav />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <img src={logo} alt="Crescendo Logo" className="h-8 w-auto" /> {/* Corrected logo */}
          <span className="sr-only">Crescendo</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Login/Register</DropdownMenuItem>
      <DropdownMenuItem>Cart</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

const Footer = () => (
  <footer className="border-t bg-background p-4 text-center space-y-4">
    <div className="flex justify-center space-x-4">
      <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
      <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
    </div>
    <div className="text-muted-foreground">© 2023 Crescendo. All rights reserved.</div>
    <div className="flex justify-center space-x-4">
      <a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a>
      <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
      <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
    </div>
  </footer>
);

export default Layout;