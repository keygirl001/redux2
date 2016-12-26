import React, {Component} from 'react';

class FilterLink extends Component {
    render () {
        if(this.props.curFilterText === this.props.myFilterText) {
            return (<span>{this.props.myFilterText}</span>);
        }else{
            return (<a href='#' onClick={()=>{
                this.props.onFilterClick(this.props.myFilterText);
            }}>{this.props.myFilterText}</a>)
        }
    }
}
export default FilterLink;