import React from 'react'
import CourseTable from "../containers/CourseTable";
import { connect } from 'react-redux'
import CourseService from '../services/CourseService'

const service = CourseService.getInstance();

const stateToPropertyMapper = state => {
    return {
        courses: state.courses
    }
}

const propsToDispatcher = dispatch => ({
        findAllCourses: () => {
            service.findAllCourses().then(courses => dispatch({type: 'FIND_ALL_COURSES', courses: courses}))
        }
    })

const CourseListContainer =
    connect(stateToPropertyMapper,
        propsToDispatcher)
        (CourseTable)

export default CourseListContainer;