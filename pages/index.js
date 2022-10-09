import Head from "next/head";
import React from "react";
import Table from "../components/Table";

export default function Home({ data }) {
   return (
      <div>
         <Head>
            <title>Furvo</title>
            <meta name="description" content="Liga Argentina de Futbol" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Table api={data} />
      </div>
   );
}
export const getServerSideProps = async (context) => {
   const res = await fetch(
      "https://api.unidadeditorial.es/sports/v1/classifications/current/?site=2&type=10&tournament=0152"
   );

   const data = await res.json();

   return {
      props: {
         data,
      },
   };
};
