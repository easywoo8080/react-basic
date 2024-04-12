import { React } from "react";

import LabelVertical from "../../components/label/LabelVertical";
import LineChart from "../../components/chart/LineChart";
import axios from "axios";

const InfluentFlow = () =>{
//    const response = await Axios.get('/ptn/ajaxPtnInfluent.do', {
//     params: {
//         ptnCode: 'FIT-201A'
//     }
//    })

    // const proxyAddress = process.env.REACT_APP_PROXY_ADDRESS;
    // console.log('proxyAddress',  proxyAddress )
    // // axios 요청 보내기
    // axios.get(proxyAddress + '/ptn/ajaxPtnInfluent.do')
    // .then(function(response) {
    //     console.log(response);
    // });

    // 프록시 서버의 주소
//const proxyAddress = process.env.REACT_APP_PROXY_ADDRESS;

// Axios 요청 보내기 http://localhost:9190/ptn/ajaxPtnInfluent.do
//axios.get(proxyAddress + '/ptn/ajaxPtnInfluent.do')
// axios.get('http://localhost:9190/ptn/ajaxPtnInfluent.do', {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//         'Access-Control-Allow-Credentials': true
//     }
// }).then(function(response) {
//     console.log(response);
// }).catch(function(error) {
//     console.error(error);
// });

axios.get('http://localhost:9190/ptn/ajaxPtnInfluent.do')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.error(error);
    });



    return (
        <div className="contents ptn-influentFlow">
            <div className="layoutVertical">
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
    )
}

export default InfluentFlow;
