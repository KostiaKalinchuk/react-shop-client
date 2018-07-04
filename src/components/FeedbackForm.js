import React from "react";
import {Form, Field} from "react-final-form";

const onSubmit = async values => {
    // await sleep(300);
    // window.alert('Відправлено')
    window.alert(JSON.stringify(values, 0, 2))
};

const FeedbackForm = () => (
    <div className='feedback-form'>
        <h1>Зворотній зв'язок </h1>
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = "Заповніть поле";
                }
                if (!values.email) {
                    errors.email = "Заповніть поле";
                }
                if (!values.message) {
                    errors.message = "Заповніть поле";
                }
                return errors;
            }}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Імя</label>
                        <Field name="firstName" type="text" placeholder="First Name">
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
                        <Field name="message" type="textarea" placeholder="message">
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
                    <div className="buttons btn">
                        <button type="submit" disabled={submitting || pristine}>
                        Надіслати повідомлення
                        </button>
                    </div>
                </form>
            )}
        />
    </div>
);

export default FeedbackForm;

