import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'

import {getPhoneById} from '../selectors'
import {fetchPhoneById, addPhoneToBasket} from '../actions'
import BasketCart from '../components/BasketCart'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Phone extends Component {
  componentDidMount () {
    this.props.fetchPhoneById(this.props.params.id)
  }

  // renderFields () {
  //   const {phone} = this.props;
  //   const columnFields = R.compose(
  //     R.toPairs,
  //     R.pick([
  //       'cpu',
  //       'camera',
  //       'size',
  //       'weight',
  //       'display',
  //       'battery',
  //       'memory',
  //       'color',
  //       'system',
  //       'connection',
  //       'material',
  //       'navigation',
  //       'audio',
  //       'video'
  //     ])
  //   )(phone);
  //
  //   return columnFields.map(([key, value]) => (
  //     <div className='column' key={key}>
  //       <div className='ab-details-title'>
  //         <p>{key}</p>
  //       </div>
  //       <div className='ab-details-info'>
  //         {value}
  //       </div>
  //     </div>
  //   ))
  // }

  renderContent () {
    const {phone} = this.props;

    return (











      <div className='thumbnail'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              className='img-thumbnail'
              src={phone.image}
              alt={phone.name}
            />
          </div>
          <div className='col-md-6'>
            {/*{this.renderFields()}*/}


              <p>Камера: {phone.camera}</p>
              <p>Розміри: {phone.size}</p>
              <p>Вага: {phone.weight}</p>
              <p>Дисплей: {phone.display}</p>
              <p>Ємкість акумулятора: {phone.battery}</p>
              <p>Пам'ять: {phone.memory}</p>
              <p>Колір: {phone.color}</p>
              <p>Операційна система: {phone.system}</p>
              <p>Тип з'язку: {phone.connection}</p>
              <p>Матеріал корпуса: {phone.material}</p>
              <p>Навігаційні можливості: {phone.navigation}</p>
              <p>Аудіо вихід: {phone.audio}</p>
              <p>Відеопроцесор: {phone.video}</p>



          </div>
        </div>
        <div className='caption-full'>
          <h4 className='pull-right'>{phone.price} грн</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>



    )
  }

  renderSidebar () {
    const {phone, addPhoneToBasket} = this.props;
    return (
      <div>
          <p><BasketCart /></p>

          <button
          type='button'
          className='btn btn-success btn-block'
          onClick={() => addPhoneToBasket(phone.id)}
        >
          Додати в кошик
        </button>
      </div>
    )
  }

  render () {
    const {phone} = this.props;
    return (
      <div className='view-container'>
          <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              {phone && this.renderContent()}
            </div>
            <div className='col-md-3'>
              {phone && this.renderSidebar()}
            </div>
          </div>
        </div>
          <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
};

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone)
