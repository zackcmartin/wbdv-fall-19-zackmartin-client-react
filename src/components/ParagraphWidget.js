import React from 'react'

const ParagraphWidget = ({ widget, updateWidget, preview }) => {
    if (!preview) {
        return <div>
            <h1>Paragraph Widget</h1>
            <form>
                <div class="form-group">
                <label for="paraText">Text</label>
                    <textarea type="text" class="form-control" id="paraText" placeholder="Paragraph Text" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })} />
                </div>
                <div class="form-group">
                <label for="paraName">Name</label>
                    <input type="text" class="form-control" id="paraName" placeholder="Widget Name" onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
                </div>
            </form>
            <h2>Preview</h2>
            <p>{widget.text}</p>
        </div>
    }
    else {
        return <div>
            <p>{widget.text}</p>
        </div>
    }
}

export default ParagraphWidget