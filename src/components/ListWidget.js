import React from 'react'

const ListWidget = ({ widget, updateWidget, preview }) => {
    if (!preview) {
        return <div>
            <h1>List Widget</h1>

            <form>
                <div class="form-group">
                    <label for="listText">Text</label>
                    <textarea type="text" class="form-control" id="listText" placeholder="Enter one list item per line" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })} />
                </div>

                <div class="form-group">
                    <label for="listType">Type</label>
                    <select class="form-control" id="listType" onChange={(e) => updateWidget({ ...widget, ordered: JSON.parse(e.target.value) })}>
                        <option value="false">Unordered List</option>
                        <option value="true">Ordered List</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="listName">Name</label>
                    <input type="text" class="form-control" id="listName" placeholder="Widget Name" value={widget.name} onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
                </div>
            </form>


            <h2>Preview</h2>
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
    }
    else {
        return <div>
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
    }
}

export default ListWidget