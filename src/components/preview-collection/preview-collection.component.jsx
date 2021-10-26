import React from 'react'
import './preview-collection.styles.sass'

const PreviewCollection = ({title, items}) => (
<div className = 'preview-collection'>
    <h1 className = 'title'>{title}</h1>
    <div className = 'preview'>
        {
            items
            .filter((item, index) => index < 4)
            .map((item) => (
                <div key = {item.id}>{item.name}</div>
            ))
        }
    </div>
</div>
)
export default PreviewCollection
{/* These methods will get re-rendered everytime PreviewCollection is re-rendered  */}