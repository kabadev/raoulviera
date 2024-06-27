import Navbar from "./components/Navbar";

export default function Layout({ children }) {
	return (
		<div className="">
			<Navbar />
			<div className="max-md:mb-16">{children}</div>
		</div>
	);
}
