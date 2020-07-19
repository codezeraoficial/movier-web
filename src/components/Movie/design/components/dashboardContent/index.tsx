import React from "react";
import IconPrevious from "../IconPrevious";
import CardContent from "../cardContent";
import IconNext from "../IconNext";

interface DashBoardContentProps{
  section: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const DashboardContent: React.FC<DashBoardContentProps> = ({section, handleNext, handlePrevious}) => {
  return (
    <div className="dashboard__content">
      <div className="iconPrevious" onClick={handlePrevious}>
        <IconPrevious section={section} />
      </div>
      <CardContent section={section} />
      <div className="iconNext" onClick={handleNext}>
        <IconNext section={section} />
      </div>
    </div>
  );
};

export default DashboardContent;
