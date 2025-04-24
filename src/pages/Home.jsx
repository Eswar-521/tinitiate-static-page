// import React from "react";


// const Home = () => {
//   return (
//     <div>
//     home page
//     </div>
//   );
// };

// export default Home;


import React from "react";
import PhoneInputForm from "../components/PhoneInputForm"; // Import the PhoneInputForm component

const Home = () => {
  return (
    <div className="home-container">
      {/* Home Page Content */}
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="mb-8">Please enter your phone number below:</p>

      {/* Phone Input Form */}
      <div className="phone-input-container bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Enter Your Phone Number</h2>
        <PhoneInputForm />
      </div>
    </div>
  );
};

export default Home;
