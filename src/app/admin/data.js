// import { HiOutlineSquare2Stack } from "react-icons/hi";
import React from "react";
import { ImStack } from "react-icons/im";
import { SiPytest, SiBlender, SiAntdesign } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { BiHistory } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

export const Pages = [
	{
		id: 1,
		name: "Home",
		url: "/",
		icon: <SlHome />,
	},
	{
		id: 2,
		name: "CAD",
		url: "/cad",
		icon: <SiAntdesign />,
	},
	{
		id: 3,
		name: "CAM",
		url: "/cam",
		icon: <ImStack />,
	},
	{
		id: 4,
		name: "Ansys",
		url: "/ansys",
		icon: <SiPytest />,
	},
	{
		id: 5,
		name: "Blender",
		url: "/blender",
		icon: <SiBlender />,
	},
	{
		id: 6,
		name: "Resume",
		url: "/resume",
		icon: <RiPagesLine />,
	},
	{
		id: 7,
		name: "Story",
		url: "/story",
		icon: <BiHistory />,
	},
	{
		id: 8,
		name: "Settings",
		url: "/settings",
		icon: <IoSettingsOutline />,
	},
];
