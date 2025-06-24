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
        <div className="bg-salesSidebar w-72 h-[calc(100vh-5rem)] fixed top-20 left-0 flex flex-col text-start z-10 shadow-lg">
          <div
            onClick={() => setActiveSection("existing")}
            className={`py-4 border-b border-white text-xl font-semibold pl-8 cursor-pointer hover:bg-salesmain text-white ${
              activeSection === "existing" ? "bg-salesmain" : ""
            }`}
          >
            Existing Projects
          </div>
          <div
            onClick={() => setActiveSection("new")}
            className={`py-4 border-b border-white text-xl font-semibold pl-8 cursor-pointer hover:bg-salesmain text-white ${
              activeSection === "new" ? "bg-salesmain" : ""
            }`}
          >
            Add New Project
          </div>
          <div
            onClick={() => setActiveSection("renewals")}
            className={`py-4 border-b border-white text-xl font-semibold flex justify-between px-8 cursor-pointer hover:bg-salesmain text-white ${
              activeSection === "renewals" ? "bg-salesmain" : ""
            }`}
          >
            Renewals{" "}
            {projects.length > 0 ? (
              <>
                <span className="bg-red-800 ml-5 text-sm py-1 px-2 rounded-[100%]">
                  {projects.length}
                </span>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="py-4 mt-auto border-t border-white text-xl font-semibold cursor-pointer hover:bg-salesmain flex items-center justify-center text-white">
            <IoMdLogOut className="text-2xl mr-2" /> Logout
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-72 mt-20 h-[calc(100vh-5rem)] overflow-y-auto flex-1 p-6 bg-gray-100">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {projects.map((proj, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white border border-gray-300 rounded-xl shadow-custom-grey hover:shadow-xl cursor-pointer transition-all duration-300 text-center gap-5"
                    >
                      {/* {proj.logoURL && (
                          <img src={proj.logoURL} alt="" className="h-16 w-16 object-contain mb-3 rounded-full border border-gray-200" />
                        )} */}
                      <div>
                        <h3 className="text-[25px] font-semibold text-salesmain mb-1">
                          {proj.company_name}
                        </h3>
                        <p className="text-base font-semibold text-salesmain mb-1">
                          Client Name: {proj.client_name}
                        </p>
                        <p className="text-base font-semibold text-salesmain mb-1">
                          Assigned To:{" "}
                          {proj.assigned ? proj.assigned : <><span className="text-salesSidebar">Pending...</span></>}
                        </p>
                        <p className="font-semibold text-salesSidebar">
                          Service: {proj.service.replace(/_/g, " ")}
                        </p>
                      </div>
                      <button
                        onClick={() => setModalData(proj)}
                        className="px-4 py-2 bg-salesmain text-white rounded-full text-sm font-semibold hover:bg-salesHover transition mt-2"
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
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-salesmain mb-1 text-center">
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
                  
                  if (["SMO", "Paid_Media"].includes(selectedService)) {
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
                
                  // Validate checklist items before proceeding
                  if (serviceOptions[selectedService]?.length > 0) {
                    const checklistItems = formData.getAll("checklist");
                    if (checklistItems.length < 1) {
                      alert("Please select at least one checklist item.");
                      return;
                    }
                  }
                
                  // Add the new project data to existing projects
                  setProjects([data, ...projects]);
                  setActiveSection("existing");
                }}
                
              >
                {/* Company Details */}
                <fieldset className="border-salesmain border pt-3 pb-5 px-6 rounded-md shadow mb-3">
                  <legend className="text-salesmain text-2xl font-bold px-2">
                    Company Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                      <label>Company Name:</label>
                      <input
                        type="text"
                        name="company_name"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Company Address:</label>
                      <input
                        type="text"
                        name="company_address"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Client Email:</label>
                      <input
                        type="email"
                        name="client_email"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Client Phone Number:</label>
                      <input
                        type="tel"
                        name="client_phone_number"
                        required
                        pattern="[0-9]{10}"
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Client Name:</label>
                      <input
                        type="text"
                        name="client_name"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Website Link:</label>
                      <input
                        type="url"
                        name="website_link"
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Company Logo:</label>
                      <input
                        type="file"
                        name="company_logo"
                        accept="image/*"
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Attach PI:</label>
                      <input
                        type="file"
                        name="PI"
                        accept="application/pdf"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Contract Details */}
                <fieldset className="border-salesmain border pt-3 pb-5 px-6 rounded-md shadow">
                  <legend className="text-salesmain text-2xl font-bold px-2">
                    Contract Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label>Business Type:</label>
                      <select
                        name="business_type"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      >
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                      </select>
                    </div>
                    <div>
                      <label>Industry Type:</label>
                      <select
                        name="industry_type"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      >
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Supplier">Supplier</option>
                        <option value="Trader">Trader</option>
                        <option value="Service Provider">Service Provider</option>
                        <option value="Importer">Importer</option>
                        <option value="Exporter">Exporter</option>
                      </select>
                    </div>
                    <div>
                      <label>Client Priority:</label>
                      <select
                        name="client_priority"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      >
                        <option value="Prime Client">Prime Client</option>
                        <option value="Super High Value">Super High Value</option>
                        <option value="High Value">High Value</option>
                        <option value="Mid Value">Mid Value</option>
                        <option value="Low Value">Low Value</option>
                        <option value="Super Low Value">Super Low Value</option>
                      </select>
                    </div>
                    <div>
                      <label>Client Origin:</label>
                      <select
                        name="client_origin"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      >
                        <option value="Domestic">Domestic</option>
                        <option value="International">International</option>
                      </select>
                    </div>
                    <div>
                      <label>Contract Date:</label>
                      <input
                        type="date"
                        name="contract_date"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Contract Duration:</label>
                      <input
                        type="text"
                        name="contract_duration"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Renewal Date:</label>
                      <input
                        type="date"
                        name="renewal"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Amount:</label>
                      <input
                        type="text"
                        name="amount"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label>Sales Person Name:</label>
                      <input
                        type="text"
                        name="Sales_person"
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-salesmain text-lg font-bold mb-3">
                      Select a Service:
                    </label>
                    <div className="flex gap-3 flex-wrap">
                      {Object.keys(serviceOptions).map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-1 text-gray-800 cursor-pointer"
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
                            className="accent-salesmain cursor-pointer"
                          />
                          <span className="capitalize">
                            {service.replace(/_/g, " ")}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {selectedService && (
                    <div className="mt-4">
                      <h3 className="text-md font-semibold text-salesmain mb-2 capitalize">
                        {selectedService.replace(/_/g, " ")}
                      </h3>
                      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {["SMO", "Paid_Media"].includes(selectedService)
                          ? serviceOptions[selectedService].map(
                              (item, index) => (
                                <li
                                  key={index}
                                  className="col-span-2 flex flex-col gap-1"
                                >
                                  <label className="flex items-center gap-2">
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
                                    <span className="text-gray-700">
                                      {item}
                                    </span>
                                  </label>

                                  {postCounts[item] !== undefined && (
                                    <div className="ml-6 flex flex-col gap-1">
                                      <label className="text-sm text-gray-600">
                                        Weekly Post Count for {item}:
                                      </label>
                                      <input
                                        type="number"
                                        name={`post_count_${item}`}
                                        min="0"
                                        required
                                        value={postCounts[item]}
                                        onChange={(e) =>
                                          setPostCounts({
                                            ...postCounts,
                                            [item]: e.target.value,
                                          })
                                        }
                                        className="w-24 p-1 border border-gray-400 rounded-md"
                                      />

                                      <label className="text-sm text-gray-600 mt-2">
                                        Weekly Video Count for {item}:
                                      </label>
                                      <input
                                        type="number"
                                        name={`video_count_${item}`}
                                        min="0"
                                        required
                                        value={videoCounts[item]}
                                        onChange={(e) =>
                                          setVideoCounts({
                                            ...videoCounts,
                                            [item]: e.target.value,
                                          })
                                        }
                                        className="w-24 p-1 border border-gray-400 rounded-md"
                                      />

                                      <label className="text-sm text-gray-600 mt-2">
                                        Weekly Reel Count for {item}:
                                      </label>
                                      <input
                                        type="number"
                                        name={`reel_count_${item}`}
                                        min="0"
                                        required
                                        value={reelCounts[item]}
                                        onChange={(e) =>
                                          setReelCounts({
                                            ...reelCounts,
                                            [item]: e.target.value,
                                          })
                                        }
                                        className="w-24 p-1 border border-gray-400 rounded-md"
                                      />
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
                                    className="text-gray-700"
                                  >
                                    {item}
                                  </label>
                                </li>
                              )
                            )}
                      </ul>
                    </div>
                  )}

                  <div className="mt-3">
                    <label className="block font-medium">Service Brief:</label>
                    <input
                      type="text"
                      name="brief"
                      placeholder="Max 250 Words"
                      pattern=".{250,}"
                      className="w-full p-2 border border-gray-400 rounded-md"
                      required
                    />
                  </div>
                </fieldset>

                <div className="text-center">
                  <input
                    type="submit"
                    value="Add"
                    className="bg-salesmain hover:bg-salesHover text-white mt-4 py-2 px-5 rounded-md text-lg cursor-pointer"
                  />
                </div>
              </form>
            </div>
          )}
          {activeSection === "renewals" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-salesmain mb-6 text-center">
                Upcoming Renewals
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-white to-[#f2f6f9] border border-gray-200 shadow-custom-grey rounded-2xl p-4 hover:shadow-xl text-center cursor-pointer transition-all duration-300">
                      <h2 className="text-[25px] font-semibold mb-1 text-salesmain">
                        {proj.company_name}
                      </h2>
                      <p className="text-base font-semibold text-salesmain mb-1">
                        Sales Person: {proj.Sales_person}
                      </p>
                      <p className="font-semibold text-salesSidebar">
                        Assigned To: {proj.Assigned}
                      </p>

                      {/* Buttons inside the card but don't trigger modal */}
                      <div className="flex justify-center gap-2 mt-3">
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
                        <div className="mt-5 bg-[#f8fafc] border border-gray-300 rounded-xl p-4 shadow-inner">
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
                  </div>
                ))}
              </div>
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
              <h2 className="text-3xl font-bold text-salesmain tracking-wide">
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
                <strong>Client Origin:</strong> {modalData.client_origin}
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
                <p className="font-semibold text-lg text-salesmain mb-2">
                  Checklist
                </p>
                <div className="flex flex-wrap gap-3">
                  {modalData.checklist.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#e2f3f3] text-salesmain px-3 py-2 rounded-xl text-base font-medium shadow flex flex-col items-center"
                    >
                      <span>{item}</span>
                      {/* Show post count if available */}
                      {modalData.postCounts && modalData.postCounts[item] && (
                        <span className="font-semibold text-sm text-salesmain mb-2">
                          Weekly Posts: {modalData.postCounts[item]}
                        </span>
                      )}

                      {/* Show reel count if available */}
                      {modalData.reelCounts && modalData.reelCounts[item] && (
                        <span className="font-semibold text-sm text-salesmain mb-2">
                          Weekly Reels: {modalData.reelCounts[item]}
                        </span>
                      )}

                      {/* Show video count if available */}
                      {modalData.videoCounts && modalData.videoCounts[item] && (
                        <span className="font-semibold text-sm text-salesmain mb-2">
                          Weekly Videos: {modalData.videoCounts[item]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/*  Brief */}
            {modalData.brief && (
              <div className="mt-6">
                <p className="font-semibold text-lg text-salesmain mb-2">
                  Service Brief
                </p>
                <p className="text-base text-gray-700">{modalData.brief}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
              {/*  PI Document */}
              {modalData.PI && (
                <div className="">
                  <p className="font-semibold text-lg text-salesmain mb-2">
                    PI Document
                  </p>
                  <a
                    href={URL.createObjectURL(modalData.PI)}
                    target="_blank"
                    className="inline-block bg-salesmain hover:bg-salesHover text-white px-5 py-2 rounded-lg transition duration-300 text-sm"
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
                    <p className="font-semibold text-lg text-salesmain mb-2">
                      Logo
                    </p>
                    <a
                      href={modalData.logoURL}
                      target="_blank"
                      className="inline-block bg-salesmain hover:bg-salesHover text-white px-5 py-2 rounded-lg transition duration-300 text-sm"
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
