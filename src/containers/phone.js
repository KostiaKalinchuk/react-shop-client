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
          <div className='col-md-4'>
            <img
              className='img-thumbnail'
              src={phone.image}
              alt={phone.name}
            />
          </div>


          <div className='col-md-8'>
            {/*{this.renderFields()}*/}
              <h3 className='pull-left'>{phone.name}</h3>
              <h4 className='pull-right price'>{phone.price} грн</h4>


              <div className='phone-info'>
              <h4>Основні характеристики:</h4>
              <p><b>Камера:</b> {phone.camera}</p>
              <p><b>Розміри:</b> {phone.size}</p>
              <p><b>Вага:</b> {phone.weight}</p>
              <p><b>Дисплей:</b> {phone.display}</p>
              <p><b>Ємкість акумулятора:</b> {phone.battery}</p>
              <p><b>Пам'ять:</b> {phone.memory}</p>

              </div>


          </div>
        </div>
        <div className='caption-full'>
            <p><b>Колір:</b> {phone.color}</p>
            <p><b>Операційна система:</b> {phone.system}</p>
            <p><b>Тип з'язку:</b> {phone.connection}</p>
            <p><b>Матеріал корпуса:</b> {phone.material}</p>
            <p><b>Навігаційні можливості:</b> {phone.navigation}</p>
            <p><b>Аудіо вихід:</b> {phone.audio}</p>
            <p><b>Відеопроцесор:</b> {phone.video}</p>
            <p><b>Додаткова інформація:</b> {phone.description}</p>
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
