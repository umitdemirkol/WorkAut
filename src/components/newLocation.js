import React from 'react';
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Textarea,
} from '@nextui-org/react';
import { Mail } from '../../models/Mail';
import { Password } from '../../models/Password';
import { useSession } from 'next-auth/react';
import { Dropdown, User } from '@nextui-org/react';
import { useState } from 'react';
import axios from 'axios';
import { Zoom, toast } from 'react-toastify';

export default function Location({ visible, onClose }) {
  const [cafe, setCafe] = useState('');
  const [images, setImages] = useState('');
  const [country, setCountry] = useState('');
  const [county, setCounty] = useState('');
  const [iframe, setIframe] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Lütfen bir resim seçin!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(formData);

    try {
      const response = await fetch('/api/uploadImage', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('Resim başarıyla yüklendi!');
        // Burada sunucudan dönen resim yolunu kullanabilirsiniz (data.imageUrl).
        // İstediğiniz şekilde işleyebilir veya görsel olarak gösterebilirsiniz.
      } else {
        alert('Resim amk bir hata oluştu!');
      }
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const handleSubmit = async () => {
    console.log('Name:', cafe, images, country, county, iframe);

    let location = {
      brandName: cafe.toString(),
      category: 'cafe',
      country: country.toString(),
      slug: cafe.slice(0, 2).toString(),
      county: county.toString(),
      mapLoc: iframe.toString(),
      poster: '',
      images: [],
      likes: 12,
      numReviews: 123,
      description: 'deeneme',
      isVisible: 1,
    };
    axios
      .post('/api/set_location', { location: location })
      .then((res) => {
        toast('🦄 Oluşturma Başarılı :)', {
          type: 'success',
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          transition: Zoom,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((err) => {
        toast('🦄 Lokasyon Oluşturulamadı!', {
          type: 'warning',
          position: 'bottom-right',
          autoClose: 5000,
          transition: Zoom,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'light',
        });
        console.log(err);
      });

    closeHandler();
  };

  return (
    <Modal
      className=' h-[600px] w-[900px]'
      closeButton
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text size={18}>Create Location</Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='Kafe İsmi'
          value={cafe}
          onChange={(e) => setCafe(e.target.value)}
        />
        <Input
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='Şehir'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Input
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='İlçe'
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />
        {/* <Input
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='Resim'
          value={images}
          onChange={(e) => setImages(e.target.value)}
        /> */}
        <input type='file' onChange={handleFileChange} />
        <div>{selectedImage && <image src={selectedImage} alt='' />}</div>
        {/* <Input
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='İlçe'
          contentLeft={<Password fill='currentColor' />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <Textarea
          helperText='Google İframe lokasyon kodunu buraya yapıştır'
          status='default'
          value={iframe}
          onChange={(e) => setIframe(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color='error' onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={handleSubmit}>
          Create Request
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
