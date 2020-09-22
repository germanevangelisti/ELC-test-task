import algoliasearch from 'algoliasearch';
import Product from './product'
import React from 'react';
import { Configure, Hits, InstantSearch, Pagination, SearchBox } from 'react-instantsearch-dom';

const dataEndpoint  = 'http://localhost:3035/api/search/data'
const searchClient  = algoliasearch('NIUS5LKJ10', '85e0e95129a63c4936eba8963d0f030a');

class Search extends React.Component {
    constructor(){
        super()
        this.getDataSearch()
    }

    getDataSearch(){
        fetch(dataEndpoint).then( (response) => response.json())
    }

    render() {
        return (
            <div className="content">
                <InstantSearch indexName="ELC_data_index" searchClient={searchClient}>
                    <div className="right-panel">
                        <Configure hitsPerPage={5} />
                        <SearchBox />
                        <Hits hitComponent={Product} />
                        <Pagination />
                    </div>
                </InstantSearch>
            </div>
        );
    }
}

module.exports = Search;