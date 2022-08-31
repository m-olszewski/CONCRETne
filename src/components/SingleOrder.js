import React, {useState} from 'react';
import {Link} from "react-router-dom";
import EditOrder from "./EditOrder";


const SingleOrder = ({singleOrder, onDelete, onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditButtonClick() {
        setIsEditing(true);
    }

    function handleUpdate(editedOrder, event) {
        console.log('submit')
        // event.preventDefault();

        setIsEditing(false);
        onUpdate(singleOrder.id, editedOrder);
    }

    function handleDeleteButtonClick() {
        onDelete(singleOrder.id);
    }


    return (<>
            {isEditing ? (

                    <EditOrder  setIsEditing={setIsEditing} isEditing={isEditing} onUpdate={onUpdate} singleOrder={singleOrder} onSubmit={handleUpdate}/>

                ) :(
                <>
                    <td className="specifications">
                            <span
                                className="spec-title"><strong>Stolik kawowy</strong> {singleOrder.material} {singleOrder.color}</span>

                        <div className="spec-specs">
                            <div className="spec-group">
                                <span>Szerokość: <span className="spec-underline">{singleOrder.width} cm</span></span>
                                <span>Długość: <span className="spec-underline">{singleOrder.length} cm</span></span>
                                <span>Wysokość: <span className="spec-underline">{singleOrder.height} cm</span></span>
                            </div>
                            <div className="spec-group">
                                <span>Blat: <span className="spec-underline">{singleOrder.material}</span></span>
                                <span>Grubość blatu: <span
                                    className="spec-underline">{singleOrder.thickness} cm</span></span>
                                <span>Kolor nóg: <span className="spec-underline">{singleOrder.color}</span></span>
                            </div>
                        </div>
                    </td>
                    <td className="summary-table-price">{singleOrder.price} zł</td>
                    <td className="address">
                        <div>
                            <span>{singleOrder.name} {singleOrder.surname}</span>
                            <span>{singleOrder.street}</span>
                            <span>{singleOrder.postcode}, {singleOrder.city}</span>
                            <span>{singleOrder.phone}</span>
                            <Link
                                to='#'
                                onClick={(e) => {
                                    window.location.href = `mailto:${singleOrder.email}`;
                                    e.preventDefault();
                                }}
                            >
                                {singleOrder.email}
                            </Link>
                        </div>
                    </td>
                    <td className="manager-actions">
                        <div>
                            <button onClick={handleDeleteButtonClick}>Usuń</button>
                            <button onClick={handleEditButtonClick}>Edytuj</button>
                            <>


                            </>
                        </div>
                    </td>


                </>)}
        </>
    );
};

export default SingleOrder;