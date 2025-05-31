import { FileText, Download } from 'lucide-react';

export default function ContractSection() {
  return (
    <div className="p-4 border rounded shadow-sm bg-white space-y-4">
      <div className="flex items-center gap-3">
        <FileText className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Договор на оказание услуг</h2>
      </div>
      <p className="text-gray-600">Вы можете просмотреть и скачать наш типовой договор. Подписание — по ссылке, без распечаток.</p>
      <a
        href="https://example.com/dogovor.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 underline hover:text-blue-800"
      >
        <Download className="w-4 h-4" /> Скачать PDF-договор
      </a>
      <iframe
        src="https://example.com/dogovor.pdf"
        className="w-full h-96 border"
        title="Договор PDF"
      ></iframe>
    </div>
  );
}