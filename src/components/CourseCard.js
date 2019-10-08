
import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
  <div className="card"
       styles={{width: '18rem'}}>
    <img className="card-img-top"
         src="https://picsum.photos/300/200"/>
    <div className="card-body">
      <h5 className="card-title">{course.title}</h5>
      <p className="card-text"> </p>
      <Link className="btn btn-primary" to={`/editor/${course.id}`}>Edit</Link>
      <a onClick={() => deleteCourse(course.id)}
         className="btn btn-danger">Delete</a>
    </div></div>
export default CourseCard;