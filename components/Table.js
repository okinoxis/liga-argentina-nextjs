import React, { useState } from "react";
import PosVariation from "./PosVariation";
import CustomImage from "./CustomImage"
import TabRow from "./TabRow";

export default function Table(props) {
   const [rowStatus, setRowStatus] = useState(false);
   const [rowId, setRowId] = useState(0);


   function RowSwitchStatus(id) {
      if (rowStatus && rowId === id) {
         setRowStatus(false);
      } else {
         setRowStatus(true);
      }
      return setRowId(id);
   }

   function RowSwitch(id) {
      function expandRow(id) {
         return rowId === id ? "table-row" : "hidden";
      }
      function colapseRow(id) {
         return rowId === id ? "hidden" : "hidden";
      }
      return rowStatus === true ? expandRow(id) : colapseRow(id);
   }

   return (
      <div>
         <div className="overflow-x-auto relative flex justify-center">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="py-3 px-2 text-left w-4">
                        #
                     </th>
                     <th scope="col" className="py-3 pl-6" colSpan="2">
                        Club
                     </th>
                     <th scope="col" className="py-3 text-center">
                        PJ
                     </th>
                     <th scope="col" className="py-3 text-center">
                        G
                     </th>
                     <th scope="col" className="py-3 text-center">
                        E
                     </th>
                     <th scope="col" className="py-3 text-center">
                        P
                     </th>
                     <th scope="col" className="py-3 text-center">
                        GF
                     </th>
                     <th scope="col" className="py-3 text-center">
                        GC
                     </th>
                     <th scope="col" className="py-3 text-center">
                        DG
                     </th>
                     <th scope="col" className="py-3 text-center">
                        Pts
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {props.api.data[0].rank.map((item) => (
                     <>
                        <tr key={item.id} 
                           className={`cursor-pointer hover:bg-gray-900 bg-gray-800 border-b border-gray-700`}
                           onClick={() => RowSwitchStatus(item.id)}>

                           <td className="text-center bg-gray-900 py-3 px-2">
                              <div className="flex justify-center">
                                 {item.standing.position}
                                 <PosVariation pos={item.standing.posVariation} size="21"/>
                              </div>
                           </td>
                           <td className="p-0 text-center">
                              {CustomImage(item.images.urlLogo[2], 34)}
                           </td>
                           <td scope="row" className="text-ellipsis py-4 pl-2 font-medium text-white">
                              {item.name === "River"? "Ribergüenza": item.name}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.played}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.won}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.drawn}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.lost}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.for}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.against}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.for - item.standing.against}
                           </td>
                           <td className="py-4 text-center px-1">
                              {item.standing.points}
                           </td>
                        </tr>

                        <tr key={item.id + 846} role="tablist" className={RowSwitch(item.id)}>
                           <TabRow item={item}/>
                        </tr>
                     </>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}


