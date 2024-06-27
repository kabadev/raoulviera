import "./sidebar.css";
import React from "react";
import { Pages } from "../../data";
import Link from "next/link";
const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<h3>Raoul Vierra</h3>
			</div>
			<div className="list_menu pl-6">
				<ul className="list_items">
					{Pages.map((page, index) => (
						<li key={index} className="list_item">
							<Link
								// className={({ isActive }) => (isActive ? "active__nav" : "")}
								href={`/admin${page.url}`}
							>
								<span className="icon">{page.icon}</span>
								<span>{page.name}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
