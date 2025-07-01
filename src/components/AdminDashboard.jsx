import { useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdLogOut } from "react-icons/io";

const AdminDashboard = () => {
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
      client_origin:"Domestic",
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
      {/* header section */}
      <div className="h-20 flex justify-between items-center border-b fixed top-0 w-full bg-white left-0 shadow-sm shadow-slate-400 px-6 z-20">
        <div>
          <img className="h-16 w-60" src={logo} alt="logo" />
        </div>
        <div className="text-2xl font-bold text-adminmain">Admin</div>
        <div className="w-80 text-2xl text-adminmain font-bold relative">
          <span className="animate-scroll absolute top-[-13px]">USERNAME</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-adminSidebar w-60 h-[calc(100vh-5rem)] fixed top-20 left-0 flex flex-col text-start z-10 shadow-lg">
          <div
            onClick={() => setActiveSection("total")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-adminmain text-white ${
              activeSection === "total" ? "bg-adminmain" : "bg-adminmainlight"
            }`}
          >
            Total Projects
          </div>
          <div
            onClick={() => setActiveSection("actives")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-adminmain text-white ${
              activeSection === "actives" ? "bg-adminmain" : "bg-adminmainlight"
            }`}
          >
            Active Projects
          </div>
          <div
            onClick={() => setActiveSection("non_actives")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-adminmain text-white ${
              activeSection === "non_actives" ? "bg-adminmain" : "bg-adminmainlight"
            }`}
          >
            Non-Active Projects (Hold)
          </div>
          <div
            onClick={() => setActiveSection("renewals")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-adminmain text-white ${
              activeSection === "renewals" ? "bg-adminmain" : "bg-adminmainlight"
            }`}
          >
            Renewals {projects.length > 0 ? <><span className="bg-red-800 ml-20 text-xs py-1 px-2 rounded-[100%]">{projects.length}</span></> : ""}
          </div>
          <div
            onClick={() => setActiveSection("allocation")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-adminmain text-white ${
              activeSection === "allocation" ? "bg-adminmain" : "bg-adminmainlight"
            }`}
          >
            Assign Project {projects.length > 0 ? <><span className="bg-red-800 ml-12 py-1 px-2 text-xs rounded-[100%]">{projects.length}</span></> : ""}
          </div>
          <div className="py-1 mt-auto mb-4 mx-4 rounded-md text-md pl-2 cursor-pointer bg-adminmainlight hover:bg-adminmain flex items-center justify-center text-white">
            <IoMdLogOut className="text-xl mr-2" />
            Logout
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-60 mt-20 h-[calc(100vh-5rem)] overflow-y-auto flex-1 p-6 bg-gray-100">
          {/* Total Projects Section */}
          {activeSection === "total" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-6xl mx-auto">
              <h2 className="text-[28px] font-bold text-adminmain mb-6 text-center">
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
                        <h3 className="text-xl font-bold text-adminmain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-adminmain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-adminmain">
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
                          <span className="font-semibold text-adminmain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-pink-100 text-adminmain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                      {/* Buttons inside the card but don't trigger modal */}
                      <div className="flex justify-start gap-2 ">
                        <button
                          onClick={() => setProjectStatus("active")}
                          className={`px-4 py-1 rounded-full font-semibold text-white transition 
                          ${
                            projectStatus === "active"
                              ? "bg-green-400 cursor-not-allowed"
                              : "bg-green-600 hover:bg-green-700"
                          }`}
                        >
                          Active
                        </button>
                        <button
                          onClick={() => setProjectStatus("non-active")}
                          className={`px-4 py-1 rounded-full font-semibold text-white transition 
                            ${
                              projectStatus === "non-active"
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gray-700 hover:bg-gray-800 cursor-pointer"
                            }`}
                        >
                          Non-Active
                        </button>
                        <button
                          onClick={() => setModalData(proj)}
                          className="px-4 py-2 bg-adminmain text-white rounded-full text-sm font-semibold hover:bg-adminHover transition"
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
              <h2 className="text-[28px] font-bold text-adminmain mb-6 text-center">
                Active Projects
              </h2>
              {projectStatus === "active" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj, index) => (
                    <div
                      key={index}
                      className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-adminmain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-adminmain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-adminmain">
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
                          <span className="font-semibold text-adminmain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-pink-100 text-adminmain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>
                        {/* Buttons inside the card but don't trigger modal */}
                        <div>
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-adminmain text-white rounded-full text-sm font-semibold hover:bg-adminHover transition"
                          >
                            View Details
                          </button>
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
              <h2 className="text-[28px] font-bold text-adminmain mb-6 text-center">
                Non-Active Projects
              </h2>
              {projectStatus === "non-active" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj, index) => (
                   <div
                      key={index}
                      className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-adminmain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-adminmain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-adminmain">
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
                          <span className="font-semibold text-adminmain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-pink-100 text-adminmain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>
                        {/* Buttons inside the card but don't trigger modal */}
                        <div>
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-adminmain text-white rounded-full text-sm font-semibold hover:bg-adminHover transition"
                          >
                            View Details
                          </button>
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
              <h2 className="text-[28px] font-bold text-adminmain mb-6 text-center">
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
                        <h3 className="text-xl font-bold text-adminmain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-adminmain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-adminmain">
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
                          <span className="font-semibold text-adminmain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-pink-100 text-adminmain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                        {/* Buttons inside the card but don't trigger modal */}
                        <div className="flex justify-start gap-2">
                          <button
                            onClick={() => setRenewDate(true)}
                            className="px-4 py-2 bg-adminmain text-white rounded-full text-sm font-semibold hover:bg-adminHover transition"
                          >
                            Renew
                          </button>
                          
                          <button
                            onClick={() => setModalData(proj)}
                            className="px-4 py-2 bg-adminmain text-white rounded-full text-sm font-semibold hover:bg-adminHover transition"
                          >
                            View Details
                          </button>
                        </div>
                        {renewDate && (
                        <div className="bg-[#f8fafc] border border-gray-300 rounded-xl p-4 shadow-inner">
                          <label className="block text-sm font-semibold text-adminmain mb-2">
                            Set New Renewal Date:
                          </label>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <input
                              type="date"
                              required
                              className="p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-adminmain"
                            />
                            <button
                              onClick={() => setRenewDate(false)}
                              className="bg-adminmain hover:bg-adminHover text-white px-5 py-2 rounded-md text-sm font-medium transition duration-200"
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

          {/* task allocation section  */}
          {activeSection === "allocation" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-adminmain mb-6 text-center">
                Allocate Project
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, index) => (
                 <div
                      key={index}
                      className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-adminmain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-adminmain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-adminmain">
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
                          <span className="font-semibold text-adminmain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-pink-100 text-adminmain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                      {/* Buttons inside the card but don't trigger modal */}
                      <div>
                        <button
                          onClick={() => setModalData(proj)}
                          className="px-4 py-2 bg-adminmain text-white rounded-full text-sm font-semibold hover:bg-adminHover transition"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                 
                ))}
              </div>
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
              <h2 className="text-3xl font-extrabold text-adminmain tracking-tight">
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
                      <p className="text-sm font-semibold text-adminmain">
                        {item.label}
                      </p>
                      <p className="text-gray-800">{item.value}</p>
                    </div>
                  )
              )}

              {/* Website block */}
              {modalData.website_link && (
                <div>
                  <p className="text-sm font-semibold text-adminmain">
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
                  <p className="text-sm font-semibold text-adminmain">
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
                <h3 className="text-lg font-semibold text-adminmain mb-3">
                  Selected Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {modalData.checklist.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-full border border-adminmain/30 bg-adminmainlight text-adminmain px-4 py-1 text-[14px] font-medium flex items-center gap-1"
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
                <h3 className="text-lg font-semibold text-adminmain">
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
                  <h3 className="text-md font-semibold text-adminmain mb-2">
                    PI Document
                  </h3>
                  <a
                    href={URL.createObjectURL(modalData.PI)}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-adminmain hover:bg-adminHover text-white px-5 py-2 text-sm font-medium transition"
                  >
                    View PDF
                  </a>
                </div>
              )}
              {modalData.logoURL?.trim() && (
                <div>
                  <h3 className="text-md font-semibold text-adminmain mb-2">
                    Logo
                  </h3>
                  <a
                    href={modalData.logoURL}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-adminmain hover:bg-adminHover text-white px-5 py-2 text-sm font-medium transition"
                  >
                    View Logo
                  </a>
                </div>
              )}
              
            </div>
            {activeSection === "allocation" && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold"
                  onClick={() => {
                    setModalData(null);
                    setNextModalOpen(true);
                  }}
                >
                  Approve
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold"
                  onClick={() => console.log("Not Approved")}
                >
                  Not Approve
                </button>
              </div>
            )}
          </div>
        </div>
      )}


      {/* assign modal */}
      {nextModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-8">
            {/*  Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
              onClick={() => setNextModalOpen(null)}
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-adminmain tracking-wide text-center">
              Assign Project
            </h2>

            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-xl shadow-inner max-h-64 overflow-y-auto">
              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Jitender"
                  name="assign"
                  value="Jitender Shekhawat"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Jitender Shekhawat – (AGM)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="ekta"
                  name="assign"
                  value="Ekta Yadav"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Ekta Yadav - (Digital Marketing Executives)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="bhavya"
                  name="assign"
                  value="Bhavya Khanna"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Bhavya Khanna - (Digital Marketing Executives)</span>
              </label>

               <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Yash"
                  name="assign"
                  value="Yash Raghav"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Yash Raghav - (Digital Marketing Executives)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Mayur"
                  name="assign"
                  value="Mayur Rathore"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Mayur Rathore - (SEO Executives)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Devansh"
                  name="assign"
                  value="Devansh Mehta"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Devansh Mehta - (SEO Executives)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Rajat"
                  name="assign"
                  value="Rajat Rana"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Rajat Rana - (Web Developer)</span>
              </label>

               <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Suman"
                  name="assign"
                  value="Suman Pandey"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Suman Pandey - (Web Developer)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Bhumika"
                  name="assign"
                  value="Bhumika Garg"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Bhumika Garg - (Web Developer)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Rudra"
                  name="assign"
                  value="Rudra"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Rudra - (Video Editor)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Siddharth"
                  name="assign"
                  value="Siddharth"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Siddharth - (Video Editor)</span>
              </label> 

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Mansi"
                  name="assign"
                  value="Mansi"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Mansi - (Graphic Designer)</span>
              </label> 

              <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
                <input
                  type="checkbox"
                  id="Jatin"
                  name="assign"
                  value="Jatin"
                  className="accent-pink-600 w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Jatin - (Graphic Designer)</span>
              </label>    

            </div>

            <div className="text-center">
              <button onClick={()=>setNextModalOpen(null)}  className="inline-block bg-adminmain hover:bg-adminHover text-white px-5 py-2 rounded-lg transition duration-300 text-lg font-semibold">Assign</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
