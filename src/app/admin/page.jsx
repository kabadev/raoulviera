import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Pages } from "./data";
import "./home.css";
import Link from "next/link";

const Home = () => {
	return (
		<div className="Homes">
			<div className="containerd">
				<Sidebar />
				<main>
					<Navbar />

					<div className="content">
						<div className="card_items">
							{Pages.map((page, index) => (
								<Link
									className="card dashboard"
									href={`/admin${page.url}`}
									key={index}
								>
									<span className="icon">{page.icon}</span>
									<span>{page.name}</span>
								</Link>
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;
