import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollection } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.style.scss"

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        <div className="overview">
            {
                collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
});

export default connect(mapStateToProps)(CollectionOverview);