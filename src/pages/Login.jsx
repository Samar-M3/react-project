import React from "react";

function Login() {
  return (
    <div className=" h-screen flex justify-center items-center">

    <div className="flex justify-center items-center bg-black/50  w-full ">
    
      <form action="" className="border-2 h-100 w-100 mt-20 rounded-2xl bg-white">
        <h2 className="text-3xl text-center mb-16 mt-10">Login</h2>
        <div className='flex justify-center items-center '>
          <div>
        
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-200 p-3  rounded-2xl w-60"
              />{" "}
            <br />
            
            <input
              type="text"
              placeholder="E-mail"
              className="bg-gray-200 p-3  rounded-2xl mt-2 w-60"
              /> <br />
    <div className="mt-14 flex flex-col gap-2 justify-center ">
        <button className="bg-blue-400 pt-2 pb-2 pl-9 pr-9 rounded-2xl cursor-pointer">Login</button> 
        <p className="text-[15px] text-center">Don't have an account? <span className="text-blue-300">sign up</span></p>
    </div>
          </div>
        </div>
      </form>
    </div>
              </div>
  );
}

export default Login;
