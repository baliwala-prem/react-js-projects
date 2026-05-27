import { useState } from 'react'
import './App.css'
import User from './components/User';
import Card from './components/Card';


function App() {

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Pune, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Delhi, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Chennai, India"
  },

  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Noida, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Ahmedabad, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    companyName: "Tesla",
    datePosted: "12 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg",
    companyName: "Intel",
    datePosted: "9 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Surat, India"
  }
];

 

  return (
    <>
      <div className='parent'>
       {
        jobOpenings.map(function(elem,idx){

          return <div key={idx}>
            <Card brandLogo={elem.brandLogo}companyname={elem.companyName} datepost={elem.datePosted} post={elem.post} 
          tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
          
        })
       }
      </div>

    </>
  )
}

export default App;
