import React from "react";
import CustomDropdown from "../components/BootstrapDropdown/CustomDropdown";
import TextField from "../components/BootstrapTextField/BootstrapTextfield";

const HomePage = () => {
  return (
    <div>
      <TextField name="test" id="test" label="name iska" required />
      <CustomDropdown data={[]} name="wow1" />
    </div>
  );
};

export default HomePage;
