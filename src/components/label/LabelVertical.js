import React, { useState, useEffect } from 'react';

const LabelVertical = (props) => {
    const [params, setParams] = useState(props);

    useEffect(() => {
        // props가 변경될 때마다 params를 업데이트합니다.
        setParams(props);
    }, [props]);

    return (
        <div className="LabelVertical">
            <span className="LabelVertical-text">
                <div className='LabelVertical-txt'>{params.txt}</div>
                <div className='LabelVertical-horizonh'>
                    <div className='LabelVertical-value'>{params.value}</div>
                    <span>
                         <div className='LabelVertical-unit'>{''+params.unit}</div>
                    </span>
                </div>
                
            </span>
        </div>
    )
}

export default LabelVertical;
