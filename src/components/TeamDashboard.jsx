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
        <div className="bg-teamSidebar w-60 h-[calc(100vh-5rem)] fixed top-20 left-0 flex flex-col text-start z-10 shadow-lg">
          <div
            onClick={() => setActiveSection("total")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "total" ? "bg-teammain" : "bg-teammainlight"
            }`}
          >
            Total Projects
          </div>
          <div
            onClick={() => setActiveSection("actives")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "actives" ? "bg-teammain" : "bg-teammainlight"
            }`}
          >
            Active Projects
          </div>
          <div
            onClick={() => setActiveSection("non_actives")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "non_actives" ? "bg-teammain" : "bg-teammainlight"
            }`}
          >
            Non-Active Projects (Hold)
          </div>
          <div
            onClick={() => setActiveSection("renewals")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "renewals" ? "bg-teammain" : "bg-teammainlight"
            }`}
          >
            Renewals {projects.length > 0 ? <><span className="bg-red-600 ml-20 text-xs py-1 px-2 rounded-[100%]">{projects.length}</span></> : ""}
          </div>
          <div
            onClick={() => setActiveSection("To_do")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-teammain text-white ${
              activeSection === "To_do" ? "bg-teammain" : "bg-teammainlight"
            }`}
          >
            To-Do List
          </div>
          <div className="py-1 mt-auto mb-4 mx-4 rounded-md text-md cursor-pointer bg-teammainlight hover:bg-teammain flex items-center justify-center text-white">
            <IoMdLogOut className="text-xl mr-2" />
            Logout
          </div>
        </div>

       {/* Main Content */}
       <div className="ml-60 mt-20 h-[calc(100vh-5rem)] overflow-y-auto flex-1 p-6 bg-gray-100">
          {/* Total Projects Section */}
          {activeSection === "total" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-6xl mx-auto">
              <h2 className="text-[28px] font-bold text-teammain mb-6 text-center">
                Total Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, index) => (
                 <div
                      key={index}
                      className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-teammain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-teammain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-teammain">
                            Assigned To:
                          </span>{" "}
                          {proj.assigned ? (
                            <span className="text-green-600 font-medium">
                              {proj.assigned}
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium italic">
                              Pending...
                            </span>
                          )}
                        </p>

                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-teammain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-blue-100 text-teammain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                      {/* Buttons inside the card but don't trigger modal */}
                      <div>
                        
                        <button
                          onClick={() => setModalData(proj)}
                          className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                        >
                          View Details
                        </button>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj, index) => (
                   <div
                      key={index}
                      className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-teammain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-teammain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-teammain">
                            Assigned To:
                          </span>{" "}
                          {proj.assigned ? (
                            <span className="text-green-600 font-medium">
                              {proj.assigned}
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium italic">
                              Pending...
                            </span>
                          )}
                        </p>

                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-teammain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-blue-100 text-teammain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                        {/* Buttons inside the card but don't trigger modal */}
                        <div>
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                   
                  ))}
                </div>
            
            </div>
          )}

          {/* non-active projects section  */}
          {activeSection === "non_actives" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-teammain mb-6 text-center">
                Non-Active Projects
              </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj, index) => (
                    <div
                      key={index}
                      className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-teammain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-teammain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-teammain">
                            Assigned To:
                          </span>{" "}
                          {proj.assigned ? (
                            <span className="text-green-600 font-medium">
                              {proj.assigned}
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium italic">
                              Pending...
                            </span>
                          )}
                        </p>

                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-teammain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-blue-100 text-teammain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                        {/* Buttons inside the card but don't trigger modal */}
                        <div>
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-teammain text-white rounded-full text-sm font-semibold hover:bg-teamHover transition"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                   
                  ))}
                </div>
              
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
                    <div
                      key={index}
                      className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-teammain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-teammain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-teammain">
                            Assigned To:
                          </span>{" "}
                          {proj.assigned ? (
                            <span className="text-green-600 font-medium">
                              {proj.assigned}
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium italic">
                              Pending...
                            </span>
                          )}
                        </p>

                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-teammain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-blue-100 text-teammain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                        {/* Buttons inside the card but don't trigger modal */}
                        <div className="flex justify-start gap-2">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl p-8">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-bold"
              onClick={() => setModalData(null)}
            >
              &times;
            </button>

            {/* Header */}
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-teammain tracking-tight">
                {modalData.company_name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Detailed Project Overview
              </p>
            </div>

            {/* Details Grid */}
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[15px] text-gray-700 leading-6 border-t border-gray-100 pt-6">
              {/* Mapped fields without address */}
              {[
                { label: "Client Name", value: modalData.client_name },
                { label: "Email", value: modalData.client_email },
                { label: "Phone", value: modalData.client_phone_number },
                { label: "Sales Person", value: modalData.Sales_person },
                { label: "Business Type", value: modalData.business_type },
                { label: "Industry Type", value: modalData.industry_type },
                { label: "Priority", value: modalData.client_priority },
                { label: "Origin", value: modalData.client_origin },
                { label: "Service", value: modalData.service },
                { label: "Contract Date", value: modalData.contract_date },
                { label: "Duration", value: modalData.contract_duration },
                { label: "Renewal", value: modalData.renewal },
                { label: "Amount", value: `₹${modalData.amount}` },
              ].map(
                (item, i) =>
                  item.value && (
                    <div key={i}>
                      <p className="text-sm font-semibold text-teammain">
                        {item.label}
                      </p>
                      <p className="text-gray-800">{item.value}</p>
                    </div>
                  )
              )}

              {/* Website block */}
              {modalData.website_link && (
                <div>
                  <p className="text-sm font-semibold text-teammain">
                    Website
                  </p>
                  <a
                    href={modalData.website_link}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {modalData.website_link}
                  </a>
                </div>
              )}

              {/* Address block with proper line breaks */}
              {modalData.company_address && (
                <div className="md:col-span-3">
                  <p className="text-sm font-semibold text-teammain">
                    Company Address
                  </p>
                  <p className="text-gray-800 whitespace-pre-line">
                    {modalData.company_address}
                  </p>
                </div>
              )}

              
            </div>

            {/* Checklist */}
            {modalData.checklist?.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-teammain mb-3">
                  Selected Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {modalData.checklist.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-full border border-teammain/30 bg-teammainlight text-teammain px-4 py-1 text-[14px] font-medium flex items-center gap-1"
                    >
                      <span>{item}</span>
                      {modalData.postCounts?.[item] && (
                        <span className="text-gray-600 text-xs">
                          ({modalData.postCounts[item]} posts)
                        </span>
                      )}
                      {modalData.reelCounts?.[item] && (
                        <span className="text-gray-600 text-xs">
                          ({modalData.reelCounts[item]} reels)
                        </span>
                      )}
                      {modalData.videoCounts?.[item] && (
                        <span className="text-gray-600 text-xs">
                          ({modalData.videoCounts[item]} videos)
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Brief */}
            {modalData.brief && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-teammain">
                  Service Brief
                </h3>
                <div className="rounded-md bg-gray-50 border border-gray-100 text-gray-700 text-sm leading-relaxed">
                  {modalData.brief}
                </div>
              </div>
            )}

            {/* Documents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1">
              {modalData.PI && (
                <div>
                  <h3 className="text-md font-semibold text-teammain mb-2">
                    PI Document
                  </h3>
                  <a
                    href={URL.createObjectURL(modalData.PI)}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-teammain hover:bg-adminHover text-white px-5 py-2 text-sm font-medium transition"
                  >
                    View PDF
                  </a>
                </div>
              )}
              {modalData.logoURL?.trim() && (
                <div>
                  <h3 className="text-md font-semibold text-teammain mb-2">
                    Logo
                  </h3>
                  <a
                    href={modalData.logoURL}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-teammain hover:bg-adminHover text-white px-5 py-2 text-sm font-medium transition"
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
