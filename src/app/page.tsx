import Header from '@/components/layouts/Header';
import Leading from '@/components/layouts/Leading/Leading';
import Info from '@/components/layouts/Info';

export default function Home() {
  return (
    <div className='w-[calc(100%-5rem)] h-[calc(100%-5rem)] relative'>
      <Header />
      <Leading Content={<Info />} />
    </div>
  );
}
