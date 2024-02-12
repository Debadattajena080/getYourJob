const express = require("express");
const app = express();

// Placeholder data
const jobDetails = [
  {
    title: "Software Developer",
    description: "Join our dynamic team of developers to work on cutting-edge projects.",
    postedAgo: "2 days ago",
    applicants: 15,
  },
  {
    title: "Data Analyst",
    description: "Exciting opportunity for a data enthusiast to analyze and interpret complex datasets.",
    postedAgo: "1 day ago",
    applicants: 8,
  },
  {
    title: "UX/UI Designer",
    description: "Design user-friendly interfaces and create engaging user experiences.",
    postedAgo: "3 days ago",
    applicants: 12,
  },
];

app.get("/api", (req, res) => {
  res.json({ JobDetails: jobDetails });
});

app.get('/search', (req, res) => {
  const { query } = req.query;

  // Implement search logic here
  const filteredResults = jobDetails.filter(job => 
    job.title.toLowerCase().includes(query.toLowerCase()) ||
    job.description.toLowerCase().includes(query.toLowerCase())
  );

  res.json({ results: filteredResults });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
