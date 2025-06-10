  
import { useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdLogOut } from "react-icons/io";

const SalesDashboard = () => {
  const [activeSection, setActiveSection] = useState("existing");
  const [selectedService, setSelectedService] = useState("");
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState(null);

  const serviceOptions = {
  website: ["Informative","Dynamic","E-Commerce"],
  SMO: ["Facebook","Instagram","Linkedin","Youtube","Pinterest","X/Twitter","Thread"],
  PaidMedia: ["Facebook","Instagram","Linkedin","Youtube","Twitter","Google Ads"],
  SEO: [],
  GMB: [],
  };

  return (
    <div>
      {/* Header */}
      <div className="h-20 flex justify-between items-center border-b fixed top-0 w-full bg-white left-0 shadow-sm shadow-slate-400 px-6 z-20">
        <div><img className="h-16 w-60" src={logo} alt="logo" /></div>
        <div className="text-2xl font-bold text-[#766aad]">SALES DEPARTMENT</div>
        <div className="w-80 text-2xl text-[#28378f] font-bold relative">
          <span className="animate-scroll absolute top-[-13px]">USERNAME</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-[#28378f] w-72 h-[calc(100vh-5rem)] fixed top-20 left-0 flex flex-col text-center z-10 shadow-lg">
          <div onClick={() => setActiveSection("existing")} className={`py-4 border-b border-white text-xl font-semibold cursor-pointer hover:bg-[#4056c1] text-white ${activeSection === "existing" ? "bg-[#4056c1]" : ""}`}>Existing Projects</div>
          <div onClick={() => setActiveSection("new")} className={`py-4 border-b border-white text-xl font-semibold cursor-pointer hover:bg-[#4056c1] text-white ${activeSection === "new" ? "bg-[#4056c1]" : ""}`}>Add New Project</div>
          <div className="py-4 mt-auto border-t border-white text-xl font-semibold cursor-pointer hover:bg-[#4056c1] flex items-center justify-center text-white">
            <IoMdLogOut className="text-2xl mr-2" />
            Logout
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-72 mt-20 h-[calc(100vh-5rem)] overflow-y-auto flex-1 p-6 bg-gray-100">
          {/* Existing Projects Section */}
          {activeSection === "existing" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-6xl mx-auto">
              <h2 className="text-[28px] font-bold text-[#28378f] mb-1 text-center">Existing Projects</h2>
              {projects.length === 0 ? (
                <p className="text-center text-gray-500">No projects added yet.</p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {projects.map((proj, index) => (
                    <div key={index} className="p-4 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-evenly gap-5" onClick={() => setModalData(proj)}>
                      <div>
                        <img src={proj.logoURL} alt="logo" className="h-16 w-16 object-contain mb-3 rounded-full border border-gray-200" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#28378f] mb-1">{proj.company_name}</h3>
                        <a href={proj.website_link} className="text-blue-600 inline-block w-40 underline text-sm break-words" target="_blank" rel="noreferrer">{proj.website_link}</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Add New Project Section */}
          {activeSection === "new" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-[#28378f] mb-1 text-center">Add New Project</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());
                  data.logoURL = URL.createObjectURL(formData.get("company_logo"));
                  data.service = selectedService;
                  data.checklist = Array.from(formData.getAll("checklist")); 
                  setProjects([data, ...projects]);
                  setActiveSection("existing");
                }}
              >
                {/* Company Details */}
                <fieldset className="border-[#28378f] border pt-3 pb-5 px-6 rounded-md shadow mb-3">
                  <legend className="text-[#28378f] text-2xl font-bold px-2">Company Details</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                      <label>Company Name:</label>
                      <input type="text" name="company_name" required placeholder="eg. bharat bizmart" className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                   <div>
                    <label>Company Address:</label>
                     <input type="text" name="company_address" required placeholder="eg. H-3 Tower,netaji subhash place" className="w-full p-2 border border-gray-400 rounded-md" />
                   </div>
                    <div>
                      <label>Client Email:</label>
                      <input type="email" name="client_email" required placeholder="example@gmail.com" className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                    <div>
                      <label>Client Phone Number:</label>
                      <input type="tel" name="client_phone_number" required placeholder="+91 1233455678" className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                    <div>
                      <label>Client Name:</label>
                      <input type="text" name="client_name" required placeholder="eg. xyz" className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                    <div>
                      <label>Website Link:</label>
                      <input type="url" name="website_link" placeholder="Please provide website Link" className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                    <div>
                      <label>Attach PI:</label>
                      <input type="file" name="PI" required className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                  </div>
                </fieldset>

                {/* Contract Details */}
                <fieldset className="border-[#28378f] border pt-3 pb-5 px-6 rounded-md shadow">
                  <legend className="text-[#28378f] text-2xl font-bold px-2">Contract Details</legend>
                 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label>Business Type:</label>
                      <select name="business_type" className="w-full p-2 border border-gray-400 rounded-md">
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                      </select>
                    </div>
                    <div>
                       <label>Industry Type:</label>
                      <select name="industry_type" className="w-full p-2 border border-gray-400 rounded-md">
                        <option value="Product">Manufacturer</option>
                        <option value="Service">Engineer</option>
                      </select>
                    </div>
                    <div>
                       <label>Client Priority:</label>
                      <select name="client_priority" className="w-full p-2 border border-gray-400 rounded-md">
                        <option value="Product">High Value</option>
                        <option value="Service">Low Value</option>
                      </select>
                    </div>
                    <div>
                      <label>Contract Date:</label>
                      <input type="date" name="contract_date" required className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                   <div>
                    <label>Contract Duration</label>
                     <input type="text" name="contract_duration" required placeholder="eg. 6 month" className="w-full p-2 border border-gray-400 rounded-md" />
                   </div>
                    <div>
                      <label>Renewal Date:</label>
                      <input type="date" name="renewal" required className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                    <div>
                      <label>Amount:</label>
                      <input type="text" name="amount" required placeholder="eg. 10,000" className="w-full p-2 border border-gray-400 rounded-md" />
                    </div>
                  </div>

                  {/* Service & Checklist */}
                  <div className="mt-4">
                    <label className="block text-[#28378f] text-lg font-bold mb-3">Select a Service:</label>
                    <div className="flex gap-3 flex-wrap">
                      {Object.keys(serviceOptions).map((service) => (
                        <label key={service} className="flex items-center gap-1 text-gray-800 cursor-pointer">
                          <input type="radio" name="service" value={service} checked={selectedService === service} onChange={(e) => setSelectedService(e.target.value)} className="accent-[#28378f] cursor-pointer" />
                          <span className="capitalize">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {selectedService && (
                    <div className="mt-4">
                      <h3 className="text-md font-semibold text-[#28378f] mb-2 capitalize">{selectedService}</h3>
                      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {serviceOptions[selectedService].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <input type="checkbox" id={item} name="checklist" value={item} className="accent-[#28378f]" />
                            <label htmlFor={item} className="text-gray-700">{item}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-3">
                    <label className="block font-medium">Service Brief:</label>
                    <input type="text" name="brief" placeholder="Max 250 Words" pattern=".{250,}" className="w-full p-2 border border-gray-400 rounded-md" required />
                  </div>
                </fieldset>

                <div className="text-center">
                  <input type="submit" value="Add" className="bg-[#28378f] text-white mt-4 py-2 px-5 rounded-md text-lg cursor-pointer" />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Project Details */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30 flex justify-center items-center">
          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh] shadow-lg">
            <button className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-black" onClick={() => setModalData(null)}>×</button>
            <div className="text-center mb-4">
              <img src={modalData.logoURL} alt="logo" className="h-20 mx-auto rounded-full border mb-3" />
              <h2 className="text-2xl font-bold text-[#28378f]">{modalData.company_name}</h2>
            </div>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-around">
                <p><strong>Customer:</strong> {modalData.customer_name}</p>
                <p><strong>Phone:</strong> {modalData.phone_number}</p>
              </div>
              <div className="flex justify-around">
                <p><strong>Email:</strong> {modalData.email}</p>
                <p><strong>Address:</strong> {modalData.company_address}</p>
              </div>
              <div className="flex justify-around">
                <p><strong>Service:</strong> {modalData.service}</p>
                <p><strong>Industry Type:</strong> {modalData.industry_type}</p>
              </div>
              <div className="flex justify-around">
                <p><strong>Contract Date:</strong> {modalData.contract_date}</p>
                <p><strong>Duration:</strong> {modalData.contract_duration}</p>
              </div>
              <div className="flex justify-around">
                <p><strong>Renewal Date:</strong> {modalData.renewal}</p>
                <p><strong>Amount:</strong> {modalData.amount}</p>
              </div>
              <div>
                <p className="mt-10"><strong>Website:</strong> <a href={modalData.website_link} className="text-blue-600 underline" target="_blank" rel="noreferrer">{modalData.website_link}</a></p>
              </div>
              {modalData.checklist.length > 0 && (
                <>
                  <p><strong>Checklist:</strong></p>
                  <ul className="list-disc flex gap-5 list-inside pl-4 flex-wrap gap-2">
                    {modalData.checklist.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              <p><strong>Service Brief:</strong> {modalData.brief}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesDashboard;
