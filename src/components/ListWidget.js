import React from 'react'

const ListWidget = ({widget, updateWidget}) =>
    <div>
        <h1>List Widget</h1>

        <form>
            <div class="form-group">
                <textarea type="text" class="form-control" placeholder="Enter one list item per line" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })}/>
            </div>

            <div class="form-group">
                <select class="form-control" onChange={(e) => updateWidget({ ...widget, ordered: JSON.parse(e.target.value)})}>
                    <option value="false">Unordered List</option>
                    <option value="true">Ordered List</option>
                </select>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Widget Name" onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
            </div>
        </form> 


        {!widget.ordered &&
        <ul>
            {
                widget.text.split('\n').map(item =>
                    <li>{item}</li>
                )
            }
        </ul>
        }
        {widget.ordered &&
        <ol>
            {
                widget.text.split('\n').map(item =>
                    <li>{item}</li>
                )
            }
        </ol>
        }
    </div>

export default ListWidget