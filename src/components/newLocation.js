import React from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import { Mail } from '../../models/Mail';
import { Password } from '../../models/Password';
import { useSession } from 'next-auth/react';
import { Dropdown, User } from '@nextui-org/react';

export default function Location(visible) {
  // const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const { data: session } = useSession();

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      {/* <Button auto css={{ px: '$3' }} rounded>
        Yer Ekle
      </Button> */}

      <Modal closeButton open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text size={18}>Yer oluştur</Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='İsim'
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Email'
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Email'
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Password'
            contentLeft={<Password fill='currentColor' />}
          />
          <Row justify='space-between'>
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
