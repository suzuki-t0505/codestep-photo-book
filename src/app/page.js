import { DetailSection } from './components/DetailSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IndexSection } from './components/IndexSection';
import { MainSection } from './components/MainSection';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto text-slate-700">
      <Header />
      <main>
        <MainSection />
        <IndexSection />

      <DetailSection />
      </main>

      <Footer />
    </div>
  )
}
