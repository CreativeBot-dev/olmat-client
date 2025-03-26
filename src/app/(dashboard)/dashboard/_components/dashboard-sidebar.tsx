"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CreditCard,
  User,
  LogOut,
  ChevronDown,
  AlignLeft,
  X,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { ROUTES } from "@/routes/router";

export function DashboardSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [participantsOpen, setParticipantsOpen] = useState(true);
  const [transactionsOpen, setTransactionsOpen] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 899);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const sidebarContent = (
    <div className="flex flex-col h-full ">
      <div className="px-3 pb-4">
        <div className="flex border-b items-center gap-4 py-2 mb-3 bg-white ">
          {/* <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Math Olympiad</span>
          </Link> */}
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {user?.name || "User"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {user?.email || "user@example.com"}
                </span>
              </div>
            </div>
          </div>
          <div>
            <X className="w-10 lg:hidden" onClick={() => setIsOpen(false)} />
          </div>
        </div>
        <div className="space-y-1">
          <Link href={ROUTES.DASHBOARD.DEFAULT} passHref>
            <Button
              variant={pathname === "/dashboard" ? "secondary" : "ghost"}
              className="justify-start w-full"
            >
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </Link>

          <Collapsible
            open={participantsOpen}
            onOpenChange={setParticipantsOpen}
            className="space-y-1"
          >
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="justify-between w-full">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Participants
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    participantsOpen ? "rotate-180" : ""
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1">
              <Link href={ROUTES.DASHBOARD.PARTICIPANTS} passHref>
                <Button
                  variant={pathname === "/participants" ? "secondary" : "ghost"}
                  className="justify-start w-full"
                  size="sm"
                >
                  All Participants
                </Button>
              </Link>
              <Link href={ROUTES.DASHBOARD.REGISTER_PARTICIPANTS} passHref>
                <Button
                  variant={
                    pathname === "/participants/register"
                      ? "secondary"
                      : "ghost"
                  }
                  className="justify-start w-full"
                  size="sm"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register New
                </Button>
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={transactionsOpen}
            onOpenChange={setTransactionsOpen}
            className="space-y-1"
          >
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="justify-between w-full">
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Transactions
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    transactionsOpen ? "rotate-180" : ""
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1">
              <Link href={ROUTES.DASHBOARD.TRANSACTIONS} passHref>
                <Button
                  variant={pathname === "/transactions" ? "secondary" : "ghost"}
                  className="justify-start w-full"
                  size="sm"
                >
                  All Transactions
                </Button>
              </Link>
            </CollapsibleContent>
          </Collapsible>

          {user?.type !== "Admin" && (
            <Link href={ROUTES.DASHBOARD.ACCOUNT} passHref>
              <Button
                variant={pathname === "/account" ? "secondary" : "ghost"}
                className="justify-start w-full"
              >
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
            </Link>
          )}

          <Button
            variant="ghost"
            className="justify-start w-full text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={logout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );

  // Mobile sidebar
  if (isMobile) {
    return (
      <>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden fixed flex -mt-[45px] z-50 ml-0 px-5 bg-white">
              <AlignLeft className="w-6 h-6" />
              <span className="sr-only">Side bar</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[280px]">
            <DialogTitle className="hidden">Navigation</DialogTitle>
            <DialogDescription className="hidden sr-only">
              This sidebar contains navigation links for the dashboard.
            </DialogDescription>
            <ScrollArea className="h-full">{sidebarContent}</ScrollArea>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  // Desktop sidebar
  return (
    <div
      className={cn(
        "hidden md:flex h-screen w-64 flex-col border-r bg-background",
        className
      )}
    >
      <ScrollArea className="flex-1">{sidebarContent}</ScrollArea>
    </div>
  );
}
