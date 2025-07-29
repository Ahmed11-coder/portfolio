import Header from '@/components/layouts/Header';
import Background from '@/components/layouts/Background/Background';

export default function Home() {
  return (
    <div>
      <Background Content={<Header />} />
    </div>
  );
}
