import '../index.css'

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
        <div className="w-80 sm:w-96 h-96 text-center">
            <h3 className="text-[#28378f] text-3xl font-bold">Login Here</h3>
            <div className="mt-10 border-[1px] rounded-md border-slate-400 shadow-custom-gray p-6">
                <form action="">
                    <div class="input-wrapper">
                    <input type="text" required placeholder=" " />
                    <label>Username/Email</label>
                </div>

                 
                <div className="input-wrapper mt-5" >
                    <input type="text" required placeholder=" " />
                    <label>Password</label>
                </div>
                <div className='mt-5'><input className='px-8 py-2 cursor-pointer transition-all duration-300 bg-[#28378f] text-white text-[18px] rounded-md hover:bg-[#4861ee]' type="submit" value="Submit"/></div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login