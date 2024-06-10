import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import DashboardCard from '../../components/dashboard/card';
import ActivityTimeline from '../../components/dashboard/graph';
import UserAttackTable from '../../components/dashboard/table';
import ChartCard from '../../components/dashboard/chartCard';
import CustomPieChart from '../../components/dashboard/pie';
import { fetchData } from '../../services/api';

import './dashboard.css'

const Dashboard = () => {
  const [attackDataAPI, setAttackDataAPI] = useState([]);
  const dashboardTitle = "Dashboard";

  useEffect(() => {
    const loadData = async () => {
      try {
        const cards = await fetchData('/logs');
        const activity = await fetchData('/logs');
        const pieChart = await fetchData('/logs');
        const attacks = await fetchData('/logs');
        setAttackDataAPI(attacks);
      } catch (error) {
        console.log('error', error)
      } finally {
      }
    };

    loadData();
  }, []);

  const cardsData = [
    { title: 'Total Keystrokes', content: '1000', color: 'yellow' },
    { title: 'Most Commonly Typed Words', content: (
        <ul>
          <li>password: 50</li>
          <li>username: 30</li>
          <li>login: 20</li>
        </ul>
      ), color: 'orange' 
    },
    { title: 'Top Active Users', content: (
        <ul>
          <li>user1: 500 keystrokes</li>
          <li>user2: 300 keystrokes</li>
          <li>user3: 200 keystrokes</li>
        </ul>
      ), color: 'green' 
    },
    { title: 'Sensitive Information', content: (
        <ul>
          <li>password123</li>
          <li>admin123</li>
          <li>credit card number: 1234-5678-9012-3456</li>
        </ul>
      ), color: '#3c3cc9' 
    },
  ];

  const activityData = [
    { "date": "2024-06-01", "keystrokes": 50, "activity": "Low" },
    { "date": "2024-06-02", "keystrokes": 75, "activity": "Medium" },
    { "date": "2024-06-03", "keystrokes": 60, "activity": "High" },
    { "date": "2024-06-04", "keystrokes": 80, "activity": "Medium" },
    { "date": "2024-06-05", "keystrokes": 55, "activity": "High" },
    { "date": "2024-06-06", "keystrokes": 70, "activity": "Medium" },
    { "date": "2024-06-07", "keystrokes": 65, "activity": "High" },
    { "date": "2024-06-08", "keystrokes": 85, "activity": "Medium" },
    { "date": "2024-06-09", "keystrokes": 45, "activity": "High" },
    { "date": "2024-06-10", "keystrokes": 90, "activity": "Medium" },
    { "date": "2024-06-11", "keystrokes": 55, "activity": "High" },
    { "date": "2024-06-12", "keystrokes": 70, "activity": "Medium" },
    { "date": "2024-06-13", "keystrokes": 60, "activity": "High" }
  ];

  const pieChartData = [
    { type: '06.09.2024', value: 27 },
    { type: '06.10.2024', value: 25 },
    { type: '06.11.2024', value: 18 },
    { type: '06.12.2024', value: 15 },
    { type: '06.13.2024', value: 10 },
    { type: '06.14.2024', value: 5 },
    { type: '06.15.2024', value: 3 },
  ];

  return (
    <div style={{margin: 'auto', width: '100vw'}}>
    <div style={{fontSize: '32px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: '1.5%', marginBottom: '20px' }}>{dashboardTitle}</div>
    <div style={{display: 'flex', gap: '2%', width: '60vw', marginLeft: '2.5vw'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{width: '60vw',display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '2%'}}>
    {cardsData.map((card, index) => (
      <DashboardCard key={index} title={card.title} content={card.content} color={card.color} />
    ))}
    </div>
    <div style={{height: '40vh'}}>
      <UserAttackTable data={attackDataAPI} />
    </div>
    </div>
    <Row style={{display: 'flex', flexDirection: 'row', minWidth: '35vw'}} gutter={16}>
    <Col span={24} style={{height: '40vh'}}>
      <ChartCard 
        title="Activity Timeline"
        content={<ActivityTimeline data={activityData} />}
      />
    </Col>
    <Col style={{paddingTop: '2%', height: '40vh'}} span={24} >
      <ChartCard 
        title="Keystrokes Distribution"
        content={<CustomPieChart data={pieChartData} />}
      />
    </Col>
  </Row>
  </div>
    
    </div>
  );
};

export default Dashboard;
