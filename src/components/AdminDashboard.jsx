import { useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdLogOut } from "react-icons/io";

const AdminDashboard = () => {
   const [activeSection, setActiveSection] = useState("existing");
  return (
    <div>


      <div className="h-20 flex justify-between items-center border-b fixed top-0 w-full bg-white left-0 shadow-sm shadow-slate-400 px-6 z-20">
              <div><img className="h-16 w-60" src={logo} alt="logo" /></div>
              <div className="text-2xl font-bold text-[#766aad]">Admin</div>
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
              
            </div>
          )}

          {/* Add New Project Section */}
          {activeSection === "new" && (
            <div className="p-6 shadow-custom-gray rounded-md bg-white max-w-5xl mx-auto">
              <h2 className="text-[28px] font-bold text-[#28378f] mb-1 text-center">Add New Project</h2>

              
            </div>
          )}
        </div>
      </div>



    </div>

    
  )
}

export default AdminDashboard