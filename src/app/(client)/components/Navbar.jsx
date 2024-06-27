import Link from "next/link";
import React from "react";
import { LuHome, LuUser2 } from "react-icons/lu";
import { PiStack } from "react-icons/pi";
const Navbar = () => {
	return (
		<div className="bg-whites mt-4 h-[70px] px-[40px] flex items-center justify-between max-md:p-3">
			<Link href="/" className="flex flex-col items-center  justify-center">
				<h2 className="text-3xl font-bold">VMS</h2>
				<p className="mt-[-8px] capitalize">Vierra Manufacuring Services</p>
			</Link>
			<nav className="bg-white h-[70px] px-10 rounded-2xl flex items-center gap-4 max-md:fixed max-md:justify-between  bottom-0 left-4 right-4 max-md:p-4  max-md:px-5 max-md:h-[50px] max-md:rounded-md z-40 ">
				<div className="flex flex-col items-center justify-center">
					<LuHome className="md:hidden text-xl " />
					<a href="/">Home</a>
				</div>
				<div className="flex flex-col items-center justify-center">
					<LuUser2 className="md:hidden text-xl" />
					<a href="/about">About</a>
				</div>

				<div className="flex flex-col items-center justify-center">
					<PiStack className="md:hidden text-xl" />
					<a href="/projects">Projects</a>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
