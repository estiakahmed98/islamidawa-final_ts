import ProfileToggle from "./ProfileToggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#155E75] text-white py-1 shadow-md">
      <div className="grid grid-cols-12 h-24">
        {/* Logo Section */}
        <div className="flex h-full col-span-2 items-center justify-center">
          <div className="size-24 sm:w-20 sm:h-20">
            <Image
              src="/logo_img.png"
              alt="Islamic Dawah Institute Logo"
              width={96}
              height={96}
              className="object-contain"
              priority // Ensures the logo is loaded quickly
            />
          </div>
        </div>

        {/* Title Section */}
        <div className="flex flex-col justify-center items-center col-span-8 space-y-1">
          <h1 className="text-sm md:text-lg font-semibold leading-tight text-center">
            ইসলামি দাওয়াহ ইনস্টিটিউট বাংলাদেশ
          </h1>
          <div className="text-xs md:text-[15px] font-light text-center flex flex-col gap-1">
            <div>দায়ীদের দাওয়াতি কাজের প্রতিবেদন</div>
            <div className="text-sm">দাওয়াতি বছর ২০২৪ ইং / ১৪৪৫ হিজ</div>
          </div>
        </div>

        {/* Profile Toggle Section */}
        <div className="flex justify-center items-center col-span-2">
          <ProfileToggle />
        </div>
      </div>
    </header>
  );
}
