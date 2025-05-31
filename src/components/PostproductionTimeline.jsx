import { CheckCircle } from 'lucide-react';

const steps = [
  { title: 'Черновой монтаж', done: true },
  { title: 'Цветокоррекция', done: false },
  { title: 'Саунд-дизайн', done: false },
];

export default function PostproductionTimeline() {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 border rounded bg-white shadow-sm"
        >
          <CheckCircle className={`w-6 h-6 ${step.done ? 'text-green-500' : 'text-gray-300'}`} />
          <span className={`text-lg ${step.done ? 'line-through text-gray-500' : ''}`}>{step.title}</span>
        </div>
      ))}
    </div>
  );
}