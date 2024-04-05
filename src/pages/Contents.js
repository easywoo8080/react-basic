import { React } from "react";

import Label from "../components/test/Label";


const Contents = (props) =>{
    
    return (
        <div className="contents">
            <div >
                <Label txt={'텍스트'} value={' 10'} unit={'m3/h'} />
                <Label />
                <Label />
            </div>
            <div>
                <Label txt={'텍스트'} />
                <Label />
                <Label />
            </div>
        </div>
    )
}

export default Contents;
