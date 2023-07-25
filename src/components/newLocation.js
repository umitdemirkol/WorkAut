import React from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import { Mail } from '../../models/Mail';
import { Password } from '../../models/Password';
import { useSession } from 'next-auth/react';
import { Dropdown, User } from '@nextui-org/react';

export default function Location({ visible, onClose }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    closeHandler();
  };

  return (
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='Password'
          contentLeft={<Password fill='currentColor' />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color='error' onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={handleSubmit}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
