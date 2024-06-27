import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<main className="p-12 flex gap-10 max-md:flex-col max-sm:p-4 ">
			<div className="w-full bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
				<section className="mt-10">
					<h2 className="text-2xl font-bold mb-3 text-center">
						Expore My Personal Projects
					</h2>

					<div className="grid grid-cols-2 gap-4 max-md: ">
						<div className="flex flex-col items-center justify-center  p-2 border border-slate-200 rounded-md">
							<div className="bg-red-40s0 w-[100px] h-[60px] p-3 rounded-md texts-white flex items-center justify-center ">
								<h1 className="text-3xl font-bold">CAD</h1>
							</div>
							<div className="w-full flex flex-col items-center justify-center">
								<h2 className="text-center text-[12px] font-m">
									Computer-Aided Design
								</h2>
								<Link
									className="bg-blue-500 text-white text-[0.7rem] p-1 px-6 mt-3 hover:bg-blue-800"
									href="/projects/cad"
								>
									Expore
								</Link>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center  p-2 border border-slate-200 rounded-md">
							<div className="bg-red-40s0 w-[100px] h-[60px] p-3 rounded-md texts-white flex items-center justify-center ">
								<h1 className="text-3xl font-bold">CAM</h1>
							</div>
							<div className="w-full flex flex-col items-center justify-center">
								<h2 className="text-center text-[12px] font-m">
									Computer-Aided Manufacturing
								</h2>
								<Link
									className="bg-blue-500 text-white text-[0.7rem] p-1 px-6 mt-3 hover:bg-blue-800"
									href="/projects/cam"
								>
									Expore
								</Link>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center  p-2 border border-slate-200 rounded-md">
							<div className="bg-red-40s0 w-[100px] h-[60px] p-3 rounded-md texts-white flex items-center justify-center ">
								<h1 className="text-3xl font-bold">Ansys</h1>
							</div>
							<div className="w-full flex flex-col items-center justify-center">
								<h2 className="text-center text-[12px] font-m">
									Ansys Simulation
								</h2>
								<Link
									className="bg-blue-500 text-white text-[0.7rem] p-1 px-6 mt-3 hover:bg-blue-800"
									href="/projects/ansys"
								>
									Expore
								</Link>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center  p-2 border border-slate-200 rounded-md">
							<div className="bg-red-40s0 w-[100px] h-[60px] p-3 rounded-md texts-white flex items-center justify-center ">
								<h1 className="text-3xl font-bold">Blender</h1>
							</div>
							<div className="w-full flex flex-col items-center justify-center">
								<h2 className="text-center text-[12px] font-m">
									Computer-Aided Manufacturing
								</h2>
								<Link
									className="bg-blue-500 text-white text-[0.7rem] p-1 px-6 mt-3 hover:bg-blue-800"
									href="/blender"
								>
									Expore
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default page;
