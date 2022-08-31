import React, {useState} from 'react';
import '../scss/_EditSingleOrder.scss'

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
        phone: singleOrder.phone,
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
        phone: values.phone,
        city: values.city,
        street: values.street,
        postcode: values.postcode,
    };
}

const Input = (props) => {
    return (
        <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={props.onChange}
               required/>
    );
};
const EditSingleOrder = ({singleOrder, onSubmit, setIsEditing}) => {

    const initialValues = mapSingleOrderToFormValues(singleOrder);
    const [values, setValues] = useState(initialValues);

    function handleChange(event) {
        const {name, value} = event.target;
        setValues(values => ({...values, [name]: value}));
    }

    function handleSubmit() {
        onSubmit(mapFormValuesToOrd(values));
        setValues(mapFormValuesToOrd(values))
    }
    function handleCancel() {
        setIsEditing(false);
    }

    const costs = {
        steel: 19,     // 1 mb
        paint: 80,     // 1 m2
        chromium: 800, // 1 m2
        marble: {
            gr2cm: 2000,
            gr3cm: 3500
        },             // 1 m2
        concrete: 6000,// 1 m3
        oak: {
            gr2cm: 500,
            gr3cm: 800,
            gr4cm: 900
        },             // 1 m2

    }

    let frame = (((values.width * 4) + (values.length * 4) + (values.height * 4)) / 100);

    let area = (values.width * values.length) / 10000;
    let volume = frame * 4 * 0.03;

    const framePrice = () => {
        return frame * costs.steel;
    }

    const tableTopCost = () => {
        let tabletop;

        switch (values.material) {
            case 'Marmur':
                if (values.thickness === '2') {
                    tabletop = area * costs.marble.gr2cm;
                }
                if (values.thickness === '3') {
                    tabletop = area * costs.marble.gr3cm;
                }
                break;
            case 'Beton':
                tabletop = area * values.thickness * 0.01 * costs.concrete
                break;
            case 'Dąb':
                if (values.thickness === '2') {
                    tabletop = area * costs.oak.gr2cm;
                }
                if (values.thickness === '3') {
                    tabletop = area * costs.oak.gr3cm;
                }
                if (values.thickness === '4') {
                    tabletop = area * costs.oak.gr4cm;
                }
                break;
        }
        return tabletop;
    }

    const paintCost = () => {
        let paintcost;
        if (values.color === 'chrom') {
            paintcost = volume * costs.chromium;
        } else {
            paintcost = volume * costs.paint;
        }
        return paintcost;
    }

    values.price = Math.ceil(tableTopCost() + framePrice() + paintCost()) + 1000;

    return (<>
            <td className="edit-specifications">
                <span className="edit-spec-title"><strong>Stolik kawowy</strong> {values.material} {values.color}</span>
                <div className="edit-spec-specs">
                    <div className="edit-spec-group">
                        <span>Szerokość: <span className="edit-spec-underline">
                            <select id="width" name="width" value={values.width} onChange={handleChange} required>
                                <option hidden disabled value="">wybierz</option>
                                <option value="40">40 cm</option>
                                <option value="50">50 cm</option>
                                <option value="60">60 cm</option>
                            </select>
                        </span></span>
                        <span>Długość: <span className="edit-spec-underline">
                            <select id="length" name="length" value={values.length} onChange={handleChange} required>
                                <option hidden disabled value="">wybierz</option>
                                <option value="60">60 cm</option>
                                <option value="70">70 cm</option>
                                <option value="80">80 cm</option>
                            </select>
                        </span></span>
                        <span>Wysokość: <span className="edit-spec-underline">
                            <select id="height" name="height" value={values.height} onChange={handleChange} required>
                                <option hidden disabled value="">wybierz</option>
                                <option value="35">35 cm</option>
                                <option value="40">40 cm</option>
                                <option value="45">45 cm</option>
                             </select>
                        </span></span>
                    </div>
                    <div className="edit-spec-group">
                        <span>Blat: <span className="edit-spec-underline">
                            <select id="material" name="material" value={values.material} onChange={handleChange} required>
                                <option hidden disabled value="">wybierz</option>
                                <option value="Marmur">Marmur</option>
                                <option value="Beton">Beton</option>
                                <option value="Dąb">Dąb</option>
                            </select>
                        </span></span>
                        <span>Grubość blatu: <span className="edit-spec-underline">
                            <select id="thickness" name="thickness" value={values.thickness} onChange={handleChange} required>
                                <option hidden disabled value="">wybierz</option>
                                <option value="1" disabled={values.material === 'Marmur' || values.material === 'Dąb'}>1 cm</option>
                                <option value="2">2 cm</option>
                                <option value="3">3 cm</option>
                                <option value="4" disabled={values.material === 'Marmur'}>4 cm</option>
                                <option value="5" disabled={values.material === 'Marmur' || values.material === 'Dąb'}>5 cm</option>
                            </select>
                        </span></span>
                        <span>Kolor nóg: <span className="edit-spec-underline">
                            <select id="color" name="color" value={values.color} onChange={handleChange} required>
                                <option hidden disabled value="">wybierz</option>
                                <option value="czarny">czarny</option>
                                <option value="biały">biały</option>
                                <option value="złoty">złoty</option>
                                <option value="chrom">chrom</option>
                            </select>
                        </span></span>
                    </div>
                </div>
            </td>
            <td className="edit-summary-table-price">{values.price} zł</td>
            <td className="edit-address">
                <div className='edit-address-box'>
                    <span className='edit-address-span'>
                        <div className='inline'>
                            <Input id={"name"} name={"name"} type={"text"} value={values.name}
                                   onChange={handleChange}/>
                            <Input id={"surname"} name={"surname"} type={"text"} value={values.surname}
                                   onChange={handleChange}/>
                        </div>
                    </span>

                    <span className='edit-address-span'>
                        <Input id={"street"} name={"street"} type={"text"}
                               value={values.street}
                               onChange={handleChange}/>
                    </span>
                    <span className='edit-address-span'>
                        <div className='inline'>
                            <Input id={"postcode"} name={"postcode"} type={"text"} value={values.postcode}
                                   onChange={handleChange}/>
                            <Input id={"city"} name={"city"} type={"text"} value={values.city}
                                   onChange={handleChange}/>
                            </div>
                    </span>
                    <span className='edit-address-span'>
                        <Input id={"phone"} name={"phone"} type={"text"}
                               value={values.phone}
                               onChange={handleChange}/>
                    </span>
                    <span className='edit-address-span'>
                        <Input id={"email"} name={"email"} type={"text"}
                               value={values.email}
                               onChange={handleChange}/>
                    </span>
                </div>
            </td>
            <td className="edit-manager-actions">
                <div className='edit-manager-actions-box'>
                    <button className='edit-manager-actions-btn' onClick={handleSubmit}>Zapisz</button>
                    <button className='edit-manager-actions-btn' onClick={handleCancel}>Anuluj</button>
                </div>
            </td>
        </>
    );
};

export default EditSingleOrder;