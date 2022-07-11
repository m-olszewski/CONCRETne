import React, {useState} from 'react';
import '../scss/_Form.scss'

export const FormTable = () => {
    const [specsParams, setSpecsParams] = useState({
        width: '',
        length: '',
        height: '',
        material: '',
        thickness: '',
        color: ''
    });

    // const [width, setWidth] = useState("");
    // const handleWidthChange = (e) => {
    //     setWidth(e.target.value);
    // };
    // const [length, setLength] = useState("");
    // const handleLengthChange = (e) => {
    //     setLength(e.target.value);
    // };
    // const [height, setHeight] = useState("");
    // const handleHeightChange = (e) => {
    //     setHeight(e.target.value);
    // };
    // const [material, setMaterial] = useState("");
    // const handleMaterialChange = (e) => {
    //     setMaterial(e.target.value);
    //     setDisable(false);
    //     if (e.target.value === 'Marmur') {
    //         setDisable(true);
    //     } else {
    //         setDisable(false);
    //     }
    // };
    // const [thickness, setThickness] = useState("");
    // const handleThicknessChange = (e) => {
    //     setThickness(e.target.value);
    // };
    // const [color, setColor] = useState("");
    // const handleColorChange = (e) => {
    //     setColor(e.target.value);
    // };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setSpecsParams(prevParams => ({
            ...prevParams,
            [name]: value,
        }));
    }

    const paramsGeneral = {...specsParams}
    console.log(paramsGeneral.material)

    return (
        <>
            <h2 className="order-form-title">Specyfikacja stolika</h2>

            <div className="selectbox-content">
                <label htmlFor="width">Szerokość stolika:</label>
                <select id="width" name="width" value={specsParams.width} onChange={handleChange}>
                    <option>wybierz</option>
                    <option value="40">40 cm</option>
                    <option value="50">50 cm</option>
                    <option value="60">60 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="length">Długość stolika:</label>
                <select id="length" name="length" value={specsParams.length} onChange={handleChange}>
                    <option>wybierz</option>
                    <option value="60">60 cm</option>
                    <option value="70">70 cm</option>
                    <option value="80">80 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="height">Wysokość stolika: </label>
                <select id="height" name="height" value={specsParams.height} onChange={handleChange}>
                    <option>wybierz</option>
                    <option value="35">35 cm</option>
                    <option value="40">40 cm</option>
                    <option value="45">45 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="material">Materiał blatu: </label>
                <select id="material" name="material" value={specsParams.material} onChange={handleChange}>
                    <option>wybierz</option>
                    <option value="Marmur">Marmur</option>
                    <option value="Beton">Beton</option>
                    <option value="Dąb">Dąb</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="thickness">Grubość blatu: </label>
                <select id="thickness" name="thickness" value={specsParams.thickness} onChange={handleChange}>
                    <option>wybierz</option>
                    <option value="1" disabled={specsParams.material === 'Marmur' ? true : false}>1 cm</option>
                    <option value="2">2 cm</option>
                    <option value="3">3 cm</option>
                    <option value="4" disabled={specsParams.material === 'Marmur' ? true : false}>4 cm</option>
                    <option value="5" disabled={specsParams.material === 'Marmur' ? true : false}>5 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label htmlFor="color">Kolor nóg: </label>
                <select id="color" name="color" value={specsParams.color} onChange={handleChange}>
                    <option>wybierz</option>
                    <option value="czarny">czarny</option>
                    <option value="biały">biały</option>
                    <option value="złoty">złoty</option>
                    <option value="chrom">chrom</option>
                </select>
            </div>
        </>
    );
};