import {Link, useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import EditSingleOrder from "./EditSingleOrder";

// const Input = (props) => {
//     return (
//         <div className="inputbox-content">
//             <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={props.onChange}
//                    className={`${props.err && "input-error"}`} required/>
//             <label htmlFor={props.id}>{props.labelText}</label>
//             {/*{props.err &&*/}
//             {/*    // <span className="error-message">{props.err}</span>}*/}
//             {/*<span className="underline"/>*/}
//         </div>
//     );
// };

const EditOrder = ({singleOrder, onDelete, onUpdate, isEditing, setIsEditing, onSubmit, order, setOrder}) => {
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setIsEditing(false);
    //     onUpdate(ord.id, editedOrder);
    // }
    // function handleSubmit(event) {
    //     event.preventDefault();
    // }
    // function handleUpdate(editedOrder) {
    //     setIsEditing(false);
    //     onUpdate(ord.id, editedOrder);
    // }

    // function handleUpdate(editedOrder, event) {
    //     console.log('submit')
    //     event.preventDefault();
    //
    //     setIsEditing(false);
    //     onUpdate(ord.id, editedOrder);
    // }



    // const [errorMessages, setErrorMessages] = useState(null);

    // function handleChange(event) {
    //     const {name, value} = event.target;
    //
    //     setOrder(prevValues => ({
    //         ...prevValues,
    //         [name]: value,
    //     }));
    // }

    // function validate(order) {
    //     const errorMessages = {};
    //
    //     if (!order.name) {
    //         errorMessages.name = 'Pole nie może być puste!';
    //     } else if (order.name.length < 3) {
    //         errorMessages.name = 'Podane imię jest zbyt krótkie!';
    //     }
    //
    //     if (!order.surname) {
    //         errorMessages.surname = 'Pole nie może być puste!';
    //     } else if (order.surname.length < 3) {
    //         errorMessages.surname = 'Podane nazwisko jest zbyt krótkie!';
    //     }
    //
    //     if (!order.email) {
    //         errorMessages.email = 'Pole nie może być puste!';
    //     } else if (!order.email.match('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')) {
    //         errorMessages.email = 'Podany email jest nieprawidłowy!';
    //     }
    //
    //     if (!order.phone) {
    //         errorMessages.phone = 'Pole nie może być puste!';
    //     } else if (!order.phone.match('(?:\\(?\\?)?(?:[-\\.\\(\\)\\s]*(\\d)){9}\\)?$')) {
    //         errorMessages.phone = 'Podany numer jest nieprawidłowy!';
    //     }
    //
    //     if (!order.city) {
    //         errorMessages.city = 'Pole nie może być puste!';
    //     } else if (order.city.length < 3) {
    //         errorMessages.city = 'Podane miasto jest nieprawdłowe!';
    //     }
    //
    //     if (!order.street) {
    //         errorMessages.street = 'Pole nie może być puste!';
    //     }
    //
    //     if (!order.postcode) {
    //         errorMessages.postcode = 'Pole nie może być puste!';
    //     } else if (!order.postcode.match('^[0-9]{2}-[0-9]{3}$')) {
    //         errorMessages.postcode = 'Podany kod pocztowy jest nieprawidłowy!';
    //     }
    //
    //     return Object.keys(errorMessages).length > 0
    //         ? errorMessages
    //         : null;
    // }

    // const navigate = useNavigate();
    // const handleSubmit = (editedOrder, event) => {
    //     console.log('submit')
    //     event.preventDefault();
    //
    //     setIsEditing(false);
    //     onUpdate(ord.id, editedOrder);
    //     console.log(order);
    //     // const errorMessages = validate(order);
    //     // setErrorMessages(errorMessages);
    //     // if (!errorMessages) {
    //     //     navigate('/order/basket/summary');
    //     // }
    //     // console.log(errorMessages);
    //
    // };
    return (
        <div>tak
            <EditSingleOrder  singleOrder={singleOrder} submitLabel="Zapisz" onSubmit={onSubmit} order={order} setOrder={setOrder} setIsEditing={setIsEditing} isEditing={isEditing}  onUpdate={onUpdate} />
            </div>

        // <>
        //     <td className="specifications">
        //         <span className="spec-title"><strong>1Stolik kawowy</strong> {ord.material} {ord.color}</span>
        //         <div className="spec-specs">
        //             <div className="spec-group">
        //                 <span>Szerokość: <span className="spec-underline">{ord.width} cm</span></span>
        //                 <span>Długość: <span className="spec-underline">{ord.length} cm</span></span>
        //                 <span>Wysokość: <span className="spec-underline">{ord.height} cm</span></span>
        //             </div>
        //             <div className="spec-group">
        //                 <span>Blat: <span className="spec-underline">{ord.material}</span></span>
        //                 <span>Grubość blatu: <span
        //                     className="spec-underline">{ord.thickness} cm</span></span>
        //                 <span>Kolor nóg: <span className="spec-underline">{ord.color}</span></span>
        //             </div>
        //         </div>
        //     </td>
        //     <td className="summary-table-price">{ord.price} zł</td>
        //     <td className="address">
        //         <div>
        //             <span>{ord.name} {ord.surname}</span>
        //             <span>{ord.street}</span>
        //             <span>{ord.postcode}, {ord.city}</span>
        //             <span>{ord.phone}</span>
        //             <Link
        //                 to='#'
        //                 onClick={(e) => {
        //                     window.location.href = `mailto:${ord.email}`;
        //                     e.preventDefault();
        //                 }}
        //             >
        //                 {ord.email}
        //             </Link>
        //         </div>
        //     </td>
        //     <td className="manager-actions">
        //         <div>
        //             <button onSubmit={handleUpdate}>Zapisz</button>
        //             {/*<>*/}
        //             {/*    {isEditing ? (*/}
        //             {/*        <div className="edit-modal">*/}
        //             {/*            <EditOrder ord={ord} onSubmit={handleUpdate}/>*/}
        //
        //
        //             {/*        </div>*/}
        //             {/*    ) : null*/}
        //             {/*    }*/}
        //             {/*</>*/}
        //         </div>
        //     </td>
        //
        //
        // </>
    )
}

export default EditOrder;