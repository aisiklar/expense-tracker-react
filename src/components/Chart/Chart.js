import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => {
        return dataPoint.value;
    })
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="class">
            {props.dataPoints.map(dataPoint =>{
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}>
                </ChartBar>
            })}
        </div>
    )
}

export default Chart;

