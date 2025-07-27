import Header from '@/ui/Header';
export default function Home() {
  return (
    <>
      <div className='w-[100dvw] h-[100dvh] absolute bg-size-[64px_64px] bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)]'>
        <div className='w-full h-full absolute bg-[radial-gradient(transparent_0%,white_75%)]'>
        </div>
        <div className="w-[calc(100%-5rem)] h-[calc(100%-5rem)] relative z-1 rounded-[50px] border-[3px] border-[#EDFED6] m-10 p-10">
          <Header />
        </div>
      </div>
    </>
  );
}
