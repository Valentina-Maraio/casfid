import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

const NewsInfo = (props) => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  if (props.visible) {
    return null;
  }
  return (
    <>
      <Modal
        scroll
        blur
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={visible}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {props.título} - {props.autor}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">{props.summary}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Button size="xs" auto flat color="gray" onPress={handler}>
        Info
      </Button>
    </>
  );
};

export default NewsInfo;
