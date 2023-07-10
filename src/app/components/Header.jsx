import Image from "next/image";
import logo from '../../../public/logo.svg';

export const Header = () => {
  return (
    <header className='mt-14 max-[1024px]:mx-2.5'>
      <Image
        src={logo}
        alt='log image'
        width={160}
        height={18}
      />
  </header>
  )
}