import Image from "next/image";
import React from "react";
import {
	FaFacebookF,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
const Profile = ({ data }) => {
	return (
		<div className="w-[400px] flex flex-col items-center  md:sticky top-[-180px] h-full max-md:w-full ">
			<div className="rounded-lg overflow-hidden mb-[-100px] z-10">
				<Image
					width={200}
					height={200}
					className="rounded-2xl overflow-hidden w-full bg-[#ff8888]  shadow-md"
					src={data.img}
					alt=""
					priority={true}
				/>
			</div>
			<div className="bg-white rounded-2xl w-full pt-[120px] px-6 pb-10 ">
				<div className="mb-6">
					<h1 className=" text-center mb-1 text-3xl font-semibold dark:text-white">
						{data.name}
					</h1>
					<p className="text-center">Design Engineer</p>
				</div>
				<div className="flex justify-center space-x-3 mb-6">
					<a
						href={`https://www.facebook.com/${data.facebook}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="socialbtn text-[#1773EA]">
							<FaFacebookF />
						</span>
					</a>
					<a
						href={`https://www.instagram.com/${data.instagram}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="socialbtn text-[#eb4576]">
							<FaInstagramSquare />
						</span>
					</a>
					<a
						href={`https://www.linkedin.com/${data.instagram}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="socialbtn text-[#3368ad]">
							<FaLinkedinIn />
						</span>
					</a>
					<a
						href={`https://www.twitter.com/${data.instagram}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="socialbtn text-[#1C9CEA]">
							<FaTwitter />
						</span>
					</a>
					<a href={data.youtube} target="_blank" rel="noopener noreferrer">
						<span className="socialbtn text-[#fd3e3e]">
							<FaYoutube />
						</span>
					</a>
				</div>

				<div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
					<div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
						<span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 320 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
							</svg>
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
								Phone
							</p>
							<p className="dark:text-white break-all">
								<a
									className="hover:text-[#FA5252] duration-300 transition"
									href={`tel:+${data.mobile}`}
								>
									+{data.mobile}
								</a>
							</p>
						</div>
					</div>
					<div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
						<span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#6AB5B9]  shadow-md">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 384 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
							</svg>
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
								Location
							</p>
							<p className="dark:text-white break-all">Ludhiana, India</p>
						</div>
					</div>
					<div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
						<span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 512 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
							</svg>
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
								Email
							</p>
							<p className="dark:text-white break-all">
								{" "}
								<a
									className="hover:text-[#FA5252] duration-300 transition"
									href={`mailto:${data.email}`}
								>
									{data.email}
								</a>
							</p>
						</div>
					</div>
					<div className="flex py-2.5 undefined">
						<span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 448 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
							</svg>
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
								Birthday
							</p>
							<p className="dark:text-white break-all">March 13, 2001</p>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center mt-4">
					<a
						href=""
						className="btn_download p-3 px-6 rounded-[50px] text-white"
					>
						Download CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default Profile;
