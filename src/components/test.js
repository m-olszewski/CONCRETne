import React, {useEffect, useState} from 'react';
import '../scss/_Test.scss'

const Test = () => {
    const [data, setData] = useState(false);
    const API = "http://localhost:3000";

    useEffect(() => {
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <div className="test">
            {}
        </div>
    );
};

export default Test;