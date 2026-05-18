import React, { useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", enrolled: false },
    { id: 2, title: "Java Fundamentals", enrolled: false },
    { id: 3, title: "Spring Boot Intro", enrolled: false },
  ]);

  const handleEnroll = (id) => {
    const updatedCourses = courses.map((course) => {
      if (course.id === id) {
        return { ...course, enrolled: true };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  return (
    <div className="course-container">
       <h2>Courses</h2>
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>

            {course.enrolled ? (
              <button disabled>Enrolled</button>
            ) : (
              <button onClick={() => handleEnroll(course.id)}>
                Enroll
              </button>
            )}
          </div>
        ))}


    </div>
  );
}

export default Courses;