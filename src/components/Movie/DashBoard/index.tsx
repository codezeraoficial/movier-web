import React, { useState } from "react";
import Main from "../design/layout/Main";
import DashboardContent from "../design/components/dashboardContent";


const DashBoard: React.FC = () => {
  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [section, setSection] = useState<number>(1);

  function handleNext() {
    if (section === 3) {
      setSection(section - 2);
    } else {
      setSection(section + 1);
    }
  }

  function handlePrevious() {
    if (section === 1) {
      setSection(section + 2);
    } else {
      setSection(section - 1);
    }
  }

  return (
    <Main>
      <div className="dashboard">
        <h1>Welcome, Leonardo!</h1>
        <DashboardContent
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          section={section}
        />
      </div>
    </Main>
  );
};

export default DashBoard;
