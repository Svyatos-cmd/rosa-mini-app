import Header from './components/Header';
import Footer from './components/Footer';
import TabsSection from './components/TabsSection'; // 👈 обязательно добавь эту строку

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <TabsSection /> {/* 👈 здесь вместо текста — компонент табов */}
      </main>
      <Footer />
    </div>
  );
}