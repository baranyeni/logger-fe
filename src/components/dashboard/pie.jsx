import React from 'react';
import { Pie } from '@ant-design/charts';

const CustomPieChart = ({ data }) => {
  const colors = ['white', '#FF6347', '#0000FF', '#FFD700', '#ADFF2F', '#FF69B4', '#00FFFF'];
  
  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    color: colors,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
        color: 'white'
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };

  return <Pie {...config} />;
};

export default CustomPieChart;
