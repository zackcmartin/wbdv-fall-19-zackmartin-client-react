import React from 'react'
//import LessonTabs from "./LessonTabs";
import ModuleListContainer from "./ModuleListContainer";
import CourseService from "../services/CourseService"

let courseService = CourseService.getInstance();

const course = courseService.findCourseById(123);


const CourseEditor = () =>
    <div>
        <h2>Course Editor </h2>
        <div className="row">
            <div className="col-3">
                <ModuleListContainer course={course}/>
            </div>
            <div className="col-9">
                {/* <LessonTabs lessons={course.modules[0].lessons}/> */}
            </div>
        </div>
    </div>

export default CourseEditor