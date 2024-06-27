import Link from "next/link";
import Profile from "./components/Profile";
import { SiSimpleanalytics } from "react-icons/si";
import Resume from "./components/Resume";
import Image from "next/image";
import { fetchData } from "../../utils";
export default async function Home() {
  const ress = await fetchData(`/settings`);
  const res = ress || {};
  return (
    <main className="p-12 flex gap-10 max-md:flex-col max-sm:p-4 ">
      <Profile data={res} />
      <div className="w-[calc(100%-400px)] bg-white rounded-2xl p-6 max-md:w-full max-sm:p-2">
        <section className="pt-12  max-md:pt-3">
          <h2 className=" text-center text-2xl font-bold after:left-52">
            About Me
          </h2>
          <div className="mt-4 text-gray-lite dark:text-color-910 leading-7">
            <div>
              <p>{res.short}</p>
              <p>
                I am dedicated to work hand in hand with your business to
                achieve your desired goals. Your work matters and I would love
                to be part of the change.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/about"
              className="inline-flex items-center mx-auto bg-blue-400 px-4 py-2  text-white rounded-[0] mt-6"
            >
              Read more
            </Link>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-3 text-center">What I do</h2>

          <div className="grid grid-cols-2 gap-4   max-md:grid-cols-1 ">
            <div className="flex items-start gap-4 bg-red-50 p-2">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center bg-red-400">
                <SiSimpleanalytics />
              </div>
              <div className="w-[90%]">
                <h2 className="text-md font-bold">
                  Product Design and Development
                </h2>
                <p className="text-[12px] text-gray-500">
                  (CAD - Computer-Aided Design)
                </p>
                <div className="mt-2">
                  <p>
                    I learn to design using CAD, a digital tool for detailed
                    machine and product plans, bringing ideas to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-yellow-50 p-2">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center bg-yellow-300">
                <SiSimpleanalytics />
              </div>
              <div className="w-[90%]">
                <h2 className="text-lg font-bold">
                  Manufacturing and Production
                </h2>
                <p className="text-[12px] text-gray-500">
                  (CAM - Computer-Aided Manufacturing)
                </p>
                <div className="mt-2">
                  <p>
                    I use CAM to control machines, like 3D printers and CNC
                    machines, bringing digital designs to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-blue-50 p-2">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center bg-blue-400">
                <SiSimpleanalytics />
              </div>
              <div className="w-[90%]">
                <h2 className="text-lg font-bold">
                  Testing and Quality Control
                </h2>
                <p className="text-[12px] text-gray-500">(Testing)</p>
                <div className="mt-2">
                  <p>
                    {`I ensure products are safe and strong, checking their
										quality and performance. It's like being a detective for
										product reliability.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-green-50 bg- p-2">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center bg-green-400">
                <SiSimpleanalytics />
              </div>
              <div className="w-[90%]">
                <h2 className="text-lg font-bold">Simulation and Analysis</h2>
                <p className="text-[12px] text-gray-500">
                  (Ansys - Simulation and Analysis)
                </p>
                <div className="mt-2">
                  <p>
                    {`I use Ansys to predict how things will perform in different
                    situations,It's all about making sure our designs are
                    reliable and safe.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-3 text-center">Skills</h2>

          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex items-start gap-4 p-2 border border-slate-200 rounded-md">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center ">
                <Image
                  width={300}
                  height={200}
                  src="/solidwork.png"
                  alt=""
                  priority={true}
                />
              </div>
              <div className="w-[90%]">
                <h2 className="text-md font-bold">SolidWorks</h2>
                <p className="text-[12px] text-gray-500">(3D CAD Modeling)</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-2 border border-slate-200 rounded-md">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center ">
                <Image
                  width={300}
                  height={200}
                  src="/fusion.png"
                  alt=""
                  priority={true}
                />
              </div>
              <div className="w-[90%]">
                <h2 className="text-md font-bold">Fusion 360</h2>
                <p className="text-[12px] text-gray-500">
                  (CAD/CAM/CAE Integration)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-2 border border-slate-200 rounded-md">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center ">
                <Image
                  width={300}
                  height={200}
                  src="/cam.png"
                  alt=""
                  priority={true}
                />
              </div>
              <div className="w-[90%]">
                <h2 className="text-md font-bold">SolidCAM</h2>
                <p className="text-[12px] text-gray-500">
                  ( CNC Machining CAM - Manufacturing)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-2 border border-slate-200 rounded-md">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center ">
                <Image
                  width={300}
                  height={200}
                  src="/ansy.png"
                  alt=""
                  priority={true}
                />
              </div>
              <div className="w-[90%]">
                <h2 className="text-md font-bold">Ansys</h2>
                <p className="text-[12px] text-gray-500">
                  (Engineering Simulation Tool)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-2 border border-slate-200 rounded-md">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center ">
                <Image
                  width={300}
                  height={200}
                  src="/granta.jpeg"
                  alt=""
                  priority={true}
                />
              </div>
              <div className="w-[90%]">
                <h2 className="text-md font-bold">Granta Edupack</h2>
                <p className="text-[12px] text-gray-500">
                  (Materials Selection Education)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-2 border border-slate-200 rounded-md">
              <div className="w-[20%] h-[60px] rounded-md text-white flex items-center justify-center ">
                <Image
                  width={300}
                  height={200}
                  src="/blender.png"
                  alt=""
                  priority={true}
                />
              </div>
              <div className="w-[90%]">
                <h2 className="text-md font-bold">Blender</h2>
                <p className="text-[12px] text-gray-500">(3D AAnimation)</p>
              </div>
            </div>
          </div>
        </section>
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
                <h2 className="text-center text-[12px] font-m">3D Animation</h2>
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
        <Resume />
      </div>
    </main>
  );
}
