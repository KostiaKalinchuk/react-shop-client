import React, { Component } from "react";
import { connect } from "react-redux";

import { getPhoneById } from "../selectors";
import { fetchPhoneById, addPhoneToBasket } from "../actions";
import BasketCart from "../components/BasketCart";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.params.id);
  }

  renderContent() {
    const { phone } = this.props;

    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-4">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-8">
            <h3 className="pull-left">{phone.name}</h3>
            <h4 className="pull-right price">{phone.price} грн</h4>
            <div className="phone-info">
              <h4>Основні характеристики:</h4>
              <p>
                <b>Дисплей:</b> {phone.display}
              </p>
              <p>
                <b>Камера:</b> {phone.camera}
              </p>
              <p>
                <b>Процесор:</b> {phone.cpu}
              </p>
              <p>
                <b>Пам'ять:</b> {phone.memory}
              </p>
              <p>
                <b>Відеопроцесор:</b> {phone.video}
              </p>
            </div>
          </div>
        </div>
        <div className="caption-full">
          <h4>Додаткова інформація:</h4>
          <p>
            <b>Операційна система:</b> {phone.system}
          </p>
          <p>
            <b>Матеріал корпуса:</b> {phone.material}
          </p>
          <p>
            <b>Колір:</b> {phone.color}
          </p>
          <p>
            <b>Розміри:</b> {phone.size}
          </p>
          <p>
            <b>Вага:</b> {phone.weight}
          </p>
          <p>
            <b>Тип з'язку:</b> {phone.connection}
          </p>
          <p>
            <b>Навігаційні можливості:</b> {phone.navigation}
          </p>
          <p>
            <b>Аудіо вихід:</b> {phone.audio}
          </p>
          <p>
            <b>Ємкість акумулятора:</b> {phone.battery}
          </p>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  }

  renderSidebar() {
    const { phone, addPhoneToBasket } = this.props;
    return (
      <div>
        <p>
          <BasketCart />
        </p>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={() => addPhoneToBasket(phone.id)}
        >
          Додати в кошик
        </button>
      </div>
    );
  }

  render() {
    const { phone } = this.props;
    return (
      <div className="view-container">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-9">{phone && this.renderContent()}</div>
            <div className="col-md-3">{phone && this.renderSidebar()}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  };
};

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
