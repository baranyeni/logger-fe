import React from 'react';
import { Area } from '@ant-design/charts';

const ActivityTimeline = ({ data }) => {
  const config = {
    data,
    xField: 'date',
    yField: 'keystrokes',
    style: {
      fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
    },
    xAxis: { label: { formatter: (text) => new Date(text).toLocaleDateString() } },
    yAxis: { label: { formatter: (text) => `${text} keystrokes` } },
    line: {
      style: {
        stroke: 'darkgreen',
        strokeWidth: 2,
      },
    },
  };

  return <Area {...config} />;
};

export default ActivityTimeline;
