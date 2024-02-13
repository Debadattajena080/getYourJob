import React, { useState, useEffect } from "react";
import JobCard from "./JobCard.jsx";

const Index = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();

    if (response.ok) {
      setData(result);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <JobCard data={data} />
    </div>
  );
};

export default Index;
