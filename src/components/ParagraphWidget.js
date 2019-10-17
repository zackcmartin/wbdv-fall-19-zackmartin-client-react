import React from 'react'

const ParagraphWidget = ({ widget, updateWidget }) =>
    <div>
        <h1>Paragraph Widget</h1>
        <form>
            <div class="form-group">
                <textarea type="text" class="form-control" placeholder="Paragraph Text" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Widget Name" onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
            </div>
        </form> 
        <h2>Preview</h2>    
        <p>{widget.text}</p>
    </div>

export default ParagraphWidget