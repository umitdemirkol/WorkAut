import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads'; // Yüklenen resimlerin kaydedileceği klasör
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Resim yüklenirken bir hata oluştu.' });
      }

      const { path: tempPath, name: fileName, type } = files.file;
      const newFileName = `${Date.now()}-${fileName}`;

      fs.renameSync(tempPath, path.join(form.uploadDir, newFileName));

      const imageUrl = `/uploads/${newFileName}`;

      res.status(200).json({ imageUrl });
    });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
