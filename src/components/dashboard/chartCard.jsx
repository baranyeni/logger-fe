import React, { useState } from 'react';
import { Card, Modal, Button, Tooltip, Select } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';

const ChartCard = ({ title, content, options = [], loading = false, config }) => {
  const [open, setOpen] = useState(false);
  const [visualizeType, setVisualizeType] = useState(options.length ? options[0].value : '');

  return (
    <>
      <Card
        style={{ height: "100%" }}
        title={title}
        extra={
          <Tooltip title="Full Screen">
            <Button onClick={() => setOpen(true)} icon={<FullscreenOutlined />} />
          </Tooltip>
        }
      >
        {options.length > 0 && (
          <div style={{ marginBottom: "14px", marginLeft: "-3px", textAlign: "left" }}>
            <label style={{ marginRight: "1%" }}>Visualize: </label>
            <Select
              value={visualizeType}
              options={options.map(option => ({ label: option.label, value: option.value }))}
              style={{ width: '100%' }}
              key={visualizeType}
              disabled={loading}
              onChange={e => setVisualizeType(e)}
              allowClear
            />
          </div>
        )}
        {content}
        <Modal
          open={open}
          centered
          title={title}
          onCancel={() => setOpen(false)}
          width={1200}
          footer={null}
        >
          {content}
        </Modal>
      </Card>
    </>
  );
};

export default ChartCard;
