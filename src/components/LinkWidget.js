import React from 'react'

const LinkWidget = ({ widget, updateWidget }) =>
    <div>
        <h1>Link Widget</h1>

        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Link URL" value={widget.url} onChange={(e) => updateWidget({ ...widget, url: e.target.value })}></input>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Link Text" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })}></input>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Widget Name" onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
            </div>
        </form> 

        <h2>Preview</h2>
        <a href={widget.url}>{widget.text}</a>
    </div>

export default LinkWidget