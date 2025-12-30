import React, { useState } from "react";
import axios from 'axios'
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z ]{2,}$/;
  const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  if (!emailRegex.test(email)) {
    alert("Please enter a valid type");
    return; // ⬅️ stop form submission
  }
  else if(!nameRegex.test(name)){
    alert("Please enter a valid type");
    return; // ⬅️ stop form submission
  }
  else if(!passwordRegex.test(password)){
    alert("pelase enter valid thing")
    return
  }

  alert("Form submitted successfully");

  // Clear form
  setName("");
  setEmail("");
  setPassword("");
};
async function axiCall(params) {
  //! exios calling better then fect function  
  params.preventDefault();
  let {data}=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  let {id,title}=data
  console.log(id,title);
  
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={axiCall}
        className="w-full max-w-md bg-gray-800 rounded-2xl p-8 shadow-xl space-y-5"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
