import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const Modala = (isModalVisible) => {
  return (
    <>
      <Modal title="Điều khoản đăng ký" visible={isModalVisible.isModalVisible} onOk={isModalVisible.handleOk} onCancel={isModalVisible.handleCancel} style ={{boxShadow:"none"}}>
        <p>Xin chào công ty!</p>
        <p>Chúng tôi xin thông báo khi đăng ký là công ty cung cấp tour du lịch, mỗi tour du lịch được đăng lên bạn phải trả phí cho chúng tôi là 10% giá tiền tour du lịch đó.</p>
        <p>Cám ơn bạn đã tham gia vào trang web của chúng tôi.</p>
        <p>Hãy liên lạc với chúng tôi qua email: travel@gmail.com để giải đáp thắc mắc</p>
      </Modal>
    </>
  );
};

export default Modala;