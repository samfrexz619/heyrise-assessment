import type { MetaFunction } from '@remix-run/node';
import { Button } from 'components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'Heyrise Frontend Assessment' },
    {
      name: 'description',
      content: 'Welcome to the Heyrise Frontend Assessement',
    },
  ];
};

export default function Index() {
  return (
    <section className='w-[93%] lg:w-5/6 mx-auto py-12'>
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-5xl text-center font-semibold text-black1'>Better products for the planet</h1>
        <p className='text-grey text-center text-20 py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu <br className='hidden md:block' /> lacus vitae augue efficitur aliquam.</p>
        <Button className='rounded-none hover:text-white mt-4 bg-body border border-black1 w-[194px] text-black1 flex items-center justify-center h-[50px] font-semibold text-16'>Shop All</Button>
      </div>

      <section className='w-[93%] lg:w-[1114px] mx-auto h-[350px] lg:h-[521px] bg-grey mt-10'>
        <div></div>
      </section>
    </section>
  );
}
