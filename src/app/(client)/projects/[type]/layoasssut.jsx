export default function Layout({ children }) {
	return (
		<main className="p-12 flex gap-10 max-md:flex-col max-sm:p-4 ">
			<div className="w-full min-h-[500px] bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
				{children}
			</div>
		</main>
	);
}
