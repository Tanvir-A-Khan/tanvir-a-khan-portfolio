import ProgressBar from "./components/ProgressBar";
export default function Home() {
  return (
    <div className="h-[1000px] flex justify-center">
      <main className="w-[50%] h-full">

        <h2 className="text-[100px] font-semibold font-mono text-center">Portfolio</h2>
        {/* The main secotion start here */}
        <div className="rounded-3xl *:rounded-3xl  bg-white text-stone-950 border-2 border-white flex ">
          {/* Left Segment */}
          <div className="*:rounded-3xl flex flex-grow-0 *:mt-5 *:ms-5 ">
            {/* Image */}
            <img src="/resources/Tanvir.jpg" alt="avatar" className="rounded-3xl  grayscale hover:grayscale transition-all" width={250} height={100} />
            {/* Intro */}
            <div className="h-48 w-48 p-5 bg-gray-200 font-bold hover:bg-green-400 hover:text-white transition-all hover:cursor-default">
              <p className="text-xl mb-6">Hello 👋 I'm </p>
              <p className="text-2xl">Tanvir Ahmed Khan</p>
              <p className="font-thin text-sm">Software Engineer / Software Developer</p>
            </div>
          </div>

          {/* Right Segment */}
          <div className="*:rounded-3xl flex flex-grow-0 *:m-5 *:p-5">
            <div className="h-48 w-96 bg-gray-200  font-bold hover:bg-green-400 hover:text-white transition-all ease-in-out hover:cursor-default">
              <p className="text-3xl">Languages</p>
              <div className="flex justify-between">
                <div className="*:text-sm *:pt-4 font-normal">
                  <p>English</p>
                  <p>Bangla</p>
                  <p>Hindi</p>
                </div>
                <div className="*:text-sm *:pt-4">
                  <div>
                    <ProgressBar length={280} percent={100} />
                  </div>
                  <div>
                    <ProgressBar length={280} percent={100} />
                  </div>
                  <div>
                    <ProgressBar length={280} percent={65} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
