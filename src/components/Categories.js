import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router'
import {compose} from 'redux'
import R from 'ramda'
import classNames from 'classnames'

import {
  getCategories,
  getActiveCategoryId
} from '../selectors'



const Categories = ({categories, activeCategoryId}) => {


    // console.log(categories);

    const renderCategory = (category, index) => {
    const getActiveState = R.propEq('id', activeCategoryId);

    const linkClass = classNames({
      'list-group-item': true,
      'active': getActiveState(category)
    });

    return (
      <Link
        to={`/categories/${category.id}`}
        className={linkClass}
        key={index}
      >
        {category.name}
      </Link>
    )
  };

  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      'active': R.isNil(activeCategoryId)
    });

    return (
      <Link
        to='/'
        className={linkClass}
      >
        Всі смартфони
      </Link>
    )
  };

  return (
    <div className='well'>
      <h4>Бренд</h4>
      <div className='list-group'>
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
});

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories)
