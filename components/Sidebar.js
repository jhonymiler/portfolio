import Divisor from "./Divisor";

export default function Sidebar() {
  return (
    <div className="flex-none">
      <div className="sm:w-[150px] md:w-[300px] lg:w-[300px] bg-gray-800 flex flex-col items-center py-10">
        <div className="sm:w-[100px] md:w-[180px] sm:px-30 flex flex-col items-center rounded-full drop-shadow-md overflow-hidden">
          <img className="" src="../avatar.jpg" alt="" />
        </div>
        <h1 className="mt-5 font-bold text-center drop-shadow-md text-gray-100">
          Jonatas Miler de Oliveira
        </h1>
        <strong className="text-gray-400 mt-2">Fullstack Developer</strong>
        <Divisor />
      </div>
    </div>
  );
}
