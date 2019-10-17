import React from 'react'

const HeadingWidget = ({ widget, updateWidget, preview }) => {
    if (!preview) {
        return <div>
            <h1>Heading Widget</h1>

            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Heading Text" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })}></input>
                </div>
                <div class="form-group">
                    <select class="form-control" value={widget.size} onChange={(e) => updateWidget({ ...widget, size: parseInt(e.target.value) })}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                        <option value="6">Heading 6</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Widget Name" onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
                </div>
            </form>

            <h2>Preview</h2>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
        </div>
    }
    else {
        return <div>{widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
        </div>
    }

}

export default HeadingWidget