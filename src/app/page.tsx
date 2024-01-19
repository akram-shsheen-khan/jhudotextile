"use client";
import withAuth from "@/utils/withAuth";

const Home = () => {
  return (
    <div>
        {/* <div className="text-red-900 text-[64px] font-normal font-['Inter']">AKRAM SHAHEEN JHUDO  </div> */}
        <div className="w-[1021px] h-[381px] pl-[87px] pr-[63px] justify-end items-center inline-flex">
    <div className="text-red-700 text-[64px] font-normal font-['Inter']">Akram Shaheen Jhudo Sindh</div>
</div>

     <div>
      <button className="bg-green-500 py-8 px-6">Save</button>
     </div>

    </div>
  );
};
export default withAuth(Home);
