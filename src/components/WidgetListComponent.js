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
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp);
library.add(faArrowDown);


// const generateDefault = ({ type, widget, updateWidget }) => {
//     console.log("here")
//     switch(type) {
//         case 'HEADING': updateWidget({...widget, type: "HEADING", size: 3, text: "Heading Widget from Redux"});
//     }
// }

const WidgetListComponent = ({ widgets, addWidget, deleteWidget, updateWidget }) =>
    <div>
        <h2>Widget list</h2>
        <button onClick={addWidget}>Add Widget</button>
        <ul className="list-group">
            {
                widgets.map(widget =>
                    <li className="list-group-item">
                        <div class="float-right">
                            <div class="row">
                                <div class="col-sm-4">
                                    <select class="form-control" onChange={(e) => updateWidget({...widget, type: e.target.value})}>
                                        <option selected value="1">Change Type</option>
                                        <option value="HEADING">Heading</option>
                                        <option value="LIST">List</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="LINK">HyperLink</option>
                                    </select>
                                </div>
                                <div class="col-sm-4">
                                    <button className="btn btn-primary">
                                        <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                                    </button>
                                </div>
                                <div class="col-sm-4">
                                    <button className="btn btn-primary">
                                        <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={updateWidget} />}
                        {widget.type === "LIST" && <ListWidget widget={widget} />}
                        {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} />}
                        {widget.type === "IMAGE" && <ImageWidget widget={widget} />}
                        {widget.type === "LINK" && <LinkWidget widget={widget} />}
                        <button onClick={() => deleteWidget(widget.id)}>Delete</button>
                    </li>
                )
            }
        </ul>
    </div>


export default WidgetListComponent;