import React from "react";
import CreateChart from "../createChart/createChart.component";
import './chart.component.css'


const Chart = (props)=>{
    const Chart_Data = [
        {lable:'jan',value :0},
        {lable:'feb',value: 0},
        {lable:'mar',value:0},
        {lable:'apr',value: 0},
        {lable:'may',value:0},
        {lable: 'jun',value:0},
        {lable:'Jul',value:0},
        {lable:'Aug',value:0},
        {lable: 'Sep',value:0},
        {lable: 'Oct',value :0},
        {lable:'Nov',value:0},
        {lable:'Dec',value:0}
    ] 
     for(const item of props.expenses){
         const expenseMonth = item.date.getMonth();
         Chart_Data[expenseMonth].value += item.amount;    
     }
     const values = Chart_Data.map(data=>(data.value))
      const Max = Math.max(...values)

    return (
        <div className="chart">
            {Chart_Data.map(({lable, value})=>(<CreateChart max = {Max} key = {lable} value = {value}  lable = {lable} />))}

        </div>
    )
}
export default Chart;