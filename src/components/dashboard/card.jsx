import React from 'react';
import { Card } from 'antd';

const DashboardCard = ({ title, content, color }) => {
  const cardStyle = {
    width: '13vw',
    height: '25vh',
    border: `2px solid ${color}`,
  };

  return (
    <Card className='dashboard' title={title} bordered={true} style={cardStyle}>
      {content}
    </Card>
  );
};

export default DashboardCard;
