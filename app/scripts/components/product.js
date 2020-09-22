import PropTypes from 'prop-types'
import React from 'react'

function Product(props) {
    return (
        <div id="product">
            <div className="elc-picture" style={{backgroundImage: 'url(' + props.hit.picture + ')'}}></div>
            <div className="elc-description">
                <span className="title">Product</span>
                {props.hit.name}
            </div>
            <div className="elc-price">
                <span className="title">Price</span>
                {' $ ' + props.hit.price}
            </div>
            <div className="elc-tags">
                <span className="title">Tags</span>
                <ul className="tags">
                    {props.hit.tags.map((tag, key) => {
                        return <li key={key}>{tag}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

Product.propTypes = {
    hit: PropTypes.object.isRequired
}

module.exports = Product