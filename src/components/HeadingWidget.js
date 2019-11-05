import React from 'react'

const HeadingWidget = ({ widget, updateWidget, preview }) => {
    if (!preview) {
        return <div>
            <h1>Heading Widget</h1>
            <form>
                <div class="form-group">
                    <label for="headingText">Text</label>
                    <input type="text" class="form-control" placeholder="Heading Text" id="headingText" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })}></input>
                </div>
                <div class="form-group">
                    <label for="headingSize">Size</label>
                    <select class="form-control" value={widget.size} id="headingSize" onChange={(e) => updateWidget({ ...widget, size: parseInt(e.target.value) })}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="headingName">Name</label>
                    <input type="text" class="form-control" placeholder="Widget Name" id="headingName" value={widget.name} onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
                </div>
            </form>

            <h2>Preview</h2>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
        </div>
    }
    else {
        return <div>{widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
        </div>
    }

}

export default HeadingWidget