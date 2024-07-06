import React from "react";
import Image from "next/image";
import { fetchData } from "../../../../../../utils";
import { FiDownloadCloud, FiExternalLink } from "react-icons/fi";
import parse from "html-react-parser";
import Preview from "./Preview";
const page = async ({ params }) => {
  const { type, postid } = params;
  const projects = await fetchData(`/${type}/post/${postid}`);
  const project = projects || {};
  return (
    <main className="p-12 min-h-[500px] flex gap-10 max-md:flex-col max-sm:p-4 ">
      <div className="w-full bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
        <section className="mt-10">
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
                {type === "cam" ? (
                  <div className="max-h-[600px] overflow-y-auto max-md:max-h-[100%] ">
                    <div className="section__header">
                      <h2 className="text-xl font-bold mb-3">
                        Project Description
                      </h2>
                    </div>
                    {project.desc && <div>{parse(project.desc)}</div>}
                  </div>
                ) : (
                  <div>
                    <a
                      className="bg-gray-200 absolute flex items-center justify-center h-9 w-9 top-[60px] right-3"
                      target="_blank"
                      href={project.preview}
                      rel="noreferrer"
                      title="Open in new tab"
                    >
                      <FiExternalLink />
                    </a>
                    {type === "cad" ? (
                      project.preview !== "" ? (
                        <Preview data={project.preview} type={type} />
                      ) : (
                        "No Preview Data"
                      )
                    ) : project.gif !== "" ? (
                      <Preview data={project.gif} type={type} />
                    ) : (
                      "No Preview Data"
                    )}
                  </div>
                )}
              </div>
            </div>

            {type === "cam" ? null : (
              <div className="desc">
                <div className="section__header">
                  <h2 className="text-xl font-bold mb-3">
                    Project Description
                  </h2>
                </div>
                {project.desc && <div>{parse(project.desc)}</div>}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
