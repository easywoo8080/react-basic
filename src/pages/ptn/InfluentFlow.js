import { React } from "react";

import LabelVertical from "../../components/label/LabelVertical";
import LineChart from "../../components/chart/LineChart";

const InfluentFlow = () =>{
    return (
        <div className="contents ptn-influentFlow">
            <div className="layoutVertical">
                <div>
                    <div className="layoutHor">
                        <div >
                            <LabelVertical txt={'총 유입유량'} value={'24'} unit={'m³/h'} />
                            <LabelVertical txt={'1계열 유입유량 (FIT-201A)'} value={'419'} unit={'m³/h'}/>
                            <LabelVertical txt={'2계열 유입유량 (FIT-201B)'} value={'433'} unit={'m³/h'}/>
                        </div>
                        <div>
                            <LineChart txt={'lineChart'}/>
                        </div>
                    </div>
                 </div>  
                 <div>
                    <div className="layoutHor">
                        <div >
                            <LabelVertical txt={'dfzzzzzzs'} value={'860'} unit={'m³/h'} />
                            <LabelVertical txt={'반류수량'} value={'419'} unit={'m³/h'}/>
                            
                        </div>
                        <div>
                            <LineChart txt={'lineChart'}/>
                        </div>
                    </div>
                 </div>  
            </div>
        </div>
    )
}

export default InfluentFlow;
