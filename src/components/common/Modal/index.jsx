/* eslint-disable react/prop-types */
import { Modal, Button } from 'antd';
import './index.scss';

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  status,
  setStatus,
  sendPost,
}) => {
  return (
    <>
      <Modal
        title='Create a Post'
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            onClick={sendPost}
            key='submit'
            type='primary'
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <input
          className='modal-input'
          placeholder='What do you want to talk about?'
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />
      </Modal>
    </>
  );
};
export default ModalComponent;
