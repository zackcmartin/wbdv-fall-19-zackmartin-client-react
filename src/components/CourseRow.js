import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt);

//import {Link} from 'react-router-dom'

const CourseRow = ({ course, title, seats }) =>
    <tr class="wbdv-row wbdv-course">
        <th scope="row" class="wbdv-row wbdv-icon wbdv-row wbdv-title">
            <button class="btn btn-primary btn-block">
                {title}
            </button>
        </th>
        <td class="wbdv-row wbdv-owner">
            me
    </td>
        <td class="wbdv-row wbdv-modified-date">
            9:55AM
    </td>
        <td>
            <button class="btn deleteStyle wbdv-row wbdv-button wbdv-delete">
                <FontAwesomeIcon icon="trash-alt" />
            </button>
        </td>
    </tr>

export default CourseRow



{/* <tr class="wbdv-row wbdv-course">
<th scope="row" class="wbdv-row wbdv-icon wbdv-row wbdv-title">
    <button class="btn btn-primary btn-block" onclick="window.location.href = '../course-editor/course-editor.template.client.html';">
        <i class="fas fa-code"></i>
        CS4550
    </button>
</th>
<td class="wbdv-row wbdv-owner">
    Jose Annunziato
</td>
<td class="wbdv-row wbdv-modified-date">
    9/12/19
</td>
<td>
    <button class="btn deleteStyle wbdv-row wbdv-button wbdv-delete">
        <i class="fas fa-trash-alt"></i>
    </button>
</td>
</tr> */}