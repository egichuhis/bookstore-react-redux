import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const Chart = () => <CircularProgressbar value={percentage} text={`${percentage}%`} />;

export default Chart;
