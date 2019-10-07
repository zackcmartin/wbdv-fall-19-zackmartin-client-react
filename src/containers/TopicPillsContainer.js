import React from 'react'
import TopicPills from '../components/TopicPills'
import CourseService from "../services/CourseService"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

let courseService = CourseService.getInstance()

let editedTopicId
let isEdit = false;

export default class TopicPillsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createModule = this.createModule.bind(this)
        this.state = {
            newTopic: {
                title: '',
                id: ''
            },
        }
    }

    titleChanged = (event) => {
        // this.state.newModule.title = event.currentTarget.value
        this.setState({
            newTopic: {
                title: event.currentTarget.value,
                id: (new Date()).getTime()
            }
        })
    }


    createTopic = () => {
        isEdit = false;
        this.props.createTopic(this.state.newTopic)
        this.setState(prevState => ({
            newTopic: {
                title: ''
            }
        }))
    }

    completeEditTopic = () => {
        if (isEdit) {
            this.props.completeEditTopic(this.state.newTopic.title, editedTopicId)
            this.setState({
                newTopic: {
                    title: ''
                }
            })
            isEdit = false;
        }
    }

    editTopic = (topic) => {
        isEdit = true;
        editedTopicId = topic.id
        this.setState({
            newTopic: {
                title: topic.title,
                id: (new Date()).getTime()
            }
        })
    }



    render() {
        return (
            <div>
                <Form inline className="float-right">
                    <FormControl type="text" value={this.state.newTopic.title} onChange={this.titleChanged} placeholder="New Topic" className="mr-sm-2" />
                    <Button onClick={this.createTopic}>Add</Button>
                </Form>
                <TopicPills topics={this.props.topics} deleteTopic={this.props.deleteTopic} editTopic={this.editTopic} completeEditTopic={this.completeEditTopic} />
            </div >
        )
    }
}