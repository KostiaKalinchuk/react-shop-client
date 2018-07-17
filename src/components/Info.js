import React from "react";
import "../css/Info.css";

const tempData = [
  {
    title: "Чи є можливість замовити товар із доставкою в іншу країну?",
    description: "На жаль, зараз ми працюємо тільки на території України."
  },
  {
    title: "Скільки днів товар знаходиться в пункті видачі?",
    description:
      "У відділенні кур'єрської служби «Нова Пошта» замовлення перебуватиме упродовж 5 днів.\n" +
      "Після завершення цього терміну товар повертається відправнику."
  },
  {
    title:
      "Чи потрібна додаткова оплата за переказ коштів у разі післяплати у відділенні Нової Пошти?",
    description:
      "Додаткової оплати за пересилання коштів у разі післяплати із вашого боку не потрібно.\n" +
      "Вартість замовлення, вказана під час підтвердження замовлення, є остаточною."
  },
  {
    title:
      "Чи є можливість відмовитися від частини замовлення в пункті видачі?",
    description:
      "На жаль, можливості відмовитися від частини замовлення немає. Ви можете відмовитися від неактуального замовлення повністю й оформити нову заявку."
  },
  {
    title: "Чи можна оплатити замовлення кредитною карткою з-за кордону?",
    description:
      "Ви можете оплатити замовлення онлайн будь-якою карткою Visa і MasterCard.\n" +
      "Однак, просимо звернути Вашу увагу на можливі обмеження для переказу коштів в іншу країну з боку Вашого банку. З огляду на це, ми, на жаль, не даємо гарантію, що оплата буде успішною."
  },
  {
    title: "Як можна оплатити замовлення готівкою?",
    description:
      "Оплата готівкою під час отримання товару можлива в усіх населених пунктах на території України.\n" +
      "Оплата здійснюється виключно у національній валюті.\n" +
      "На підтвердження оплати ми видаємо Вам товарний чек.\n"
  }
];

const Block = ({ id, title, description, className, onClick }) => {
  return (
    <div className="info-container">
      <h2 id={id} onClick={onClick}>
        {title}
      </h2>
      <div className={`description ${className}`}>{description}</div>
    </div>
  );
};

class Info extends React.Component {
  state = {
    visible: null
  };

  handleVisibility(event) {
    let currentId =
      event.target.id !== this.state.visible ? event.target.id : null;

    this.setState({
      visible: currentId
    });
  }

  render() {
    return (
      <div className="main">
        <h1>Запитання та відповіді</h1>
        {tempData.map((item, i) => (
          <Block
            key={i}
            id={i}
            title={item.title}
            description={item.description}
            onClick={this.handleVisibility.bind(this)}
            className={
              this.state.visible === i.toString() ? "visible" : "hidden"
            }
          />
        ))}
      </div>
    );
  }
}

export default Info;
