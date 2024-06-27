import React from "react";
import Image from "next/image";
import { fetchData } from "../../../../utils";
import { FiDownloadCloud, FiExternalLink } from "react-icons/fi";
import parse from "html-react-parser";

const page = async ({ params }) => {
  const { type, postid } = params;
  const project = await fetchData(`/blender/${postid}`);

  return (
    <main className="p-12 min-h-[500px] flex gap-10 max-md:flex-col max-sm:p-4 ">
      <div className="w-full bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
        <section className="mt-10">
          {/* <h2 className="text-2xl font-bold  text-center">{res.title}</h2> */}

          {/* <div className=" flex flex-col items-center justify-center  p-2 border border-slate-100 hover:shadow-md rounded-md">
						<Image
							src={res.img}
							height={600}
							width={600}
							loading="lazy"
							className="w-full rounded-md"
						/>

						<div>
							<div className="  p-3 rounded-md flex items-center justify-center ">
								<h1 className="text-md font-bold">{res.title}</h1>
							</div>
							<div className="w-full flex flex-col items-center justify-center"></div>
						</div>
					</div> */}

          <div className="content">
            <div className="section__header">
              <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
                {project.title}
              </h2>
            </div>

            <div className="w-full flex gap-4 max-md:flex-col">
              <div className="w-[40%] max-md:w-full">
                <Image
                  width={800}
                  height={800}
                  className="rounded-md"
                  src={project.img}
                  alt=""
                  priority={true}
                />

                <div className="mt-6">
                  <h4 className="text-md font-bold mb-3">Project Files</h4>
                  <a
                    download={project.title}
                    href={project.zip}
                    target="_blank"
                    rel="noopener noreferrer"
                    // download
                    className="bg-blue-800 p-2 px-6 text-white duration-300 transition-all hover:bg-blue-400"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="w-[60%] relative max-md:w-full">
                <div className="max-h-[600px] overflow-y-auto max-md:max-h-[100%] ">
                  <div className="section__header">
                    <h2 className="text-xl font-bold mb-3">
                      Project Description
                    </h2>
                  </div>
                  {project.desc && <div>{parse(project.desc)}</div>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
