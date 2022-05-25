import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => {
        return dataPoint.value;
    });
    console.log(`dataPointValues: ${dataPointValues}, ${typeof(dataPointValues)}`);
    const totalMaximum = Math.max(...dataPointValues);
    console.log(`totalMaximum: ${totalMaximum}`);
    console.log('logging dataPoints elements:');
    for (let dataPointx of props.dataPoints) {
        console.log(dataPointx.label);
        console.log(dataPointx.value);
    }

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>(
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}>
                </ChartBar>
            ))}
        </div>
    )
}

export default Chart;

