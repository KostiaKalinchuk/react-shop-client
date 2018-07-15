import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'

import {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
} from '../actions'
import {getPhones} from '../selectors'

class Phones extends Component {
  componentDidMount () {
    this.props.fetchPhones();
    this.props.fetchCategories()
  }

  renderPhone (phone, index) {
    const {addPhoneToBasket} = this.props;

    return (
      <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
        <div className='thumbnail'>
          <img
            className='img-thumbnail'
            src={phone.image}
            alt={phone.name}
          />
          <div className='caption'>
            <h4 className='pull-right'>{phone.price} грн</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>
            </h4>
            <p>{phone.display} / {phone.memory} / {phone.battery} / {phone.weight}</p>
            <p className='itemButton'>
              <button
                className='btn btn-primary'
                onClick={() => addPhoneToBasket(phone.id)}
              >
                В кошик
              </button>
              <Link
                to={`/phones/${phone.id}`}
                className='btn btn-default'
              >
                Детальніше
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const {phones, loadMorePhones} = this.props;
    return (
      <div>
        <div className='books row'>
          {phones.map((phone, index) => this.renderPhone(phone, index)).reverse()}
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button
              onClick={loadMorePhones}
              className='center-block btn btn-primary'
            >
              Завантажити ще
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    phones: getPhones(state, ownProps)
  }
};

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
