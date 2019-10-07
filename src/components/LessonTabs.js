import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);
library.add(faEdit);
library.add(faCheck);


const LessonTabs = ({ lessons, selectLesson, editLesson, completeEditLesson, deleteLesson}) =>
    <div>
        <ul className="nav nav-tabs">
            {
                lessons !== undefined &&
                lessons.map(lesson =>
                    <li key={lesson.id} className="nav-item">
                        <a className={lesson.selected ? 'nav-link active' : 'nav-link'} href="#" onClick={() => selectLesson(lesson)}>
                            {lesson.title}
                        </a>
                        <button className="btn" onClick={() => deleteLesson(lesson)}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </button>
                        <button className="btn" onClick={() => editLesson(lesson)}>
                            <FontAwesomeIcon icon="edit" />
                        </button>
                        <button className="btn" onClick={() => completeEditLesson()}>
                            <FontAwesomeIcon icon="check" />
                        </button>
                    </li>
                )
            }
        </ul>
    </div>

export default LessonTabs