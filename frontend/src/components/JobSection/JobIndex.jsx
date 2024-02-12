import React,{useState, useEffect} from "react";
import JobCard from "./JobCard.jsx";

const Index = () => {
  const[data, setData] = useState();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div >
      <JobCard data={data} />
    </div>
  );
};

export default Index;
