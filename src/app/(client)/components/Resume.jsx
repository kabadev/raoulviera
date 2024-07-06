"use client";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./resume.css";
import { FaGraduationCap } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
const Resume = () => {
	const [resume, setResume] = useState([]);

	const getResume = async () => {
		const res = await axios.get(`/api/resume/`);
		if (res.data !== null) {
			setResume(res.data);
		}
	};

	useEffect(() => {
		getResume();
	}, []);
	return (
		<section>
			<div className="md:p3 p-2 mt-10">
				<div className="text-center mb-6">
					<h2 className="text-2xl font-bold">My Resume</h2>
					<div className="subtitle">Experience & Educational Qualification</div>
				</div>
				<div className="md:flex gap-4">
					<div className="md:w-[50%]">
						<div className="text-xl font-bold mb-3">
							<h3>Experince</h3>
						</div>
						{resume.map((r, index) => {
							if (r.category === "experience")
								return (
									<div className="w-full mb-6 flex relative " key={index}>
										<div className="w-[10%] flex flex-col items-center justify-center  ">
											<IoStatsChart className="text-2xl text-red-400" />
											<div className="bg-red-300  h-full w-[1px] rounded-sm"></div>
										</div>
										<div className="bg-gray-100 p-2 rounded-md w-[90%] flex flex-col gap-2">
											<h3 className="title font-bold">{r.title}</h3>
											<p className="text-gray-600 text-sm ">{r.year}</p>
											<p className="">{r.desc}</p>
										</div>
									</div>
								);
						})}
					</div>
					<div className="md:w-[50%] p-2">
						<div className="text-xl font-bold mb-3">
							<h3>Education</h3>
						</div>
						{resume.map((r, index) => {
							if (r.category === "education")
								return (
									// <FaGraduationCap className="icon" />
									<div className="w-full mb-6 flex relative " key={index}>
										<div className="w-[10%] flex flex-col items-center justify-center  ">
											<FaGraduationCap className="text-2xl text-red-400" />
											<div className="bg-red-300  h-full w-[1px]  rounded-sm"></div>
										</div>
										<div className="bg-gray-100 p-2 rounded-md w-[90%] flex flex-col gap-2">
											<h3 className="title font-bold">{r.title}</h3>
											<p className="text-gray-600 text-sm ">{r.year}</p>
											<p className="">{r.desc}</p>
										</div>
									</div>
								);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
