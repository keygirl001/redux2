import React, {Component} from 'react';
import FilterLink from '../Components/FilterLink.js';
import {connect} from 'react-redux';
import {FilterToDoAction} from '../Actions/actions.js'
class Footer extends Component {
    render () {
        return (
           <div>
             <FilterLink onFilterClick={this.props.onFilterClick} curFilterText={this.props.filterText} myFilterText={'SHOW_ALL'}></FilterLink>
             <FilterLink onFilterClick={this.props.onFilterClick} curFilterText={this.props.filterText} myFilterText={'SHOW_COMPLETE'}></FilterLink>
             <FilterLink onFilterClick={this.props.onFilterClick} curFilterText={this.props.filterText} myFilterText={'SHOW_ACTIVE'}></FilterLink>
          </div>
        )
    }
}
// Footer.contextTypes = {
//     store: React.PropTypes.object
// }
const mapStateToProps = (state) => {
    return {
        filterText: state.filterText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       onFilterClick : (filterText) => {
            dispatch( FilterToDoAction(filterText) )
       }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);