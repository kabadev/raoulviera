import Link from "next/link";
import "./navbar.css";
import React from "react";

const Navbar = () => {
	return (
		<div className="navbar w-full">
			<Link href="/admin/home" className="brand">
				<h1>VMS</h1>
			</Link>
			<button className="btn btn-primary">Logout</button>
		</div>
	);
};

export default Navbar;
