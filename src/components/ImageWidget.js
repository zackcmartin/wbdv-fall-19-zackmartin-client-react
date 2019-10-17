import React from 'react'

const ImageWidget = ({ widget, updateWidget, preview }) => {
    if (!preview) {
        return <div>
            <h1>Image Widget</h1>

            <form>
                
                <div class="form-group">
                <label for="imageURL">URL</label>
                    <input type="text" class="form-control" id="imageURL" placeholder="Image URL" value={widget.url} onChange={(e) => updateWidget({ ...widget, url: e.target.value })}></input>
                </div>

                <div class="form-group">
                <label for="imageName">Name</label>
                    <input type="text" class="form-control" id="imageName" placeholder="Widget Name" onChange={(e) => updateWidget({ ...widget, name: e.target.value })}></input>
                </div>
            </form>

            <h2>Preview</h2>
            <img className="card-img-top"
                src={widget.url} />
        </div>
    }
    else {
        return <div>
            <img className="card-img-top"
                src={widget.url} />
        </div>
    }
}
    export default ImageWidget