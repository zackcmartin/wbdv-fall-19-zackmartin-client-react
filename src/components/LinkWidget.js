import React from 'react'

const LinkWidget = ({ widget, updateWidget, preview }) => {
    if (!preview) {
        return <div>
            <h1>Link Widget</h1>

            <form>
                <div class="form-group">
                    <label for="linkURL">URL</label>
                    <input type="text" class="form-control" id="linkURL" placeholder="Link URL" value={widget.url} onChange={(e) => updateWidget({ ...widget, url: e.target.value })}></input>
                </div>

                <div class="form-group">
                    <label for="imageText">Text</label>
                    <input type="text" class="form-control" id="imageText" placeholder="Link Text" value={widget.text} onChange={(e) => updateWidget({ ...widget, text: e.target.value })}></input>
                </div>

                <div class="form-group">
                    <label for="imageName">Name</label>
                    <input type="text" class="form-control" id="imageName" placeholder="Widget Name" onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
                </div>
            </form>

            <h2>Preview</h2>
            <a href={widget.url}>{widget.text}</a>
        </div>
    }
    else {
        return <a href={widget.url}>{widget.text}</a>
    }
}
export default LinkWidget