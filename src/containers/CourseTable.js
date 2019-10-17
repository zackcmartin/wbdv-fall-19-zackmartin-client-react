import React from 'react'
import CourseRow from "../components/CourseRow";
import CourseService from '../services/CourseService'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTh } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
library.add(faBars);
library.add(faTh);


export default class CourseTable extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = CourseService.getInstance()
        this.state = {
            courses: this.courseService.findAllCourses(),
            newCourse: {
                title: '',
                id: ''
            }
        }
    }

    deleteCourse = courseId =>
        this.setState({
            courses: this.courseService.deleteCourse(courseId)
        })

    createCourse = () =>
        this.setState({
            courses: this.courseService.createCourse(this.state.newCourse),
            newCourse: {
                title: '',
                id: ''
            }
        })


    titleChanged = (event) => {
        this.setState({
            newCourse: {
                title: event.currentTarget.value,
                id: (new Date()).getTime()
            }
        })
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <button className="btn hamburgerStyle wbdv-field wbdv-hamburger">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <Navbar.Brand href="#home">Course Manager</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to={`/coursesGrid`}>
                            <Nav.Link href="#grid">
                                <FontAwesomeIcon icon="th" />
                            </Nav.Link>
                        </Link>
                        <Nav.Link href="#line">
                            Line
                    </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" value={this.state.newCourse.title} onChange={this.titleChanged} placeholder="New Course Title" className="mr-sm-2" />
                        <Button onClick={this.createCourse} variant="outline-info">Add</Button>
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
                            this.state.courses.map(course =>
                                <CourseRow
                                    key={course.id}
                                    course={course}
                                    deleteCourse={this.deleteCourse}
                                    createCourse={this.createCourse} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}