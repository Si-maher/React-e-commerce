import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({title, items}) => (
<div className = 'preview-collection'>
    <h1 className = 'title'>{title}</h1>
    <div className = 'preview'>
        {
            items
            .filter((item, index) => index < 4)
            .map(({id, ...otherItemProps}) => (
                <CollectionItem key = {id}{ ...otherItemProps}></CollectionItem>
            ))
        }
    </div>
</div>
)
export default PreviewCollection
{/* These methods will get re-rendered everytime PreviewCollection is re-rendered  */}