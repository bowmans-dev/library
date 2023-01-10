import { IconContext } from 'react-icons/lib';
import { FaCoffee } from 'react-icons/fa';
import { MdMenuOpen, MdCode } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai"

const Icons = () => {
  return (
    <IconContext.Provider value={{ size: "8.5em"}}>
      <AiOutlineLike />
      <MdMenuOpen />
      <MdCode />
      <FaCoffee />
    </IconContext.Provider>
  )
}
export default Icons