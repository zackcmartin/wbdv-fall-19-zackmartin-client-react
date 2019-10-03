import React from 'react'
import CourseRow from "./CourseRow";
import CourseService from '../services/CourseService'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTh } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);
library.add(faTh);

let courseService = CourseService.getInstance()

const courses = courseService.findAllCourses()

const CourseList = () =>
    <div>
        <Navbar bg="dark" variant="dark">
            <button class="btn hamburgerStyle wbdv-field wbdv-hamburger">
                <FontAwesomeIcon icon="bars" />
            </button>
            <Navbar.Brand href="#home">Course Manager</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#grid"> 
                    <FontAwesomeIcon icon="th" />
                </Nav.Link>
                <Nav.Link href="#line">
                    Line
                </Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="New Course Title" className="mr-sm-2" />
                <Button variant="outline-info">Add</Button>
            </Form>
        </Navbar>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Owned By
                    </th>
                    <th>
                        Last Modified
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    courses.map(course =>
                        <CourseRow
                            key={course.id}
                            title={course.title} />
                    )
                }
            </tbody>
        </table>
    </div>

export default CourseList




// <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
// <div class="col-sm-2">
//     <button class="btn hamburgerStyle wbdv-field wbdv-hamburger">
//         <i class="fas fa-bars"></i>
//     </button>
// </div>
// <div id="headerHide" class="col-sm-4">
//     <span class="wbdv-label wbdv-course-manager navbar-brand" href="#">Course Manager</span>
// </div>
// <div class="col-sm-4">
//     <form class="form-inline">
//         <input class="form-control wbdv-field wbdv-new-course" type="text" id="newCourse" placeholder="New Course Title" />
//         <a href="#" class="wbdv-button wbdv-add-course">
//             <label for="newCourse" class="col-form-label submissionButton">
//                 <span class="fa-stack">
//                     <i class="fas fa-circle fa-stack-2x"></i>
//                     <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
//                 </span>
//             </label>
//         </a>
//     </form>
// </div>
// <div id="headerHide" class="col-sm-1">
//     <a href="#" class="wbdv-button wbdv-grid-layout">
//         <i class="fas fa-th"></i>
//     </a>
// </div>
// <div id="headerHide" class="col-sm-1">
//     <a href="#" class="wbdv-button wbdv-list-layout">
//         Line
//     </a>
// </div>
// </nav>
