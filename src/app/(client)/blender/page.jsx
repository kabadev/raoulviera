import Link from "next/link";
import React from "react";
import { fetchData } from "../../../utils";
import Image from "next/image";

const page = async ({ params }) => {
  const { type, id } = params;
  const ress = await fetchData(`/blender`);
  const res = ress || {};
  return (
    <main className="p-12 min-h-[500px] flex gap-10 max-md:flex-col max-sm:p-4 ">
      <div className="w-full bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
        <section className="mt-10">
          <h2 className="text-2xl font-bold  text-center">
            {}
            Projects on <span className="uppercase">Blender</span>
          </h2>
          <h2 className="text-center text-[16px] font-m mb-4">
            projects on <span className="uppercase">Blender</span>
          </h2>

          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {res.map((data, i) => {
              return (
                <div
                  key={i}
                  className=" flex flex-col items-center justify-center  p-2 border border-slate-100 hover:shadow-md rounded-md"
                >
                  <Link href={`/blender/${data._id}`}>
                    <Image
                      src={data.img}
                      height={600}
                      width={600}
                      loading="lazy"
                      alt={data.title}
                      className="w-full rounded-md"
                    />
                  </Link>

                  <div>
                    <div className="  p-3 rounded-md flex items-center justify-center ">
                      <h1 className="text-md font-bold">{data.title}</h1>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                      <Link
                        className="bg-blue-500 text-white text-[0.7rem] p-1 px-6 mt-3 hover:bg-blue-800"
                        href={`/blender/${data._id}`}
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
