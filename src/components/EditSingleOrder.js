import React, {useState} from 'react';

function mapSingleOrderToFormValues(singleOrder) {
    return {
        width: singleOrder.width,
        length: singleOrder.length,
        height: singleOrder.height,
        material: singleOrder.material,
        thickness: singleOrder.thickness,
        color: singleOrder.color,
        price: singleOrder.price,
        name: singleOrder.name,
        surname: singleOrder.surname,
        email: singleOrder.email,
        phone:  singleOrder.phone,
        city: singleOrder.city,
        street: singleOrder.street,
        postcode: singleOrder.postcode,
    };
}

function mapFormValuesToOrd(values) {
    return {
        width: values.width,
        length: values.length,
        height: values.height,
        material: values.material,
        thickness: values.thickness,
        color: values.color,
        price: values.price,
        name: values.name,
        surname: values.surname,
        email: values.email,
        phone:  values.phone,
        city: values.city,
        street: values.street,
        postcode: values.postcode,
    };
}
const Input = (props) => {
    return (
        <div>
            <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={props.onChange}
                   required/>
            <label htmlFor={props.id}>{props.labelText}</label>
            {/*{props.err &&*/}
            {/*    // <span className="error-message">{props.err}</span>}*/}
            {/*<span className="underline"/>*/}
        </div>
    );
};
const EditSingleOrder = ({ singleOrder, submitLabel, onSubmit}) => {

    const initialValues = mapSingleOrderToFormValues(singleOrder);
    const [values, setValues] = useState(initialValues);
    // const [errorMessages, setErrorMessages] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;
        setValues(values => ({ ...values, [name]: value }));


    }

    function handleSubmit(event) {
        event.preventDefault();

        // console.log('handleSubmit', order);
        // const errorMessages = validate(order);
        // setErrorMessages(errorMessages);
        // if (errorMessages) return;

        // if (typeof onSubmit !== 'function') return;
        // setValues(values);

        onSubmit(mapFormValuesToOrd(values));
        setValues(mapFormValuesToOrd(values))
    }
    return (
        <form noValidate onSubmit={handleSubmit}>
            <Input id={"name"} name={"name"} type={"text"} labelText={"Imię"} value={values.name}
                   onChange={handleChange}/>
            <Input id={"surname"} name={"surname"} type={"text"} labelText={"Nazwisko"} value={values.surname}
                   onChange={handleChange}/>
            <input type="submit" value={submitLabel} />

        </form>
    );
};

export default EditSingleOrder;