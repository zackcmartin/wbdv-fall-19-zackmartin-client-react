import React from 'react'
import TopicPills from '../components/TopicPills'
import CourseService from "../services/CourseService"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

let courseService = CourseService.getInstance()


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
            topics: this.props.topics
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
        this.props.createTopic(this.state.newTopic)
        this.setState(prevState => ({
            newTopic: {
                title: ''
            }
        }))
    }

    


    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Form inline className="float-right">
                            <FormControl type="text" value={this.state.newTopic.title} onChange={this.titleChanged} placeholder="New Topic" className="mr-sm-2" />
                            <Button onClick={this.createTopic}>Add</Button>
                        </Form>
                    </li>
                    <li className="list-group-item">
                    <TopicPills topics={this.props.topics} />
                </li>
                </ul>
            </div > 
        )
    }
}