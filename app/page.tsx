import Image from "next/image";
import { Container } from "postcss";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-2/3 max-w-screen-lg flex bg-white shadow-lg">
          <div className="w-2/3 bg-white p-8">
            {/* Login Page */}
            <h1 className="text-xl font-bold mb-10 text-green-700">
              DAN<span className="text-blue-800">SHOBE</span>
            </h1>
            <div className="flex flex-col space-y-6">
              {/* Social Icons */}
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Facebook
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Google
                </button>

                <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                  LinkedIn
                </button>
              </div>
              {/* Or Use Email */}
              {/* <p className="text-center">Or use your email account</p> */}
              {/* Email and Password Inputs */}
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded px-4 py-2"
                />
              </div>
              {/* Remember Me and Forgot Password */}
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              {/* Login Button */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </div>
          </div>
          <div className="w-1/3 bg-slate-700 flex justify-center items-center">
            {/* Register Button */}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
