import React from "react";
import {Form, Field} from "react-final-form";

const onSubmit = async values => {

    fetch('http://shop-api.local/API/feedbackForm.php', {
        method: 'POST',
        body: JSON.stringify(values),
    }).then(res => {
        if (res.status === 200) {
            alert('Повідомлення надіслано');
            location="/";
        }
    }).catch(err => err);
};

const FeedbackForm = () => (
    <div className='feedback col-md-12'>
    <div className='feedback-form col-md-7'>
        <h1>Зворотній зв'язок </h1>
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = "Заповніть поле";
                }
                if (!values.email) {
                    errors.email = "Заповніть поле";
                }
                if (!values.message) {
                    errors.message = "Заповніть поле";
                }
                return errors;
            }}
            render={({handleSubmit, reset, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Імя</label>
                        <Field name="name" type="text" placeholder="Імя">
                            {obj => {
                                return (
                                    <div>
                                        <input
                                            {...obj.input}
                                            type={obj.type}
                                            placeholder={obj.placeholder}
                                        />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" type="email" placeholder="email">
                            {obj => {
                                return (
                                    <div>
                                        <input
                                            {...obj.input}
                                            type={obj.type}
                                            placeholder={obj.placeholder}
                                        />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                    </div>
                    <div>
                        <label>Повідомлення</label>
                        <Field name="message" type="text" placeholder="Ваше повідомлення">
                            {obj => {
                                return (
                                    <div>
                                        <textarea
                                            {...obj.input}
                                            type={obj.type}
                                            placeholder={obj.placeholder}
                                        />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                    </div>
                    <div className="button">
                        <button type="submit" disabled={submitting || pristine}>
                            Надіслати повідомлення
                        </button>
                    </div>
                </form>
            )}
        />
    </div>
        <div className='feedback-info col-md-5'>
            <h2>Контактна інформація</h2>
            <p>(044) 500-00-00</p>
            <p>(044) 505-89-89</p>
            <p>0 (800) 309-444</p>

            <p><b>Графік роботи кол-центру</b></p>
            <p>с 8:00 до 21:00</p>
        </div>
    </div>
);

export default FeedbackForm;

