import { useState } from 'react';

export default function PreproductionForm() {
  const [form, setForm] = useState({
    projectName: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Бриф отправлен!\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Название проекта</label>
        <input
          name="projectName"
          value={form.projectName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Например, Съёмка отеля в Сочи"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Описание или пожелания</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded h-24"
          placeholder="Кратко расскажите, что вы ожидаете..."
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Отправить</button>
    </form>
  );
}