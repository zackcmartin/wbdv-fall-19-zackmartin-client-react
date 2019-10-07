import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);
library.add(faEdit);
library.add(faCheck);


const TopicPills = ({ topics }) =>
    <div>
        <ul className="nav nav-pills">
            {
                topics !== undefined &&
                topics.map(topic =>
                    <li key={topic.id} className="nav-item">
                        <a className={topic.selected ? 'nav-link active' : 'nav-link'} href="#">
                            {topic.title}
                        </a>
                        <button className="btn">
                            <FontAwesomeIcon icon="trash-alt" />
                        </button>
                        <button className="btn">
                            <FontAwesomeIcon icon="edit" />
                        </button>
                        <button className="btn">
                            <FontAwesomeIcon icon="check" />
                        </button>
                    </li>
                )
            }
        </ul>
    </div>

export default TopicPills