import React from 'react'
import LessonTabs from '../components/LessonTabs'
import CourseService from "../services/CourseService"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

let courseService = CourseService.getInstance()

let editedLessonId
let isEdit = false;

export default class LessonsTabsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createModule = this.createModule.bind(this)
        this.state = {
            newLesson: {
                title: '',
                id: ''
            }
        }
    }

    titleChanged = (event) => {
        // this.state.newModule.title = event.currentTarget.value
        this.setState({
            newLesson: {
                title: event.currentTarget.value,
                id: (new Date()).getTime()
            }
        })
    }


    createLesson = () => {
        isEdit = false;
        this.props.createLesson(this.state.newLesson)
        this.setState({
            newLesson: {
                title: ''
            }
        })
    }

    editLesson = (lesson) => {
        isEdit = true;
        editedLessonId = lesson.id
        this.setState({
            newLesson: {
                title: lesson.title,
                id: (new Date()).getTime()
            }
        })
    }
    completeEditLesson = () => {
        if (isEdit) {
            this.props.completeEditLesson(this.state.newLesson.title, editedLessonId)
            this.setState(prevState => ({
                newLesson: {
                    title: ''
                }
            }))
            isEdit = false;
        }
    }


    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Form inline className="float-right">
                            <FormControl type="text" value={this.state.newLesson.title} onChange={this.titleChanged} placeholder="New Lesson" className="mr-sm-2" />
                            <Button onClick={this.createLesson}>Add</Button>
                        </Form>
                    </li>
                    <li className="list-group-item">
                        <LessonTabs lessons={this.props.lessons} selectLesson={this.props.selectLesson}
                            editLesson={this.editLesson} completeEditLesson={this.completeEditLesson}
                            deleteLesson={this.props.deleteLesson} />
                    </li>
                </ul>
            </div >
        )
    }
}