import PosVariation from "./PosVariation";

export default function PosVariationExpanded(props) {
   return(
      <div className='font-black text-4xl flex justify-center items-center'>
         <div className="pl-2">
            {props.pos}
         </div>
         <div>
            <PosVariation size="70" pos={props.pos} />
         </div>
      </div>
   )
}
