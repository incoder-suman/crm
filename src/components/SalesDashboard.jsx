import { useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdLogOut } from "react-icons/io";

const SalesDashboard = () => {
  const [activeSection, setActiveSection] = useState("existing");
  const [selectedService, setSelectedService] = useState("");
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [renewDate, setRenewDate] = useState(false);
  const [postCounts, setPostCounts] = useState({});
  const [videoCounts, setVideoCounts] = useState({});
  const [reelCounts, setReelCounts] = useState({});

  const serviceOptions = {
    website: ["Static", "Dynamic", "E-Commerce", "Custom", "UI/Ux Design"],
    SMO: ["Facebook", "Instagram", "Linkedin", "Youtube", "X/Twitter"],
    Paid_Media: ["Social Media Ads", "Youtube Ads", "Google Ads"],
    SEO: [],
    GMB: [],
    Email_Marketing_Service: [],
    Mobile_Application: ["Android Application", "IOS Application"],
    Game_App_Development: [],
    Cyber_Security: [],
    OTT_Development: [],
    API_Integration: ["Whatsapp API", "AI Tools API", "3rd API Integration"],
    Event_And_Exhibition_Management: [
      "Celebrity Endorsment",
      "Event Exhibition Management",
      "Exhibition Management",
    ],
    PR_Management: ["News Publication", "Press Release"],
    Advertisement: ["Auto RAP", "Telecast", "Broadcast", "3D Ads"],
    Multi_Media_Graphic: [
      "Logo Design",
      "Brochure Design",
      "Company Profile Design",
      "Animated Explainer Video",
      "Flipbook Designing",
    ],
  };

  return (
    <div>
      {/* Header */}
      <div className="h-20 flex justify-between items-center border-b fixed top-0 w-full bg-white left-0 shadow-sm shadow-slate-400 px-6 z-20">
        <div>
          <img className="h-16 w-60" src={logo} alt="logo" />
        </div>
        <div className="text-2xl font-bold text-salesmain">
          SALES DEPARTMENT
        </div>
        <div className="w-80 text-2xl text-salesmain font-bold relative">
          <span className="animate-scroll absolute top-[-13px]">USERNAME</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-salesSidebar w-60 h-[calc(100vh-5rem)] fixed top-20 left-0 flex flex-col text-start z-10 shadow-lg">
          <div
            onClick={() => setActiveSection("existing")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-salesmain text-white ${
              activeSection === "existing"
                ? "bg-salesmain"
                : "bg-salesmainlight"
            }`}
          >
            Existing Projects
          </div>
          <div
            onClick={() => setActiveSection("new")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 cursor-pointer hover:bg-salesmain text-white ${
              activeSection === "new" ? "bg-salesmain" : "bg-salesmainlight"
            }`}
          >
            Add New Project
          </div>
          <div
            onClick={() => setActiveSection("renewals")}
            className={`py-1 mt-4 mx-4 rounded-md text-md pl-2 pr-4 cursor-pointer hover:bg-salesmain text-white ${
              activeSection === "renewals"
                ? "bg-salesmain"
                : "bg-salesmainlight"
            }`}
          >
            Renewals{" "}
            {projects.length > 0 ? (
              <>
                <span className="bg-red-600 ml-20 text-xs py-1 px-2 rounded-[100%]">
                  {projects.length}
                </span>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="py-1 mt-auto mb-4 mx-4 rounded-md bg-salesmainlight text-md pl-2 cursor-pointer hover:bg-salesmain flex items-center justify-center gap-[6px] text-white">
            <IoMdLogOut className="text-xl" /> Logout
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-60 mt-20 h-[calc(100vh-5rem)] overflow-y-auto flex-1 p-6 bg-gray-100">
          {/* Existing Projects Section */}
          {activeSection === "existing" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-6xl mx-auto">
              <h2 className="text-[28px] font-bold text-salesmain mb-1 text-center">
                Existing Projects
              </h2>
              {projects.length === 0 ? (
                <p className="text-center text-gray-500">
                  No projects added yet.
                </p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                  {projects.map((proj, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-salesmain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-salesmain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-salesmain">
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
                          <span className="font-semibold text-salesmain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-blue-100 text-salesmain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => setModalData(proj)}
                        className="self-start px-5 py-2 bg-salesmain text-white text-sm font-semibold rounded-lg hover:bg-salesHover transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Add New Project Section */}
          {activeSection === "new" && (
            <div className="p-8 bg-white shadow-lg rounded-xl max-w-6xl mx-auto border border-gray-200">
              <h2 className="text-3xl font-extrabold text-center text-salesmain mb-6">
                Add New Project
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());

                  const logoFile = formData.get("company_logo");
                  data.logoURL =
                    logoFile && logoFile.size > 0
                      ? URL.createObjectURL(logoFile)
                      : "";

                  data.PI = formData.get("PI");
                  data.service = selectedService;
                  data.checklist = Array.from(formData.getAll("checklist"));

                  if (["SMO"].includes(selectedService)) {
                    const counts = {};
                    const videoCounts = {};
                    const reelCounts = {};

                    for (let item of data.checklist) {
                      const postCountKey = `post_count_${item}`;
                      const videoCountKey = `video_count_${item}`;
                      const reelCountKey = `reel_count_${item}`;

                      const postCount = formData.get(postCountKey);
                      const videoCount = formData.get(videoCountKey);
                      const reelCount = formData.get(reelCountKey);

                      if (postCount) counts[item] = postCount;
                      if (videoCount) videoCounts[item] = videoCount;
                      if (reelCount) reelCounts[item] = reelCount;
                    }

                    data.postCounts = counts;
                    data.videoCounts = videoCounts;
                    data.reelCounts = reelCounts;
                  }

                  if (serviceOptions[selectedService]?.length > 0) {
                    const checklistItems = formData.getAll("checklist");
                    if (checklistItems.length < 1) {
                      alert("Please select at least one checklist item.");
                      return;
                    }
                  }

                  setProjects([data, ...projects]);
                  setActiveSection("existing");
                }}
              >
                {/* Company Details */}
                <fieldset className="border border-salesmain bg-gray-50 p-6 rounded-xl mb-6 shadow-sm">
                  <legend className="text-salesmain text-xl font-semibold px-3">
                    Company Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        label: "Company Name",
                        name: "company_name",
                        type: "text",
                      },
                      {
                        label: "Company Address",
                        name: "company_address",
                        type: "text",
                      },
                      {
                        label: "Client Email",
                        name: "client_email",
                        type: "email",
                      },
                      {
                        label: "Client Phone Number",
                        name: "client_phone_number",
                        type: "tel",
                        pattern: "[0-9]{10}",
                      },
                      {
                        label: "Client Name",
                        name: "client_name",
                        type: "text",
                      },
                      {
                        label: "Website Link",
                        name: "website_link",
                        type: "url",
                      },
                    ].map(({ label, name, type, pattern }) => (
                      <div key={name}>
                        <label className="block text-gray-700 font-medium mb-1">
                          {label}:
                        </label>
                        <input
                          type={type}
                          name={name}
                          required={type !== "url"}
                          pattern={pattern}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salesmain transition"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Company Logo:
                      </label>
                      <input
                        type="file"
                        name="company_logo"
                        accept="image/*"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Attach PI:
                      </label>
                      <input
                        type="file"
                        name="PI"
                        accept="application/pdf"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Contract Details */}
                <fieldset className="border border-salesmain bg-gray-50 p-6 rounded-xl shadow-sm">
                  <legend className="text-salesmain text-xl font-semibold px-3">
                    Contract Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        label: "Business Type",
                        name: "business_type",
                        options: ["Product", "Service"],
                      },
                      {
                        label: "Industry Type",
                        name: "industry_type",
                        options: [
                          "Manufacturer",
                          "Supplier",
                          "Trader",
                          "Service Provider",
                          "Importer",
                          "Exporter",
                        ],
                      },
                      {
                        label: "Client Priority",
                        name: "client_priority",
                        options: [
                          "Prime Client",
                          "Super High Value",
                          "High Value",
                          "Mid Value",
                          "Low Value",
                          "Super Low Value",
                        ],
                      },
                      {
                        label: "Client Origin",
                        name: "client_origin",
                        options: ["Domestic", "International"],
                      },
                    ].map(({ label, name, options }) => (
                      <div key={name}>
                        <label className="block text-gray-700 font-medium mb-1">
                          {label}:
                        </label>
                        <select
                          name={name}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salesmain transition"
                        >
                          {options.map((opt) => (
                            <option value={opt} key={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}

                    {[
                      {
                        label: "Contract Date",
                        name: "contract_date",
                        type: "date",
                      },
                      {
                        label: "Contract Duration",
                        name: "contract_duration",
                        type: "text",
                      },
                      { label: "Renewal Date", name: "renewal", type: "date" },
                      { label: "Amount", name: "amount", type: "text" },
                      {
                        label: "Sales Person Name",
                        name: "Sales_person",
                        type: "text",
                      },
                    ].map(({ label, name, type }) => (
                      <div key={name}>
                        <label className="block text-gray-700 font-medium mb-1">
                          {label}:
                        </label>
                        <input
                          type={type}
                          name={name}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salesmain transition"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Service Selection */}
                  <div className="mt-6">
                    <label className="block text-lg font-bold text-salesmain mb-2">
                      Select a Service:
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {Object.keys(serviceOptions).map((service) => (
                        <label
                          key={service}
                          className="flex items-center space-x-2 cursor-pointer text-gray-700"
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service}
                            checked={selectedService === service}
                            onChange={(e) => {
                              setSelectedService(e.target.value);
                              setPostCounts({});
                            }}
                            className="accent-salesmain"
                          />
                          <span>{service.replace(/_/g, " ")}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Checklist and Dynamic Counts */}
                  {selectedService && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-salesmain mb-3 capitalize">
                        {selectedService.replace(/_/g, " ")}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["SMO"].includes(selectedService)
                          ? serviceOptions[selectedService].map(
                              (item, index) => (
                                <li
                                  key={index}
                                  className="bg-white p-4 rounded-md border border-gray-300 shadow-sm"
                                >
                                  <label className="flex items-center gap-2 text-gray-800 font-medium">
                                    <input
                                      type="checkbox"
                                      id={item}
                                      name="checklist"
                                      value={item}
                                      onChange={(e) => {
                                        const updatedPosts = { ...postCounts };
                                        const updatedVideos = {
                                          ...videoCounts,
                                        };
                                        const updatedReels = { ...reelCounts };

                                        if (e.target.checked) {
                                          updatedPosts[item] =
                                            updatedPosts[item] || "";
                                          updatedVideos[item] =
                                            updatedVideos[item] || "";
                                          updatedReels[item] =
                                            updatedReels[item] || "";
                                        } else {
                                          delete updatedPosts[item];
                                          delete updatedVideos[item];
                                          delete updatedReels[item];
                                        }

                                        setPostCounts(updatedPosts);
                                        setVideoCounts(updatedVideos);
                                        setReelCounts(updatedReels);
                                      }}
                                      className="accent-salesmain"
                                    />
                                    {item}
                                  </label>
                                  {postCounts[item] !== undefined && (
                                    <div className="mt-2 space-y-2 text-sm text-gray-700">
                                      <div>
                                        <label>Weekly Post Count:</label>
                                        <input
                                          type="number"
                                          name={`post_count_${item}`}
                                          value={postCounts[item]}
                                          onChange={(e) =>
                                            setPostCounts({
                                              ...postCounts,
                                              [item]: e.target.value,
                                            })
                                          }
                                          className="w-24 ml-2 px-2 py-1 border border-gray-300 rounded-md"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label>Weekly Video Count:</label>
                                        <input
                                          type="number"
                                          name={`video_count_${item}`}
                                          value={videoCounts[item]}
                                          onChange={(e) =>
                                            setVideoCounts({
                                              ...videoCounts,
                                              [item]: e.target.value,
                                            })
                                          }
                                          className="w-24 ml-2 px-2 py-1 border border-gray-300 rounded-md"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label>Weekly Reel Count:</label>
                                        <input
                                          type="number"
                                          name={`reel_count_${item}`}
                                          value={reelCounts[item]}
                                          onChange={(e) =>
                                            setReelCounts({
                                              ...reelCounts,
                                              [item]: e.target.value,
                                            })
                                          }
                                          className="w-24 ml-2 px-2 py-1 border border-gray-300 rounded-md"
                                          required
                                        />
                                      </div>
                                    </div>
                                  )}
                                </li>
                              )
                            )
                          : serviceOptions[selectedService].map(
                              (item, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    id={item}
                                    name="checklist"
                                    value={item}
                                    className="accent-salesmain"
                                  />
                                  <label
                                    htmlFor={item}
                                    className="text-gray-700 font-medium"
                                  >
                                    {item}
                                  </label>
                                </li>
                              )
                            )}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <label className="block font-medium text-gray-700 mb-2">
                      Service Brief (Max 250 words):
                    </label>
                    <input
                      type="text"
                      name="brief"
                      required
                      pattern=".{250,}"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-salesmain focus:outline-none"
                    />
                  </div>
                </fieldset>

                <div className="text-center">
                  <input
                    type="submit"
                    value="Add"
                    className="bg-salesmain hover:bg-salesHover text-white py-2 px-6 rounded-lg mt-6 text-lg font-semibold transition shadow-md hover:shadow-lg"
                  />
                </div>
              </form>
            </div>
          )}

          {activeSection === "renewals" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-6xl mx-auto">
              <h2 className="text-[28px] font-bold text-salesmain mb-6 text-center">
                Upcoming Renewals
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {projects.map((proj, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-salesmain">
                          {proj.company_name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="text-[15px] text-gray-700 space-y-1">
                        <p>
                          <span className="font-semibold text-salesmain">
                            Client:
                          </span>{" "}
                          {proj.client_name}
                        </p>

                        <p>
                          <span className="font-semibold text-salesmain">
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
                          <span className="font-semibold text-salesmain">
                            Service:
                          </span>
                          <span className="px-3 py-1 text-xs bg-blue-100 text-salesmain rounded-full capitalize font-semibold">
                            {proj.service.replace(/_/g, " ")}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex justify-start gap-2">
                        <button
                          onClick={() => setRenewDate(true)}
                          className="px-4 py-2 bg-salesmain text-white rounded-full text-sm font-semibold hover:bg-salesHover transition"
                        >
                          Renew
                        </button>

                        <button
                          onClick={() => setModalData(proj)}
                          className="px-4 py-2 bg-salesmain text-white rounded-full text-sm font-semibold hover:bg-salesHover transition"
                        >
                          View Details
                        </button>
                      </div>
                      {renewDate && (
                        <div className=" bg-[#f8fafc] border border-gray-300 rounded-xl p-4 shadow-inner">
                          <label className="block text-sm font-semibold text-salesmain mb-2">
                            Set New Renewal Date:
                          </label>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <input
                              type="date"
                              required
                              className="p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-salesmain"
                            />
                            <button
                              onClick={() => setRenewDate(false)}
                              className="bg-salesmain hover:bg-salesHover text-white px-5 py-2 rounded-md text-sm font-medium transition duration-200"
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
              <h2 className="text-3xl font-extrabold text-salesmain tracking-tight">
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
                      <p className="text-sm font-semibold text-salesmain">
                        {item.label}
                      </p>
                      <p className="text-gray-800">{item.value}</p>
                    </div>
                  )
              )}

              {/* Website block */}
              {modalData.website_link && (
                <div>
                  <p className="text-sm font-semibold text-salesmain">
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
                  <p className="text-sm font-semibold text-salesmain">
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
                <h3 className="text-lg font-semibold text-salesmain mb-3">
                  Selected Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {modalData.checklist.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-full border border-salesmain/30 bg-salesmainlight text-salesmain px-4 py-1 text-[14px] font-medium flex items-center gap-1"
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
                <h3 className="text-lg font-semibold text-salesmain">
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
                  <h3 className="text-md font-semibold text-salesmain mb-2">
                    PI Document
                  </h3>
                  <a
                    href={URL.createObjectURL(modalData.PI)}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-salesmain hover:bg-salesHover text-white px-5 py-2 text-sm font-medium transition"
                  >
                    View PDF
                  </a>
                </div>
              )}
              {modalData.logoURL?.trim() && (
                <div>
                  <h3 className="text-md font-semibold text-salesmain mb-2">
                    Logo
                  </h3>
                  <a
                    href={modalData.logoURL}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-salesmain hover:bg-salesHover text-white px-5 py-2 text-sm font-medium transition"
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

export default SalesDashboard;
