import { writeToSheet } from '../utils/google.js';
import { sendTelegramMessage } from '../utils/telegram.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешён' });
  }

  const form = req.body;

  try {
    const { name, email, projectType, description } = form;

    const values = [[
      new Date().toLocaleString(),
      name || '',
      email || '',
      projectType || '',
      description || ''
    ]];

    await writeToSheet(values);

    const message = `📝 *Новый бриф ROSA:*\n\n👤 Имя: ${name}\n📧 Email: ${email}\n🎬 Тип проекта: ${projectType}\n\n🗒 Описание:\n${description}`;
    await sendTelegramMessage(message);

    res.status(200).json({ message: 'Успешно отправлено' });
  } catch (error) {
    console.error('Ошибка при отправке брифа:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
}