import Image from "next/image";
import mainvisual from '../../../public/mainvisual.jpg';

export const MainSection = () => {
  return (
    <section className='mt-4 max-[1024px]:mx-2.5'>
      <Image
        src={mainvisual}
        alt='mainvisual image'
      />
    </section>
  )
}