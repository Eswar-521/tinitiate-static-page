import React, { useState } from "react";

const PhoneDropdownForm = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <form className="flex flex-col space-y-4">
      <div className="flex items-center">
        <select
          className="border rounded-l-lg p-2"
          value={selectedCountryCode}
          onChange={handleCountryChange}
        >
          <option value="+1">+1 United States</option>
          <option value="+44">+44 United Kingdom</option>
          <option value="+91">+91 India</option>
          <option value="+61">+61 Australia</option>
        </select>

        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="border-t border-b border-r p-2 w-full"
          placeholder="Enter your phone number"
          pattern={`^${selectedCountryCode.replace('+', '')}\\d{10}$`}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PhoneDropdownForm;
