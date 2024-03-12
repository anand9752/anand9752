import React, { useState } from 'react';
import Card from './Card';
import { useToastContainer } from 'react-toastify';

const Cards = (p) => {
  let courses = p.coursesList
  let category = p.category
  let allCourses = [];
  
  const [likedCourses,setLikedCourses] = useState([]);
  const getCourses = () => {

    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
     return courses[category];
    }
   
  };

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course, index) => (
        <Card key={index} course={course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} />
      ))}
    </div>
  );
};

export default Cards;
