import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';

const LineChart = (props) => {
    const [params, setParams] = useState(props);

    useEffect(() => {
        // props가 변경될 때마다 params를 업데이트합니다.
        setParams(props);
    }, [props]);

    return (
        <div className="LineChart">
            <img src={logo} className="App-logo" alt="logo" />
            txt : {params.txt}
        </div>
    )
}

export default LineChart;
