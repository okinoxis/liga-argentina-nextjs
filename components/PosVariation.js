import { IconContext } from "react-icons";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import {BsDash} from "react-icons/bs";

export default function PosVariation(props) {
   if (props.pos == 0) {
      return (
         <div className="text-gray-500 text-center">
            <IconContext.Provider value={{ size: props.size }}>
               <div>
                  <BsDash />
               </div>
            </IconContext.Provider>
         </div>
      );
   }
   if (props.pos >= 1) {
      return (
         <div className="text-green-500 text-center">
            <IconContext.Provider value={{ size: props.size }}>
               <div>
                  <RiArrowUpSFill />
               </div>
            </IconContext.Provider>
         </div>
      );
   }
   if (props.pos <= -1) {
      return (
         <div className="text-red-500 text-center">
            <IconContext.Provider value={{ size: props.size }}>
               <div>
                  <RiArrowDownSFill />
               </div>
            </IconContext.Provider>
         </div>
      );
   }
}
