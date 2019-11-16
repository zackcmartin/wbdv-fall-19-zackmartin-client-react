import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import CourseService from '../services/CourseService'


library.add(faArrowUp);
library.add(faArrowDown);
library.add(faTrashAlt);


class WidgetListComponent extends React.Component { //({ widgets, addWidget, deleteWidget, updateWidget, repositionWidgets, togglePreview, preview }) =>
    constructor(props) {
        super(props)

        const service = CourseService.getInstance()

        console.log(props)
        //const course = service.findCourseById(props.match.params.courseId)


        // this.state = {
        //     course: course
        // }
    }

    // componentDidMount() {
    //     this.props.findAllWidgets()
    //     console.log("HERE" + this.props.widgets)
    // }

    


     renderWidgets = (widget, index) => {
        if (this.props.preview) {
            return <div>
                <li className="list-group-item">
                    {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                    {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                    {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                    {widget.type === "IMAGE" && <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                    {widget.type === "LINK" && <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                </li>
                <br />
            </div>
        }
        else {
            if (index == 0) {
                index++;
                return <div>
                    <li className="list-group-item">
                        <div className="float-right">
                            <div className="row">
                                <div className="col-sm-4">
                                    <select class="form-control" value={widget.type} onChange={(e) => this.props.updateWidget({ ...widget, type: e.target.value })}>
                                        <option value="HEADING">Heading</option>
                                        <option value="LIST">List</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="LINK">HyperLink</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btn-info" onClick={() => this.props.repositionWidgets(widget, "down")}>
                                        <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                                    </button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btn-danger" onClick={() => this.props.deleteWidget(widget.id)}>
                                        <FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} />}
                        {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "IMAGE" && <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "LINK" && <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                    </li>
                    <br />
                </div>
            }

            else if ((this.props.widgets.length - 1) == index) {
                index = 0;
                return <div>
                    <li className="list-group-item">
                        <div className="float-right">
                            <div className="row">
                                <div className="col-sm-4">
                                    <select class="form-control" value={widget.type} onChange={(e) => this.props.updateWidget({ ...widget, type: e.target.value })}>
                                        <option value="HEADING">Heading</option>
                                        <option value="LIST">List</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="LINK">HyperLink</option>
                                    </select>
                                </div>
                                <div class="col-sm-4">
                                    <button className="btn btn-info" onClick={() => this.props.repositionWidgets(widget, "up")}>
                                        <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                                    </button>
                                </div>
                                <div class="col-sm-4">
                                    <button className="btn btn-danger" onClick={() => this.props.deleteWidget(widget.id)}>
                                        <FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "IMAGE" && <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "LINK" && <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                    </li>
                    <br />
                </div>
            }

            else {
                index++;
                return <div>
                    <li className="list-group-item">
                        <div className="float-right">
                            <div className="row">
                                <div className="col-sm-4">
                                    <select class="form-control" value={widget.type} onChange={(e) => this.props.updateWidget({ ...widget, type: e.target.value })}>
                                        <option value="HEADING">Heading</option>
                                        <option value="LIST">List</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="LINK">HyperLink</option>
                                    </select>
                                </div>

                                <div class="col-sm-2">
                                    <button className="btn btn-info" onClick={() => this.props.repositionWidgets(widget, "up")}>
                                        <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                                    </button>
                                </div>
                                <div class="col-sm-2">
                                    <button className="btn btn-info" onClick={() => this.props.repositionWidgets(widget, "down")}>
                                        <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                                    </button>
                                </div>
                                <div class="col-sm-4">
                                    <button className="btn btn-danger" onClick={() => this.props.deleteWidget(widget.id)}>
                                        <FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "IMAGE" && <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                        {widget.type === "LINK" && <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                    </li>
                    <br />
                </div>
            }
        }
    }



    render() {
        return (
            <div>
                <br />
                <h2>Widget list</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <button onClick={this.props.addWidget} className="btn btn-primary" style={{ width: 200 }}>Add Widget</button>
                    </div>
                    <div className="col-sm-6" >
                        <button className="btn btn-success float-right" style={{ width: 200 }}>Save</button>
                    </div>
                    <div className="col-sm-2">
                        <div class="form-check float-right" style={{ paddingTop: 10, width: 100 }}>
                            <input class="form-check-input" type="checkbox" value="" id="check" onChange={() => this.props.togglePreview()} />
                            <label class="form-check-label" for="check" style={{ color: 'teal', fontSize: 25 }}>
                                Preview
                </label>
                        </div>
                    </div>
                </div>
                <ul className="list-group">
                    {
                        this.props.widgets && this.props.widgets.map((widget, index) => (
                            this.renderWidgets(widget, index)
                        ))
                    }
                </ul>
            </div>
        )

    }


}

export default WidgetListComponent;