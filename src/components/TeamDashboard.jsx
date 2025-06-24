import { useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdLogOut } from "react-icons/io";

const TeamDashboard = () => {
  const dummyProjects = [
    {
      company_name: "ABC Corp",
      client_name: "John Doe",
      client_email: "john@example.com",
      client_phone_number: "9876543210",
      company_address: "123 Business Street",
      website_link: "https://abccorp.com",
      logoURL: "https://via.placeholder.com/100",
      Sales_person: "Sales Executive 1",
      business_type: "Service",
      industry_type: "Engineer",
      client_priority: "High Value",
      service: "Website",
      contract_date: "2025-06-10",
      contract_duration: "12 Months",
      renewal: "2026-06-10",
      amount: "50000",
      checklist: ["Informative", "E-Commerce"],
      brief: "Build an e-commerce platform with dynamic UI.",
      PI: new Blob(),
      Assigned: "team",
    },
  ];

  const [activeSection, setActiveSection] = useState("total");
  const [modalData, setModalData] = useState(null);
  const [projectStatus, setProjectStatus] = useState("active");
  const [nextModalOpen, setNextModalOpen] = useState(false);
  const [renewDate,setRenewDate] = useState(false);
  const projects = dummyProjects;
  return (
    <div>
      <div className="h-20 flex justify-between items-center border-b fixed top-0 w-full bg-white left-0 shadow-sm shadow-slate-400 px-6 z-20">
        <div>
          <img className="h-16 w-60" src={logo} alt="logo" />
        </div>
        <div className="text-2xl font-bold text-[#766aad]">OPERATION TEAM</div>
        <div className="w-80 text-2xl text-teammain font-bold relative">
          <span className="animate-scroll absolute top-[-13px]">USERNAME</span>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-teamSidebar w-72 h-[calc(100vh-5rem)] fixed top-20 left-0 flex flex-col text-start z-10 shadow-lg">
          <div
            onClick={() => setActiveSection("total")}
            className={`py-4 border-b border-white text-xl font-semibold pl-8 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "total" ? "bg-teammain" : ""
            }`}
          >
            Total Projects
          </div>
          <div
            onClick={() => setActiveSection("actives")}
            className={`py-4 border-b border-white text-xl font-semibold pl-8 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "actives" ? "bg-teammain" : ""
            }`}
          >
            Active Projects
          </div>
          <div
            onClick={() => setActiveSection("non_actives")}
            className={`py-4 border-b border-white text-xl font-semibold pl-8 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "non_actives" ? "bg-teammain" : ""
            }`}
          >
            Non-Active Projects (Hold)
          </div>
          <div
            onClick={() => setActiveSection("renewals")}
            className={`py-4 flex justify-between border-b border-white text-xl font-semibold px-8 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "renewal_reminder" ? "bg-teammain" : ""
            }`}
          >
            Renewals {projects.length > 0 ? <><span className="bg-red-800 ml-5 text-sm py-1 px-2 rounded-[100%]">{projects.length}</span></> : ""}
          </div>
          <div
            onClick={() => setActiveSection("To_do")}
            className={`py-4 border-b border-white text-xl font-semibold pl-8 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "To_do" ? "bg-teammain" : ""
            }`}
          >
            To-Do List
          </div>
          <div className="py-4 mt-auto border-t border-white text-xl font-semibold cursor-pointer hover:bg-teammain flex items-center justify-center text-white">
            <IoMdLogOut className="text-2xl mr-2" />
            Logout
          </div>
        </div>

       {/* Main Content */}
       <div className="ml-72 mt-20 h-[calc(100vh-5rem)] overflow-y-auto flex-1 p-6 bg-gray-100">
          {/* Total Projects Section */}
          {activeSection === "total" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-6xl mx-auto">
              <h2 className="text-[28px] font-bold text-teammain mb-6 text-center">
                Total Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-white to-[#f2f6f9] border border-gray-200 shadow-custom-grey rounded-2xl p-4 hover:shadow-xl text-center cursor-pointer transition-all duration-300">
                      <h2 className="text-[25px] font-semibold mb-1 text-teammain">
                        {proj.company_name}
                      </h2>
                      <p className="text-base font-semibold text-teammain mb-1">
                        Sales Person: {proj.Sales_person}
                      </p>
                      <p className="font-semibold text-teamSidebar">
                        Client Name: {proj.client_name}
                      </p>

                      {/* Buttons inside the card but don't trigger modal */}
                      <div className="flex justify-center gap-2 mt-3">
                        
                        <button
                          onClick={() => setModalData(proj)}
                          className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* active projects section */}
          {activeSection === "actives" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-teammain mb-6 text-center">
                Active Projects
              </h2>
              {projectStatus === "active" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-br from-white to-[#f2f6f9] border border-gray-200 shadow-custom-grey rounded-2xl p-4 hover:shadow-xl text-center cursor-pointer transition-all duration-300">
                        <h2 className="text-[25px] font-semibold mb-1 text-teammain">
                          {proj.company_name}
                        </h2>
                        <p className="text-base font-semibold text-teammain mb-1">
                          Sales Person: {proj.Sales_person}
                        </p>
                        <p className="font-semibold text-teamSidebar">
                        Client Name: {proj.client_name}
                        </p>

                        {/* Buttons inside the card but don't trigger modal */}
                        <div className="flex justify-center gap-2 mt-3">
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* non-active projects section  */}
          {activeSection === "non_actives" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-teammain mb-6 text-center">
                Non-Active Projects
              </h2>
              {projectStatus === "non-active" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-br from-white to-[#f2f6f9] border border-gray-200 shadow-custom-grey rounded-2xl p-4 hover:shadow-xl text-center cursor-pointer transition-all duration-300">
                        <h2 className="text-[25px] font-semibold mb-1 text-teammain">
                          {proj.company_name}
                        </h2>
                        <p className="text-base font-semibold text-teammain mb-1">
                          Sales Person: {proj.Sales_person}
                        </p>
                        <p className="font-semibold text-teamSidebar">
                        Client Name: {proj.client_name}
                        </p>

                        {/* Buttons inside the card but don't trigger modal */}
                        <div className="flex justify-center gap-2 mt-3">
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* renewals section  */}
          {activeSection === "renewals" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-teammain mb-6 text-center">
                Upcoming Renewals
              </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-br from-white to-[#f2f6f9] border border-gray-200 shadow-custom-grey rounded-2xl p-4 hover:shadow-xl text-center cursor-pointer transition-all duration-300">
                        <h2 className="text-[25px] font-semibold mb-1 text-teammain">
                          {proj.company_name}
                        </h2>
                        <p className="text-base font-semibold text-teammain mb-1">
                          Sales Person: {proj.Sales_person}
                        </p>
                        <p className="font-semibold text-teamSidebar">
                        Client Name: {proj.client_name}
                        </p>

                        {/* Buttons inside the card but don't trigger modal */}
                        <div className="flex justify-center gap-2 mt-3">
                          <button
                            onClick={() => setRenewDate(true)}
                            className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                          >
                            Renew
                          </button>
                          
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                          >
                            View Details
                          </button>
                        </div>
                        {renewDate && (
                        <div className="mt-5 bg-[#f8fafc] border border-gray-300 rounded-xl p-4 shadow-inner">
                          <label className="block text-sm font-semibold text-teammain mb-2">
                            Set New Renewal Date:
                          </label>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <input
                              type="date"
                              required
                              className="p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teammain"
                            />
                            <button
                              onClick={() => setRenewDate(false)}
                              className="bg-teammain hover:bg-teamHover text-white px-5 py-2 rounded-md text-sm font-medium transition duration-200"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      )}
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          )}

          {/* renewals section  */}
          {activeSection === "To_do" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-teammain mb-6 text-center">
               To-Do List
              </h2>
                  <div className="text-center"><p className=" text-base text-teammain">No Pending Task</p></div>
            
            </div>
          )}

          
        </div>
      </div>

      {/* Modal */}
{modalData && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
    <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-8">
      {/*  Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
        onClick={() => setModalData(null)}
      >
        &times;
      </button>

      {/*  Company Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-teammain tracking-wide">
          {modalData.company_name}
        </h2>
      </div>

      {/*  Project Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[15px] text-gray-700 leading-6">
        <p>
          <strong>Client Name:</strong> {modalData.client_name}
        </p>
        <p>
          <strong>Email:</strong> {modalData.client_email}
        </p>
        <p>
          <strong>Phone:</strong> {modalData.client_phone_number}
        </p>

        {/*  Conditional Website */}
        {modalData.website_link && (
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={modalData.website_link}
              target="_blank"
              className="text-blue-600 underline"
            >
              {modalData.website_link}
            </a>
          </p>
        )}

        <p>
          <strong>Sales Person:</strong> {modalData.Sales_person}
        </p>
        <p>
          <strong>Business Type:</strong> {modalData.business_type}
        </p>
        <p>
          <strong>Industry Type:</strong> {modalData.industry_type}
        </p>
        <p>
          <strong>Client Priority:</strong> {modalData.client_priority}
        </p>
        <p>
          <strong>Service:</strong> {modalData.service}
        </p>
        <p>
          <strong>Contract Date:</strong> {modalData.contract_date}
        </p>
        <p>
          <strong>Contract Duration:</strong>{" "}
          {modalData.contract_duration}
        </p>
        <p>
          <strong>Renewal:</strong> {modalData.renewal}
        </p>
        <p>
          <strong>Amount:</strong> ₹{modalData.amount}
        </p>
        <p>
          <strong>Company Address:</strong> {modalData.company_address}
        </p>
      </div>

      {/* Checklist */}
      {modalData.checklist?.length > 0 && (
        <div className="mt-6">
          <p className="font-semibold text-lg text-teammain mb-2">
            Checklist
          </p>
          <div className="flex flex-wrap gap-2">
            {modalData.checklist.map((item, i) => (
              <span
                key={i}
                className="bg-[#b5bff4] text-teammain px-3 py-1 rounded-full text-base font-semibold shadow"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/*  Brief */}
      {modalData.brief && (
        <div className="mt-6">
          <p className="font-semibold text-lg text-teammain mb-2">
            Service Brief
          </p>
          <p className="text-base text-gray-700">{modalData.brief}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
        {/*  PI Document */}
        {modalData.PI && (
          <div className="">
            <p className="font-semibold text-lg text-teammain mb-2">
              PI Document
            </p>
            <a
              href={URL.createObjectURL(modalData.PI)}
              target="_blank"
              className="inline-block bg-teammain hover:bg-teamHover text-white px-5 py-2 rounded-lg transition duration-300 text-sm"
            >
              View PDF
            </a>
          </div>
        )}

        {/* logo */}
        {modalData.logoURL &&
          typeof modalData.logoURL === "string" &&
          modalData.logoURL.trim() !== "" && (
            <div className="">
              <p className="font-semibold text-lg text-teammain mb-2">
                Logo
              </p>
              <a
                href={modalData.logoURL}
                target="_blank"
                className="inline-block bg-teammain hover:bg-teamHover text-white px-5 py-2 rounded-lg transition duration-300 text-sm"
              >
                View Logo
              </a>
            </div>
          )}
      </div>
      
    </div>
  </div>
)}
    </div>
  );
};



export default TeamDashboard;
