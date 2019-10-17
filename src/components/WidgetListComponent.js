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


library.add(faArrowUp);
library.add(faArrowDown);
library.add(faTrashAlt);

// const generateDefault = ({ type, widget, updateWidget }) => {
//     console.log("here")
//     switch(type) {
//         case 'HEADING': updateWidget({...widget, type: "HEADING", size: 3, text: "Heading Widget from Redux"});
//     }
// }

const WidgetListComponent = ({ widgets, addWidget, deleteWidget, updateWidget, repositionWidgets }) =>
    <div>
        <br/>
        <h2>Widget list</h2>
        <div className="row">
            <div className="col-sm-4">
                <button onClick={addWidget} className="btn btn-primary" style={{width:200}}>Add Widget</button>
            </div>
            <div className="col-sm-6" >
                <button className="btn btn-success float-right" style={{width: 200}}>Save</button>
            </div>
            <div className="col-sm-2">
                <div class="form-check float-right" style={{paddingTop: 10, width: 100}}>
                    <input class="form-check-input" type="checkbox" value="" id="check"/>
                    <label class="form-check-label" for="check" style={{color: 'teal', fontSize: 25}}>
                        Preview
            </label>
                </div>
            </div>
        </div>
        <ul className="list-group">
            {
                widgets.map(function (widget, index) {
                    if (index == 0) {
                        index++;
                        return <div>
                            <li className="list-group-item">
                                <div className="float-right">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <select class="form-control" value={widget.type} onChange={(e) => updateWidget({ ...widget, type: e.target.value })}>
                                                <option value="HEADING">Heading</option>
                                                <option value="LIST">List</option>
                                                <option value="PARAGRAPH">Paragraph</option>
                                                <option value="IMAGE">Image</option>
                                                <option value="LINK">HyperLink</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-4">
                                            <button className="btn btn-info" onClick={() => repositionWidgets(widget, "down")}>
                                                <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                                            </button>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn btn-danger" onClick={() => deleteWidget(widget.id)}>
                                                <FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "IMAGE" && <ImageWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "LINK" && <LinkWidget widget={widget} updateWidget={updateWidget} />}
                            </li>
                            <br />
                        </div>
                    }

                    else if ((widgets.length - 1) == index) {
                        index = 0;
                        return <div>
                            <li className="list-group-item">
                                <div className="float-right">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <select class="form-control" value={widget.type} onChange={(e) => updateWidget({ ...widget, type: e.target.value })}>
                                                <option value="HEADING">Heading</option>
                                                <option value="LIST">List</option>
                                                <option value="PARAGRAPH">Paragraph</option>
                                                <option value="IMAGE">Image</option>
                                                <option value="LINK">HyperLink</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4">
                                            <button className="btn btn-info" onClick={() => repositionWidgets(widget, "up")}>
                                                <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                                            </button>
                                        </div>
                                        <div class="col-sm-4">
                                            <button className="btn btn-danger" onClick={() => deleteWidget(widget.id)}>
                                                <FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "IMAGE" && <ImageWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "LINK" && <LinkWidget widget={widget} updateWidget={updateWidget} />}
                            </li>
                            <br />
                        </div>
                    }

                    else {
                        console.log(widgets.length)
                        console.log(index)
                        index++;
                        return <div>
                            <li className="list-group-item">
                                <div className="float-right">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <select class="form-control" value={widget.type} onChange={(e) => updateWidget({ ...widget, type: e.target.value })}>
                                                <option value="HEADING">Heading</option>
                                                <option value="LIST">List</option>
                                                <option value="PARAGRAPH">Paragraph</option>
                                                <option value="IMAGE">Image</option>
                                                <option value="LINK">HyperLink</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-2">
                                            <button className="btn btn-info" onClick={() => repositionWidgets(widget, "up")}>
                                                <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                                            </button>
                                        </div>
                                        <div class="col-sm-2">
                                            <button className="btn btn-info" onClick={() => repositionWidgets(widget, "down")}>
                                                <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                                            </button>
                                        </div>
                                        <div class="col-sm-4">
                                            <button className="btn btn-danger" onClick={() => deleteWidget(widget.id)}>
                                                <FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "IMAGE" && <ImageWidget widget={widget} updateWidget={updateWidget} />}
                                {widget.type === "LINK" && <LinkWidget widget={widget} updateWidget={updateWidget} />}
                            </li>
                            <br />
                        </div>
                    }

                })
            }
        </ul>
    </div>


export default WidgetListComponent;