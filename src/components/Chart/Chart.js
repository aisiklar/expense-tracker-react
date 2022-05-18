import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => {
        return dataPoint.value;
    })
    const totalMaximum = Math.max(...dataPointValues);
    console.log('logging dataPoints elements:');
    console.log(`props.dataPoints: ${props.dataPoints}`);
    /* props.dataPoints.map(dataPoint => {
        return
            console.log(`dataPoint.label: ${dataPoint.label}`)
            console.log(`dataPoint.value: ${dataPoint.value}`)
        });
 */
    for (let dataPointx of props.dataPoints) {
        console.log(dataPointx.label);
        console.log(dataPointx.value);
    }

    return (
        <div className="class">
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

