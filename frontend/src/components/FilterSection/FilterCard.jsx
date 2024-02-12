import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const FilterList = ({ title, items, isVisible, onToggleClick, isLast }) => {
  return (
    <div className={`pb-6 ${isLast ? '' : 'border-b border-primaryGray'}`}>
      <div className="px-5 pt-5 flex items-center justify-between mt-2">
        <h5 className="mb-2 text-xl tracking-tight">{title}</h5>
        <button
          onClick={onToggleClick}
          className="flex items-center focus:outline-none"
        >
          {isVisible ? (
            <MdOutlineKeyboardArrowUp className="h-4 w-4" />
          ) : (
            <MdOutlineKeyboardArrowDown className="h-4 w-4" />
          )}
        </button>
      </div>
      {isVisible && (
        <div className="px-5">
          <ul>
            {items.map((item, index) => (
              <FilterListItem key={index} label={item.label} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const FilterListItem = ({ label }) => {
  return (
    <li className="flex items-center space-x-4">
      <input type="checkbox" className="mr-2 h-4 w-4 space-x-4" />
      <p>{label}</p>
    </li>
  );
};

const FilterCard = () => {
  const [filterData, setFilterData] = useState({
    company: [
      { label: "Apple" },
      { label: "Samsung" },
      { label: "Flipkart" },
      { label: "Toyota" },
    ],
    location: [
      { label: "Mumbai" },
      { label: "Chandigarh" },
      { label: "Karnatak" },
      { label: "Banglore" },
    ],
    skills: [
      { label: "JavaScript" },
      { label: "Machine Learning" },
      { label: "Backend Development" },
      { label: "Artificial Intelligence" },
    ],
    experience: [
      { label: "0-2 Years" },
      { label: "3-5 Years" },
      { label: "5-8 Years" },
      { label: "Above 8 Years" },
    ],
    salary: [
      { label: "3 Lakhs+" },
      { label: "6 Lakhs+" },
      { label: "10 Lakhs+" },
      { label: "15 Lakhs+" },
    ],
  });

  const handleToggleClick = (filterKey) => {
    setFilterData({
      ...filterData,
      [filterKey]: !filterData[filterKey],
    });
  };

  return (
    <div className="w-full rounded-2xl border-4 shadow-inner-2xl border-primaryBorder">
      <div className="flex items-center justify-between px-4 pt-8 pb-4 border-b border-primaryGray">
        <h1 className="text-2xl">Filter by</h1>
        <div className="flex items-center justify-between space-x-4 text-xs">
          <p>3 filters applied</p>
          <button className="border-b-2"> Clear all</button>
        </div>
      </div>
      <FilterList
        title="Company"
        items={filterData.company}
        isVisible={filterData.isCompanyListVisible}
        onToggleClick={() => handleToggleClick("isCompanyListVisible")}
      />

      <FilterList
        title="Location"
        items={filterData.location}
        isVisible={filterData.isLocationListVisible}
        onToggleClick={() => handleToggleClick("isLocationListVisible")}
      />

      <FilterList
        title="Skills"
        items={filterData.skills}
        isVisible={filterData.isSkillListVisible}
        onToggleClick={() => handleToggleClick("isSkillListVisible")}
      />

      <FilterList
        title="Experience"
        items={filterData.experience}
        isVisible={filterData.isExperienceListVisible}
        onToggleClick={() => handleToggleClick("isExperienceListVisible")}
      />

      <FilterList
        title="Salary Range"
        items={filterData.salary}
        isVisible={filterData.isSalaryListVisible}
        onToggleClick={() => handleToggleClick("isSalaryListVisible")}
        isLast
      />
    </div>
  );
};

export default FilterCard;
