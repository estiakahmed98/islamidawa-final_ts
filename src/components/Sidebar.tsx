"use client";
import React, { useState } from "react";
import {
  LiaChalkboardTeacherSolid,
  FaQuran,
  MdOutlinePeopleAlt,
  FaRegHandshake,
  FaPeoplePulling,
  MdOutlineMosque,
  BsMoonStars,
  MdOutlineTravelExplore,
  LuArrowLeftFromLine,
  LuArrowRightToLine,
  LuLayoutDashboard,
  FaRegFileAlt,
} from "react-icons/all";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const pathname = usePathname();
  const isActive = (path: string): boolean => pathname === path;

  return (
    <aside
      className={`flex flex-col shrink-0 h-full ${
        isCollapsed ? "w-[68px]" : "w-52"
      } transition-width duration-500 bg-[#155E75] overflow-x-hidden border-t border-slate-700`}
    >
      <div className="p-4 text-right">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none transform transition-transform duration-300"
        >
          {isCollapsed ? (
            <LuArrowRightToLine className="size-6 font-extrabold flex justify-center text-center" />
          ) : (
            <LuArrowLeftFromLine className="size-6 flex justify-end font-extrabold" />
          )}
        </button>
      </div>

      <nav className="p-4 grow overflow-y-auto overflow-x-hidden hide-scrollbar">
        <ul className="space-y-2">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <LuLayoutDashboard className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              ড্যাশবোর্ড
            </li>
          </Link>

          {/* Amoli Muhasaba */}
          <Link
            href="/dashboard/amoli-muhasaba"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/amoli-muhasaba")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaRegFileAlt className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              আ’মলি মুহাসাবা
            </li>
          </Link>

          {/* Other Links */}
          {/* Repeat similar blocks for the rest of the links */}
          {/* Example for Moktob */}
          <Link
            href="/dashboard/moktob"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/moktob")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <LiaChalkboardTeacherSolid className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              মক্তব বিষয়
            </li>
          </Link>
          {/* Repeat for other menu items */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
