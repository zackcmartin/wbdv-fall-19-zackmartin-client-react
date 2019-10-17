import React from 'react'

const ImageWidget = ({ widget }) =>
    <div>
        <h1>Image Widget</h1>

        <img className="card-img-top"
            src={widget.url} />
    </div>

export default ImageWidget