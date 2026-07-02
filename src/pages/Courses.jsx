import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:8080/courses");
            setCourses(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEnroll = (id) => {
        const updatedCourses = courses.map((course) => {
            if (course.courseId === id) {
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

                <div key={course.courseId} className="course-card">

                    <h3>{course.courseName}</h3>

                    <p>{course.courseDescription}</p>

                    {course.enrolled ? (

                        <button disabled>Enrolled</button>

                    ) : (

                        <button onClick={() => handleEnroll(course.courseId)}>
                            Enroll
                        </button>

                    )}

                </div>

            ))}

        </div>
    );
}

export default Courses;