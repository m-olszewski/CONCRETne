import React from 'react';
import '../scss/_Form.scss'

export const FormTable = ({order, setOrder}) => {

    const handleChange = (event) => {
        const {name, value} = event.target;
        setOrder(prevParams => ({
            ...prevParams,
            [name]: value,
        }))
        ;
    }

    return (
        <>
            <h2 className="order-form-title">Specyfikacja stolika</h2>

            <div className="selectbox-content">
                <label htmlFor="width">Szerokość stolika:</label>
                <select id="width" name="width" value={order.width} onChange={handleChange} required>
                    <option hidden disabled value="">wybierz</option>
                    <option value="40">40 cm</option>
                    <option value="50">50 cm</option>
                    <option value="60">60 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="length">Długość stolika:</label>
                <select id="length" name="length" value={order.length} onChange={handleChange} required>
                    <option hidden disabled value="">wybierz</option>
                    <option value="60">60 cm</option>
                    <option value="70">70 cm</option>
                    <option value="80">80 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="height">Wysokość stolika: </label>
                <select id="height" name="height" value={order.height} onChange={handleChange} required>
                    <option hidden disabled value="">wybierz</option>
                    <option value="35">35 cm</option>
                    <option value="40">40 cm</option>
                    <option value="45">45 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="material">Materiał blatu: </label>
                <select id="material" name="material" value={order.material} onChange={handleChange} required>
                    <option hidden disabled value="">wybierz</option>
                    <option value="Marmur">Marmur</option>
                    <option value="Beton">Beton</option>
                    <option value="Dąb">Dąb</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="thickness">Grubość blatu: </label>
                <select id="thickness" name="thickness" value={order.thickness} onChange={handleChange} required>
                    <option hidden disabled value="">wybierz</option>
                    <option value="1" disabled={order.material === 'Marmur' || order.material === 'Dąb'}>1 cm</option>
                    <option value="2">2 cm</option>
                    <option value="3">3 cm</option>
                    <option value="4" disabled={order.material === 'Marmur'}>4 cm</option>
                    <option value="5" disabled={order.material === 'Marmur' || order.material === 'Dąb'}>5 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="color">Kolor nóg: </label>
                <select id="color" name="color" value={order.color} onChange={handleChange} required>
                    <option hidden disabled value="">wybierz</option>
                    <option value="czarny">czarny</option>
                    <option value="biały">biały</option>
                    <option value="złoty">złoty</option>
                    <option value="chrom">chrom</option>
                </select>
            </div>
        </>
    );
};