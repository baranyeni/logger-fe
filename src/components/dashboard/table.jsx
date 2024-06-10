import React, { useState } from 'react';
import { Space, Table, Pagination, Button, Tooltip, Modal } from 'antd';
import moment from 'moment';

const UserAttackTable = ({ data, loading, onClickDetailButton }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const ReplaceReturnWithNewlines = ({ text = '' }) => {
    const modifiedText = text.replace(/\[return\]/g, '\n')
        .replace(/\[[^\]]*\]/g, '');

    return (
        <div>
          <pre style={{textWrap: "pretty"}}>{modifiedText}</pre>
        </div>
    );
  };

    const columns = [
    {
      title: 'User',
      dataIndex: 'hostname',
      key: 'hostname',
      render: (text) => (text === null || text === "") ? '-' : text,
      ellipsis: true,
    },
    {
      title: 'IP Address',
      dataIndex: 'ipAddress',
      key: 'ipAddress',
      render: (text) => (text === null || text === "") ? '-' : text,
    },
    {
      title: 'Timestamp',
      dataIndex: 'date',
      key: 'date',
      render: (text) => {
        if (!text) return '-';
        return moment.unix(text).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'Logs',
      dataIndex: 'log',
      key: 'log',
      ellipsis: true,
      render: (text) => (text === null || text === "") ? '-' : text,
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Tooltip title="Download Details">
            <Button onClick={() => handleViewDetails(record)} type="link">
              Detail
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleViewDetails = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  return (
    <>
      <Table
        columns={columns}
        loading={loading}
        dataSource={data}
        rowKey={(record) => record?.id}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
      />
      {selectedRecord && (
        <Modal
          title="Log Details"
          open={isModalVisible}
          onCancel={handleCloseModal}
          footer={[
            <Button key="close" onClick={handleCloseModal}>
              Close
            </Button>
          ]}
        >
          <p><strong>User:</strong> {selectedRecord.hostname}</p>
          <strong>Logs:</strong>
          <ReplaceReturnWithNewlines text={selectedRecord.log} />
        </Modal>
      )}
    </>
  );
};

export default UserAttackTable;