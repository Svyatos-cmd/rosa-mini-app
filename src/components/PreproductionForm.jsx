import React, { useState } from 'react';

const PreproductionForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Отправка...');

    try {
      const res = await fetch('https://rosa-mini-app.vercel.app/api/brief', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Отправлено!');
        setForm({ name: '', phone: '', projectType: '', message: '' });
      } else {
        setStatus('❌ Ошибка: ' + (data.error || 'неизвестная'));
      }
    } catch (err) {
      setStatus('❌ Сбой при отправке');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Имя</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Телефон или Telegram</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Тип проекта</label>
        <input
          type="text"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Комментарий</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Отправить
      </button>

      {status && <p className="mt-2">{status}</p>}
    </form>
  );
};

export default PreproductionForm;