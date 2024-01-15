import React from "react";

import './filterByDate.style.css'

const FilterByDate = (props)=>{

    const selectedYearHandler = event=>{
        props.onFilterByYear(event.target.value);
    }

    return (

        <div className="filter">
            <label htmlFor="filter">Filter by year</label>
            <select value={props.selected} id="filter" onChange={selectedYearHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    )
}
export default FilterByDate;