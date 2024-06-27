import React from "react";

const loading = () => {
	return (
		<main className="p-12 min-h-[500px] flex gap-10 max-md:flex-col max-sm:p-4 ">
			<div className="w-full bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
				<section className="mt-10">
					<div className="mb-6 flex flex-col gap-2 items-center justify-center w-full ">
						<div className="animate-pulse  h-[15px] w-[30%] rounded-md bg-gray-300 "></div>
					</div>

					<div className="w-full flex gap-4 max-md:flex-col">
						<div className="w-[40%] max-md:w-full">
							<div className="animate-pulse bg-gray-300  rounded-md h-[300px] w-full"></div>
							<div className="animate-pulse  h-[10px] w-[30%] rounded-md bg-gray-300 mt-3 "></div>
							<div className="animate-pulse  bg-gray-300 h-8 w-[120px] p-1 px-6 mt-3 "></div>
						</div>
						<div className="w-[60%] max-md:w-full">
							<div className="animate-pulse bg-gray-300  rounded-md h-[400px] w-full"></div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default loading;
