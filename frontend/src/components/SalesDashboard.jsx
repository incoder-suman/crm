import { useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdLogOut } from "react-icons/io";

const SalesDashboard = () => {
  const [activeSection, setActiveSection] = useState("existing");
  const [selectedService, setSelectedService] = useState("");

  const serviceOptions = {
    website: ["Informative", "Dynamic", "E-Commerce"],
    SMO: ["Facebook", "Instagram", "Linkedin", "YouTube", "Pinterest", "X/Twitter", "Thread"],
    PaidMedia: ["Facebook", "Instagram", "Linkedin", "YouTube", "Twitter", "Google ads"],
    SEO:[],
    GMB:[],
  };

  return (
    <div>
      {/* Header */}
      <div className="h-20 flex justify-between items-center border-b fixed top-0 w-full bg-white left-0 shadow-sm shadow-slate-400 px-6 z-20">
        <div>
          <img className="h-16 w-60" src={logo} alt="logo" />
        </div>
        <div className="text-2xl font-bold text-[#766aad]">
          SALES DEPARTMENT
        </div>
        <div className="w-80 text-2xl text-[#28378f] font-bold relative">
          <span className="animate-scroll absolute top-[-13px]">USERNAME</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-[#28378f] w-72 h-[calc(100vh-5rem)] fixed top-20 left-0 flex flex-col text-center z-10 shadow-lg">
          <div
            onClick={() => setActiveSection("existing")}
            className={`py-4 border-b border-white text-xl font-semibold cursor-pointer hover:bg-[#4056c1] text-white ${
              activeSection === "existing" ? "bg-[#4056c1]" : ""
            }`}
          >
            Existing Projects
          </div>
          <div
            onClick={() => setActiveSection("new")}
            className={`py-4 border-b border-white text-xl font-semibold cursor-pointer hover:bg-[#4056c1] text-white ${
              activeSection === "new" ? "bg-[#4056c1]" : ""
            }`}
          >
            Add New Project
          </div>
          <div className="py-4 mt-auto border-t border-white text-xl font-semibold cursor-pointer hover:bg-[#4056c1] flex items-center justify-center text-white">
            <IoMdLogOut className="text-2xl mr-2" />
            Logout
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-72 mt-20 h-[calc(100vh-5rem)] overflow-y-auto flex-1 p-6 bg-gray-100">
          {activeSection === "existing" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Existing Projects
              </h2>
              <p>List of existing projects will be shown here.</p>
            </div>
          )}

          {activeSection === "new" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-[#28378f] mb-1 text-center">
                Add New Project
              </h2>

              <form>
                {/* Company Details */}
                <fieldset className="border-[#28378f] border pt-3 pb-5 px-6 rounded-md shadow mb-3">
                  <legend className="text-[#28378f] text-2xl font-bold px-2">
                    Company Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                      <label className="block font-medium">
                        Company Name:
                      </label>
                      <input
                        type="text" name="company_name" id="company_name"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">Address:</label>
                      <input
                        type="text" name="company_address" id="company_address"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">Email:</label>
                      <input
                        type="email" name="email" id="email"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">
                        Phone Number:
                      </label>
                      <input
                        type="tel" name="phone_number" id="phone_number"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">
                        Customer Name:
                      </label>
                      <input
                        type="text" name="customer_name" id="customer_name"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">
                        Website Link:
                      </label>
                      <input
                        type="url" name="website_link" id="website_link"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">Logo:</label>
                      <input
                        type="file" name="company_logo" id="company_logo"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Contract Details */}
                <fieldset className="border-[#28378f] border pt-3 pb-5 px-6 rounded-md shadow">
                  <legend className="text-[#28378f] text-2xl font-bold px-2">
                    Contract Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium">
                        Industry Type:
                      </label>
                      <select className="w-full p-2 border border-gray-400 rounded-md" name="industry_type" id="industry_type">
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-medium">
                        Date of Contract:
                      </label>
                      <input
                        type="date" name="contract_date" id="contract_date"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">
                        Duration of Contract:
                      </label>
                      <input
                        type="text" name="contract_duration" id="contract_duration"
                        placeholder="e.g., 6 months"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">Renewal Date:</label>
                      <input
                        type="date" name="renewal" id="renewal"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium">Amount:</label>
                      <input
                        type="text" name="amount" id="amount"
                        placeholder="₹10,000"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                    </div>
                  </div>

                  {/* Services & Checklist */}
                  <div className="mt-4">
                    <label className="block text-[#28378f] text-lg font-bold mb-3">
                      Select a Service:
                    </label>
                    <div className="flex gap-3">
                      {Object.keys(serviceOptions).map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-[1px] text-gray-800 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="service" id="service"
                            value={service}
                            checked={selectedService === service}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="accent-[#28378f] cursor-pointer"
                          />
                          <span className="capitalize">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {selectedService && (
                    <div className="mt-4">
                      <h3 className="text-md font-semibold text-[#28378f] mb-2 capitalize">
                        {selectedService}
                      </h3>
                      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {serviceOptions[selectedService].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={item}
                              name={item}
                              className="accent-[#28378f]"
                            />
                            <label htmlFor={item} className="text-gray-700">
                              {item}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-3">
                      <label className="block font-medium">Brief:</label>
                      <input
                        type="text" name="amount" id="amount"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                      />
                  </div>
                </fieldset>
               <div className="text-center">
                 <input type="submit" value="Add"  className="bg-[#28378f] text-white mt-4 py-2 px-5 rounded-md text-lg cursor-pointer"/>
               </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
