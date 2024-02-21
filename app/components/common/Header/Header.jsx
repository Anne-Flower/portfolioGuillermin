import Image from "next/image";
import Logo from '@/app/assets/images/logo/logo.jpg'

console.log("---------------", Logo);

const Header = () => {
  return (
    <div className="w-10 h-10">
      <Image classname=" w-full h-full object-cover" src={Logo.src} alt="logo" width={Logo.width} height={Logo.height}/>
    </div>
  )
}
export default Header;