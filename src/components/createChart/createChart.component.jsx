import React from "react";

import './createChart.style.css'

const CreateChart = props=>{
    let fillHight = '0%'
if(props.max > 0){
           fillHight = Math.round((props.value / props.max) * 100) + '%';

}


    return (

        <div className="create-chart-controls">
            <div className="create-chart-control">
                <div className="create-chart-fill" style={{height: fillHight, backgroundColor:  '#4826b9'}}></div>
            </div>
            <div className="create-chart-lable">{props.lable}</div>
        </div>
    )
}
export default CreateChart