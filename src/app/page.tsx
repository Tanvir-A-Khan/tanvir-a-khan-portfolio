import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[1000px] flex justify-center">
      <main className="w-[50%] h-full">
        <h2 className="text-[100px] font-semibold font-mono text-center">Portfolio</h2>
        {/* The main secotion start here */}
        <div className="rounded-3xl *:rounded-3xl  bg-white text-stone-950 border-2 border-white">
          {/* Left Segment */}
          <div className="*:rounded-3xl flex flex-grow-0 *:m-5 *:p-5">
          {/* Intro */}
          <div className="h-48 w-48 bg-gray-200  font-bold hover:bg-green-400 hover:text-white transition-all ease-in-out hover:cursor-default">
            <p className="text-xl mb-6">Hello 👋 I'm </p>
            <p className="text-2xl">Tanvir Ahmed Khan</p>
            <p className="font-thin text-sm">Software Engineer / Software Developer</p>
          </div>
          {/* Intro */}
          <div className="h-48 w-48 bg-gray-200 font-bold hover:bg-green-400 hover:text-white transition-all hover:cursor-default">
            <p className="text-xl mb-6">Hello 👋 I'm </p>
            <p className="text-2xl">Tanvir Ahmed Khan</p>
            <p className="font-thin text-sm">Software Engineer / Software Developer</p>
          </div>

          </div >
          {/* Right Segment */}
          <div className="*:rounded-3xl">

          </div>

        </div>
      </main>
    </div>
  );
}
