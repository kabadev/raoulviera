import Link from "next/link";
import React from "react";
import { fetchData } from "../../../../utils";

const page = async ({ params }) => {
  const { type } = params;
  const res = await fetchData(`/${type}/categories`);

  return (
    <main className="p-12 min-h-[500px] flex gap-10 max-md:flex-col max-sm:p-4 ">
      <div className="w-full bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
        <section className="mt-10">
          <h2 className="text-2xl font-bold  text-center">
            {}
            Expore My Personal Projects on{" "}
            <span className="uppercase">{type}</span>
          </h2>
          <h2 className="text-center text-[16px] font-m mb-4">
            Categories on <span className="uppercase">{type}</span>
          </h2>

          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {res?.map((data, i) => {
              return (
                <div
                  key={i}
                  className="bg-gray-100 flex flex-col items-center justify-center  p-2 border border-slate-200 rounded-md"
                >
                  <div className="  p-3 rounded-md flex items-center justify-center ">
                    <h1 className="text-md font-bold">{data.title}</h1>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center">
                    <Link
                      className="bg-blue-500 text-white text-[0.7rem] p-1 px-6 mt-3 hover:bg-blue-800"
                      href={`/projects/${type}/${data._id}`}
                    >
                      Expore
                    </Link>
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
