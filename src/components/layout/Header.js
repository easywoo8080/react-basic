import React, { useState, useEffect } from 'react';

const Header = (props) => {
    const [params, setParams] = useState(props);

    useEffect(() => {
        // props가 변경될 때마다 params를 업데이트합니다.
        setParams(props);
    }, [props]);

    return (
        <div className="label">
            <span className="label-text">
                <div className='label-txt'>{params.txt}</div>
                <div className='label-value'>{params.value}</div>
                <div className='label-unit'>{params.unit}</div>
            </span>
        </div>
    )
}

export default Header;
