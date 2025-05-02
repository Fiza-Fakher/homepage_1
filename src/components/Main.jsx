import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../images/ncba.png";
import img2 from "../images/bmonday.png";
import img3 from "../images/sasini.png";
import img4 from "../images/aphrc.png";
import { FaAngleRight } from "react-icons/fa6";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
function Main() {
  return (
    <>
      <div className="bg-[#141E30] text-white h-[600px] pt-[80px]">
        <h1 className="text-5xl justify-center flex  font-bold pt-13">
          Discover Your Next Opportunity
        </h1>
        <h5 className="text-lg justify-center flex mt-4">
          Find jobs tailored to your skills, interests, and goals.
        </h5>
        <div className="bg-[#2B3748] rounded-2xl flex  h-[70px] w-[84%] gap-[10px] justify-center items-center ml-[100px] mt-[50px]">
          <select
            name=""
            id=""
            className="h-[46px] w-[270px] bg-white text-[#141E30] rounded-xl"
          >
            <option value="" className="text-[#141E30]">
              Any Job Functions
            </option>
            <option value="" className="text-[#141E30]">
              Marketing
            </option>
            <option value="" className="text-[#141E30]">
              Finance
            </option>
            <option value="" className="text-[#141E30]">
              Engineering
            </option>
          </select>

          <select
            name=""
            id=""
            className="h-[46px] w-[270px] bg-white text-[#141E30] rounded-xl"
          >
            <option value="" className="text-[#141E30]">
              Any Industry
            </option>
            <option value="" className="text-[#141E30]">
              Marketing
            </option>
            <option value="" className="text-[#141E30]">
              Finance
            </option>
            <option value="" className="text-[#141E30]">
              Engineering
            </option>
          </select>
          <select
            name=""
            id=""
            className="h-[46px] w-[270px] bg-white text-[#141E30] rounded-xl"
          >
            <option value="" className="text-[#141E30]">
              Any Location
            </option>
            <option value="" className="text-[#141E30]">
              Malesia
            </option>
            <option value="" className="text-[#141E30]">
              France
            </option>
            <option value="" className="text-[#141E30]">
              Remote
            </option>
          </select>

          <select
            name=""
            id=""
            className="h-[46px] w-[270px] bg-white text-[#141E30] rounded-xl"
          >
            <option value="" className="text-[#141E30]">
              Any Experience level
            </option>
            <option value="" className="text-[#141E30]">
              Middle Level
            </option>
            <option value="" className="text-[#141E30]">
              Fresher
            </option>
            <option value="" className="text-[#141E30]">
              Junior Level
            </option>
          </select>
        </div>
        <div className="flex justify-center items-center mt-7 cursor-pointer font-semibold ">
          <button className="bg-white text-[#141E30] h-[53px] w-[160px] flex justify-center items-center rounded-md ">
            Find a Job
          </button>
        </div>

        <div className="mt-16">
          <h6 className="text-xl ml-14">Popular Searches</h6>
          <div className="flex gap-[10px] ml-13 mt-6">
            <div className="h-[37px] w-[125px] bg-[#434B59] rounded-2xl flex items-center">
              <p className="flex gap-3">
                <CiSearch className="text-lg font-semibold mt-1 ml-2 " />
                Healthcare
              </p>
            </div>

            <div className="h-[37px] w-[198px] bg-[#434B59] rounded-2xl flex items-center">
              <p className="flex gap-3">
                <CiSearch className="text-lg font-semibold mt-1 ml-2 " />
                NGO, NPO & Charity
              </p>
            </div>

            <div className="h-[37px] w-[125px] bg-[#434B59] rounded-2xl flex items-center">
              <p className="flex gap-3">
                <CiSearch className="text-lg font-semibold mt-1 ml-2 " />
                Contract
              </p>
            </div>

            <div className="h-[37px] w-[155px] bg-[#434B59] rounded-2xl flex items-center">
              <p className="flex gap-3">
                <CiSearch className="text-lg font-semibold mt-1 ml-2 " />
                Outside Africa
              </p>
            </div>

            <div className="h-[37px] w-[125px] bg-[#434B59] rounded-2xl flex items-center">
              <p className="flex gap-3">
                <CiSearch className="text-lg font-semibold mt-1 ml-2 " />
                Nairobi
              </p>
            </div>

            <div className="h-[37px] w-[145px] bg-[#434B59] rounded-2xl flex items-center">
              <p className="flex gap-3">
                <CiSearch className="text-lg font-semibold mt-1 ml-2 " />
                Rest of Africa
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-[#ECEDE9] w-full"></div>

      {/* NEXT PART */}
      <div className="w-full h-[630px] mt-9">
        <h1 className="text-[#1D2939] text-5xl items-center justify-center flex font-bold">
          Find the right job vacancies in Africa
        </h1>
        <p className="text-[#1D2939] flex justify-center mt-[35px] text-lg">
          Explore opportunities that match your experience level
        </p>
        {/* container 1 */}
        <div className="flex gap-[30px] mt-[33px] justify-center">
          <div className="w-[350px] h-[160px] rounded border border-[#1D2939] bg-[#F9FAFB]">
            <p className="font-semibold text-lg mt-4 ml-4">Senior level</p>
            <p className="font-bold text-xl mt-2 ml-4">45 Jobs</p>
            <p className="flex gap-2 mt-4 ml-4">
              Explore Jobs <FaArrowRightLong className="mt-1 " />
            </p>
          </div>

          <div className="w-[350px] h-[160px] rounded border border-[#1D2939] bg-[#F9FAFB]">
            <p className="font-semibold text-lg mt-4 ml-4">Mid level</p>
            <p className="font-bold text-xl mt-2 ml-4">103 Jobs</p>
            <p className="flex gap-2 mt-4 ml-4">
              Explore Jobs <FaArrowRightLong className="mt-1 " />
            </p>
          </div>

          <div className="w-[350px] h-[160px] rounded border border-[#1D2939] bg-[#F9FAFB]">
            <p className="font-semibold text-lg mt-4 ml-4">No Experience</p>
            <p className="font-bold text-xl mt-2 ml-4">328 Jobs</p>
            <p className="flex gap-2 mt-4 ml-4">
              Explore Jobs <FaArrowRightLong className="mt-1 " />
            </p>
          </div>
        </div>
        {/* container 2 */}
        <div className="flex gap-[33px] mt-[30px] justify-center">
          <div className="w-[350px] h-[160px] rounded border border-[#1D2939] bg-[#F9FAFB]">
            <p className="font-semibold text-lg mt-4 ml-4">Entry level</p>
            <p className="font-bold text-xl mt-2 ml-4">165 Jobs</p>
            <p className="flex gap-2 mt-4 ml-4">
              Explore Jobs <FaArrowRightLong className="mt-1 " />
            </p>
          </div>

          <div className="w-[350px] h-[160px] rounded border border-[#1D2939] bg-[#F9FAFB]">
            <p className="font-semibold text-lg mt-4 ml-4">Junior level</p>
            <p className="font-bold text-xl mt-2 ml-4">77 Jobs</p>
            <p className="flex gap-2 mt-4 ml-4">
              Explore Jobs <FaArrowRightLong className="mt-1 " />
            </p>
          </div>

          <div className="w-[350px] h-[160px] rounded border border-[#1D2939] bg-[#F9FAFB]">
            <p className="font-semibold text-lg mt-4 ml-4">Internhsip</p>
            <p className="font-bold text-xl mt-2 ml-4">29 Jobs</p>
            <p className="flex gap-2 mt-4 ml-4">
              Explore Jobs <FaArrowRightLong className="mt-1 " />
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-[190px] h-[52px] bg-[#0A0E17] font-bold text-white mt-[40px] flex justify-center items-center rounded-lg">
            Explore All Jobs
          </button>
        </div>
      </div>
      <div className="h-[20px] bg-[#ECEDE9] w-full"></div>

      {/* part 3 */}
      <div className="mt-[60px] h-[430px]">
        <h1 className="text-[#1D2939] font-bold text-4xl flex justify-center">
          Africa’s Top Employers Are Hiring Now
        </h1>
        <p className="text-lg flex justify-center mt-3 text-[#1D2939]">
          Trusted by leading companies across finance, agriculture, and
          innovation
        </p>

        <div className="flex gap-[30px] justify-center items-center mt-[60px]">
          <div className="w-[175px] h-[100px] rounded-lg border flex justify-center items-center">
            <img
              className="w-[65px] h-[55px] grayscale hover:grayscale-0"
              src={img1}
              alt=""
            />
          </div>

          <div className="w-[175px] h-[100px] rounded-lg border flex justify-center items-center">
            <img
              className="w-[65px] h-[55px] grayscale hover:grayscale-0"
              src={img2}
              alt=""
            />
          </div>

          <div className="w-[175px] h-[100px] rounded-lg border flex justify-center items-center">
            <img
              className="w-[65px] h-[55px] grayscale hover:grayscale-0"
              src={img3}
              alt=""
            />
          </div>
          <div className="w-[175px] h-[100px] rounded-lg border flex justify-center items-center">
            <img
              className="w-[65px] h-[55px] grayscale hover:grayscale-0"
              src={img4}
              alt=""
            />
          </div>

          <div className="w-[175px] h-[100px] rounded-lg border flex justify-center items-center">
            <img
              className="w-[65px] h-[55px] grayscale hover:grayscale-0"
              src={img4}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[70px]">
          <button className="w-[200px] flex justify-center items-center h-[45px] rounded-lg bg-[#0A0E17] text-white">
            View All Companies <FaAngleRight />
          </button>{" "}
        </div>
      </div>
      <div className="h-[20px] bg-[#ECEDE9] w-full"></div>
      {/* part4 */}
      <div className="bg-[#101828] h-[500px]">
        <div className="flex justify-center items-center gap-[90px]">
          {/* for content */}
          <div>
            <h1 className="text-white font-bold text-4xl">
              Advance your career with Inno <br /> Job Simulation
            </h1>
            <h5 className="text-white text-lg mt-[20px]">
              Create a free account, complete your <br /> profile, and get
              matched with your <br /> dream job.
            </h5>
            <div className="flex gap-[15px] mt-[20px]">
              <button className="h-[45px] w-[130px] bg-[#141E30] rounded-lg  text-white font-bold  ">
                Get Started
              </button>
              <p className="flex justify-center text-white items-center gap-[5px]">
                Learn More <FaAngleRight />
              </p>
            </div>
            <div className="flex gap-[20px] mt-[10px]">
              <div>
                <h3 className="text-white text-lg font-bold">
                  Get seen by employers
                </h3>
                <p className="text-white">
                  With a complete profile, your <br /> applications and profile
                  are <br /> promoted to top employers, so you <br /> stand out.
                </p>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold">
                  Access the best jobs for you
                </h3>
                <p className="text-white">
                  Sign up for customized job alerts <br /> matching your
                  experience, <br /> preferred industry, function, and <br />{" "}
                  location.
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="mt-[30px] ml-[15px]">
            <img src={img5} className="w-[530px] h-[405px]" alt="" />
          </div>
        </div>
      </div>

      {/* next part */}
      <div className="bg-[#ECEDE9] h-[2000px]">
      <div className="bg-[#ECEDE9] flex justify-center items-center  gap-[30px]">
        {/* content */}
        <div className="pr-[20px] ">
          <h1 className="text-[#141E30] font-bold text-4xl ">
            Boost Your Career With a Winning CV
          </h1>
          <p className="text-gray-800 mt-[25px]">
            Work 1-on-1 with an expert CV writer to showcase your strengths and
            open doors <br /> to new opportunities.
          </p>
          <button className="w-[160px] h-[45px] bg-[#141E30] text-white rounded-md mt-[20px]">
            Upgrade My CV
          </button>
        </div>
        <div>
          <img src={img6} alt="" className="w-[430px] h-[310px] pt-[20px]" />
        </div>
      </div>

      <div className=" justify-center items-center bg-[#ECEDE9]">
        <h1 className="text-[#141E30] font-bold text-4xl flex items-center justify-center mt-[80px] ">
          Why Trust Us?
        </h1>
        <p className="text-gray-800 flex items-center justify-center mt-[10px]">
          Here’s why thousands rely on our platform
        </p>
        {/* container */}
        <div className="flex justify-center items-center gap-[30px] mt-[80px]">
          <div className="bg-white w-[370px] h-[180px] border rounded-lg pl-[20px] pt-[20px] ">
            <h5 className="text-gray-800 font-semibold text-lg">
              Built by data scientists and expert <br />
              psychologists
            </h5>
            <p className="pt-[15px] flex justify-center items-center">
              Our questions and algorithms are unique to us <br /> and are built
              on decades of study in vocational <br />
              testing.
            </p>
          </div>

          <div className="bg-white w-[370px] h-[180px] border rounded-lg pl-[20px] pt-[20px] ">
            <h5 className="text-gray-800 font-semibold text-lg ">
              Over 400 million questions answered
            </h5>
            <p className="pt-[15px]">
              The world of work changes in real time — and so <br /> do our
              analytics. Our algorithms continuously <br /> improve with
              millions of daily data points to give <br /> you real-time
              accuracy.
            </p>
          </div>

          <div className="bg-white w-[370px] h-[180px] border rounded-lg pl-[20px] pt-[20px] ">
            <h5 className="text-gray-800 font-semibold text-lg">
              Your data is safe with us
            </h5>
            <p className="pt-[15px]">
              We firmly believe that you own your data, not us. <br /> We never
              sell your personal data to third parties.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] h-[330px] flex justify-center items-center bg-[#141E30] rounded mt-[90px] ml-[130px] gap-[30px]">
        <div className=" border-white border-8 rounded-lg mt-[20px] mr-[40px]">
          <img src={img7} alt="" className="w-[475px] h-[250px] " />
        </div>
        {/* content */}
        <div>
          <h5 className="text-white">Employers Section</h5>
          <h2 className="text-xl font-bold mt-[30px] text-white">
            Find talent that fits—fast.
          </h2>
          <p className="mt-[10px] text-white">
            With over 1.1 Million+ skilled professionals, your ideal <br />
            candidate is just a few clicks away.
          </p>
          <button className="w-[130px] h-[40px] text-gray-900 bg-white text-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* last part */}
      <div className="mt-[100px] bg-[#ECEDE9]">
        <h1 className="flex items-center justify-center font-bold text-4xl text-[#141E30]">Explore jobs in Africa by job function</h1>
        <p className="flex items-center justify-center mt-2">Find opportunities tailored to your area of expertise</p>
      </div>
      {/* conatiners */}
      <div className="flex items-center justify-center gap-[50px] mt-[30px]">
      <div className=" flex items-center justify-center w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className=" flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className="flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      </div>

      <div className="flex items-center justify-center gap-[50px] mt-[30px]">
      <div className=" flex items-center justify-center w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className=" flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className="flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      </div>

      <div className="flex items-center justify-center gap-[50px] mt-[30px]">
      <div className=" flex items-center justify-center w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className=" flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className="flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      </div>

      <div className="flex items-center justify-center gap-[50px] mt-[30px]">
      <div className=" flex items-center justify-center w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className=" flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className="flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      </div>

      <div className="flex items-center justify-center gap-[50px] mt-[30px]">
      <div className=" flex items-center justify-center w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className=" flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className="flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      </div>
      <div className="flex items-center justify-center gap-[50px] mt-[30px]">
      <div className=" flex items-center justify-center w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      <div className=" flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div>
      {/* <div className="flex items-center justify-center  w-[335px] h-[60px] bg-white border text-gray-900">Accounting, Auditing & Finance</div> */}
      </div>

      </div>
    </>
  );
}

export default Main;
