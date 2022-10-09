import PosVariationExpanded from "./PosVariationExpanded"
import CustomImage from "./CustomImage"

export default function TabRow(props) {

   return(
      <>
      <td role="tab" colSpan="11">
         <div role="tabpanel" className="w-full table bg-slate-900 h-48">
            <div className="flex justify-evenly items-center p-3 text-gray-200">

               <div className="text-center px-2">
                  <h1 className="p-2 font-black text-8xl">
                     #{props.item.standing.position}
                  </h1>
                  <PosVariationExpanded pos={props.item.standing.posVariation}/>
               </div>

               <div className="text-center px-2">
                  {CustomImage(props.item.images.urlLogo[0],144)}
               </div>

               <div className="text-center px-2">
                  <div>
                     <h3 className="font-medium">
                        Partidos jugados
                     </h3>
                     <h1 className="font-black text-7xl">
                        {Math.trunc(props.item.standing.played)}
                     </h1>
                  </div>
                  <div className="text-center">
                     <div className="flex p-2">
                        <div className="p-2">
                           <h3 className="font-medium">
                              Local
                           </h3>
                           <h1 className="font-black text-3xl">
                              {Math.trunc(props.item.standing.home.played)}
                           </h1>
                        </div>
                        <div className="p-2">
                           <h3 className="font-medium">
                              Visitante
                           </h3>
                           <h1 className="font-black text-3xl">
                              {Math.trunc(props.item.standing.away.played)}
                           </h1>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="text-center px-2">
                  <div>
                     <h3 className="font-medium">
                        Porcentaje de victoria
                     </h3>

                     <h1 className="font-black text-7xl">
                        {Math.trunc( props.item.standing.wonPercentage)}
                        %
                     </h1>
                  </div>
                  <div className="text-center">
                     <div className="flex p-2">
                        <div className="p-2">
                           <h3 className="font-medium">
                              Local
                           </h3>
                           <div>
                              <h4 className="font-medium text-gray-500 ">
                                 <span className="text-green-500">
                                    {props.item.standing.home.won}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-gray-500">
                                    {props.item.standing.home.drawn}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-red-500">
                                    { props.item.standing.home.lost}
                                 </span>
                              </h4>
                           </div>
                           <h1 className="font-black text-3xl">
                              {Math.trunc(props.item.standing.home.wonPercentage)}%
                           </h1>
                        </div>
                        <div className="p-2">
                           <h3 className="font-medium">
                              Visitante
                           </h3>
                           <div>
                              <h4 className="font-medium text-gray-500 ">
                                 <span className="text-green-500">
                                    {props.item.standing.away.won}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-gray-500">
                                    {props.item.standing.away.drawn}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-red-500">
                                    { props.item.standing.away.lost}
                                 </span>
                              </h4>
                           </div>
                           <h1 className="font-black text-3xl">
                              {Math.trunc(props.item.standing.away.wonPercentage)}%
                           </h1>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="text-center px-2">
                  <h3 className="p-2 font-medium ">
                     Promedio:
                  </h3>
                  <h1 className="p-2 font-black text-5xl">
                     {props.item.standing.relegationAverage}
                  </h1>
               </div>
            </div>
         </div>
      </td>
   </>
   )
}
