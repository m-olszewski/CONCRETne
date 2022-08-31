import React from 'react';
import EditSingleOrder from "./EditSingleOrder";

const EditOrder = ({singleOrder, setIsEditing, onSubmit}) => {

    return (
        <EditSingleOrder singleOrder={singleOrder} onSubmit={onSubmit} setIsEditing={setIsEditing}/>
    )
}

export default EditOrder;