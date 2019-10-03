import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import ModuleListContainer from "./ModuleListContainer";

const course = {
    title: 'Course 123',
    modules: [
        {
            title: 'Module 1', id: 123,
            lessons: [
                {title: 'Lesson 1.1', id: 123, selected: true},
                {title: 'Lesson 1.2', id: 234},
                {title: 'Lesson 1.3', id: 345},
                {title: 'Lesson 1.4', id: 456},
            ]
        },
        {title: 'Module 2', id: 234},
        {title: 'Module 3', id: 345},
    ]
}

const CourseEditor = ({match}) =>
    <div>
        <h2>Course Editor {match.params.courseId}</h2>
        <div className="row">
            <div className="col-3">
                <ModuleListContainer/>
                {/*<ModuleList course={course}/>*/}
            </div>
            <div className="col-9">
                <LessonTabs lessons={course.modules[0].lessons}/>
            </div>
        </div>
    </div>

export default CourseEditor