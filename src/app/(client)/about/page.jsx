import React from "react";
import { fetchData } from "../../../utils";
import Resume from "../components/Resume";
import parse from "html-react-parser";
const page = async () => {
	const res = await fetchData(`/settings`);
	return (
		<main className="p-12 flex gap-10 max-md:flex-col max-sm:p-4 ">
			<div className="w-full bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
				<section className="mt-10">
					<h2 className="text-2xl font-bold mb-3 text-center">About me</h2>
					<div className="!font-normal">{parse(res.desc)}</div>
				</section>
				<Resume />
			</div>
		</main>
	);
};

export default page;
