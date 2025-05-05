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
  // Data for dropdown options
  const dropdownOptions = [
    { name: "Any Job Functions", options: ["Marketing", "Finance", "Engineering"] },
    { name: "Any Industry", options: ["Marketing", "Finance", "Engineering"] },
    { name: "Any Location", options: ["Malesia", "France", "Remote"] },
    { name: "Any Experience level", options: ["Middle Level", "Fresher", "Junior Level"] }
  ];

  // Data for popular searches
  const popularSearches = [
    { text: "Healthcare", width: "125px" },
    { text: "NGO, NPO & Charity", width: "200px" },
    { text: "Contract", width: "125px" },
    { text: "Outside Africa", width: "200px" },
    { text: "Nairobi", width: "125px" },
    { text: "Rest of Africa", width: "160px" }
  ];

  // Data for job cards
  const jobCards = [
    { title: "Senior level", jobs: "45 Jobs" },
    { title: "Mid level", jobs: "103 Jobs" },
    { title: "No Experience", jobs: "328 Jobs" },
    { title: "Entry level", jobs: "165 Jobs" },
    { title: "Junior level", jobs: "77 Jobs" },
    { title: "Internhsip", jobs: "29 Jobs" }
  ];

  // Split job cards into rows of 3
  const jobCardRows = [];
  for (let i = 0; i < jobCards.length; i += 3) {
    jobCardRows.push(jobCards.slice(i, i + 3));
  }

  // Data for employer logos
  const employers = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img4 }
  ];

  // Data for trust reasons
  const trustReasons = [
    {
      title: "Built by data scientists and expert psychologists",
      description: "Our questions and algorithms are unique to us and are built on decades of study in vocational testing."
    },
    {
      title: "Over 400 million questions answered",
      description: "The world of work changes in real time — and so do our analytics. Our algorithms continuously improve with millions of daily data points to give you real-time accuracy."
    },
    {
      title: "Your data is safe with us",
      description: "We firmly believe that you own your data, not us. We never sell your personal data to third parties."
    }
  ];

  // Data for job functions
  const jobFunctionRows = [
    Array(3).fill("Accounting, Auditing & Finance"),
    Array(3).fill("Accounting, Auditing & Finance"),
    Array(3).fill("Accounting, Auditing & Finance"),
    Array(3).fill("Accounting, Auditing & Finance"),
    Array(3).fill("Accounting, Auditing & Finance"),
    Array(2).fill("Accounting, Auditing & Finance")
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#141E30] text-white min-h-[600px] pt-[80px] px-4">
        <h1 className="text-4xl md:text-5xl text-center font-bold pt-13">
          Discover Your Next Opportunity
        </h1>
        <h5 className="text-lg text-center mt-4">
          Find jobs tailored to your skills, interests, and goals.
        </h5>
        
        {/* Search filters */}
        <div className="bg-[#2B3748] rounded-2xl flex flex-col md:flex-row h-auto md:h-[70px] w-full md:w-[87%] gap-[10px] justify-center items-center mx-auto md:ml-[100px] mt-[50px] p-4 md:p-0">
          {dropdownOptions.map((dropdown, index) => (
            <select
              key={index}
              name=""
              id=""
              className="h-[46px] w-full md:w-[270px] bg-white text-[#141E30] rounded-xl mb-2 md:mb-0"
            >
              <option value="" className="text-[#141E30]">
                {dropdown.name}
              </option>
              {dropdown.options.map((option, optIndex) => (
                <option key={optIndex} value="" className="text-[#141E30]">
                  {option}
                </option>
              ))}
            </select>
          ))}
        </div>
        
        {/* Find a job button */}
        <div className="flex justify-center items-center mt-7 cursor-pointer font-semibold">
          <button className="bg-white text-[#141E30] h-[53px] w-[160px] flex justify-center items-center rounded-md">
            Find a Job
          </button>
        </div>

        {/* Popular searches */}
        <div className="mt-16">
          <h6 className="text-xl text-center md:text-left md:ml-14">Popular Searches</h6>
          <div className="flex flex-wrap justify-center md:justify-start gap-[10px] md:ml-13 mt-6 px-4 md:px-14">
            {popularSearches.map((search, index) => (
              <div key={index} className="h-[37px] bg-[#434B59] rounded-2xl flex items-center px-3">
                <p className="flex gap-3">
                  <CiSearch className="text-lg font-semibold mt-1" />
                  {search.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-[#ECEDE9] w-full"></div>

      {/* Job vacancies section */}
      <div className="w-full py-9 px-4">
        <h1 className="text-[#1D2939] text-3xl md:text-5xl text-center font-bold">
          Find the right job vacancies in Africa
        </h1>
        <p className="text-[#1D2939] text-center mt-[35px] text-lg">
          Explore opportunities that match your experience level
        </p>
        
        {/* Job cards */}
        <div className="flex flex-col items-center">
          {jobCardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row justify-center mt-8 gap-4 md:gap-8 w-full">
              {row.map((card, cardIndex) => (
                <div key={cardIndex} className="w-full md:w-[350px] h-[160px] rounded-xl border-gray-500 shadow-sm bg-[#f9f9f9] hover:bg-white cursor-pointer hover:shadow-lg p-4">
                  <p className="font-semibold text-lg">{card.title}</p>
                  <p className="font-bold text-xl mt-2">{card.jobs}</p>
                  <p className="flex gap-2 mt-4">
                    Explore Jobs <FaArrowRightLong className="mt-1" />
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button className="w-[190px] h-[52px] bg-[#0A0E17] font-bold text-white mt-[40px] flex justify-center items-center rounded-lg">
            Explore All Jobs
          </button>
        </div>
      </div>
      
      <div className="h-[20px] bg-[#ECEDE9] w-full"></div>

      {/* Top Employers Section */}
      <div className="mt-[60px] py-8 px-4">
        <h1 className="text-[#1D2939] font-bold text-3xl md:text-4xl text-center">
          Africa's Top Employers Are Hiring Now
        </h1>
        <p className="text-lg text-center mt-3 text-[#1D2939]">
          Trusted by leading companies across finance, agriculture, and
          innovation
        </p>

        {/* Employer logos */}
        <div className="flex flex-wrap gap-[30px] justify-center items-center mt-[60px]">
          {employers.map((employer, index) => (
            <div key={index} className="w-[175px] h-[100px] rounded-lg flex justify-center items-center border-[#f9f9f9] border-2 hover:bg-white cursor-pointer hover:shadow-lg">
              <img
                className="w-[65px] h-[55px] grayscale hover:grayscale-0"
                src={employer.img}
                alt=""
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center mt-[70px]">
          <button className="w-[200px] flex justify-center items-center h-[45px] rounded-lg bg-[#0A0E17] text-white">
            View All Companies <FaAngleRight />
          </button>
        </div>
      </div>
      
      <div className="h-[20px] bg-[#ECEDE9] w-full"></div>
      
      {/* Job Simulation Section */}
      <div className="bg-[#101828] py-12 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[40px] md:gap-[90px]">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-white font-bold text-3xl md:text-4xl">
              Advance your career with Inno <br className="hidden md:block" /> Job Simulation
            </h1>
            <h5 className="text-white text-lg mt-[20px]">
              Create a free account, complete your <br className="hidden md:block" /> profile, and get
              matched with your <br className="hidden md:block" /> dream job.
            </h5>
            <div className="flex justify-center md:justify-start gap-[15px] mt-[20px]">
              <button className="h-[45px] w-[130px] bg-[#141E30] rounded-lg text-white font-bold">
                Get Started
              </button>
              <p className="flex justify-center text-white items-center gap-[5px]">
                Learn More <FaAngleRight />
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] mt-[30px]">
              <div>
                <h3 className="text-white text-lg font-bold">
                  Get seen by employers
                </h3>
                <p className="text-white">
                  With a complete profile, your <br className="hidden md:block" /> applications and profile
                  are <br className="hidden md:block" /> promoted to top employers, so you <br className="hidden md:block" /> stand out.
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <h3 className="text-white text-lg font-bold">
                  Access the best jobs for you
                </h3>
                <p className="text-white">
                  Sign up for customized job alerts <br className="hidden md:block" /> matching your
                  experience, <br className="hidden md:block" /> preferred industry, function, and <br className="hidden md:block" /> location.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="mt-[30px]">
            <img src={img5} className="w-full md:w-[530px] h-auto md:h-[405px] pt-[20px] md:pt-[60px]" alt="" />
          </div>
        </div>
      </div>

      {/* CV Section */}
      <div className="bg-[#ECEDE9]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] py-12 px-4">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-[#141E30] font-bold text-3xl md:text-4xl">
              Boost Your Career With a Winning CV
            </h1>
            <p className="text-gray-800 mt-[25px]">
              Work 1-on-1 with an expert CV writer to showcase your strengths and
              open doors <br className="hidden md:block" /> to new opportunities.
            </p>
            <button className="w-[160px] h-[45px] bg-[#141E30] text-white rounded-md mt-[20px]">
              Upgrade My CV
            </button>
          </div>
          <div className="mt-4 md:mt-0">
            <img src={img6} alt="" className="w-full md:w-[430px] h-auto md:h-[310px]" />
          </div>
        </div>

        {/* Trust Section */}
        <div className="py-8 px-4">
          <h1 className="text-[#141E30] font-bold text-3xl md:text-4xl text-center mt-[40px] md:mt-[80px]">
            Why Trust Us?
          </h1>
          <p className="text-gray-800 text-center mt-[10px]">
            Here's why thousands rely on our platform
          </p>
          
          {/* Trust reason cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] mt-[40px] md:mt-[80px]">
            {trustReasons.map((reason, index) => (
              <div key={index} className="bg-white w-full md:w-[370px] h-auto md:h-[180px] border-2-white rounded-lg p-[20px] hover:bg-white cursor-pointer hover:shadow-lg">
                <h5 className="text-gray-800 font-semibold text-lg">
                  {reason.title}
                </h5>
                <p className="pt-[15px]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Employers Section */}
        <div className="flex justify-center px-4 py-8">
          <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center bg-[#141E30] rounded mt-[40px] md:mt-[90px] gap-[30px] p-6">
            <div className="mt-[20px]">
              <img src={img7} alt="" className="w-full md:w-[478px] h-auto md:h-[250px]" />
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left">
              <h5 className="text-white">Employers Section</h5>
              <h2 className="text-xl font-bold mt-[30px] text-white">
                Find talent that fits—fast.
              </h2>
              <p className="mt-[10px] text-white">
                With over 1.1 Million+ skilled professionals, your ideal <br className="hidden md:block" />
                candidate is just a few clicks away.
              </p>
              <button className="w-[130px] h-[40px] text-gray-900 bg-white text-lg mt-4">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Job Functions Section */}
        <div className="mt-[60px] md:mt-[100px] bg-[#ECEDE9] px-4 py-8">
          <h1 className="text-center font-bold text-3xl md:text-4xl text-[#141E30]">Explore jobs in Africa by job function</h1>
          <p className="text-center mt-2">Find opportunities tailored to your area of expertise</p>
        </div>
        
        {/* Job function containers */}
        <div className="px-4 pb-12">
          {jobFunctionRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row flex-wrap justify-center gap-[15px] mt-[30px]">
              {row.map((job, jobIndex) => (
                <div key={jobIndex} className="flex items-center justify-center w-full md:w-[335px] h-[60px] bg-white border-white rounded-lg cursor-pointer text-gray-900 hover:bg-[#EFF2F6]">
                  {job}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;