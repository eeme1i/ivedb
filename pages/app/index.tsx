import type { NextPage } from "next";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import { CardItem } from "../../components/Card";

export async function getServerSideProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { data } = await supabaseAdmin.from("content").select("*").order("id");
  return {
    props: {
      items: data,
    },
  };
}

type Item = {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
};

const App: NextPage = ({ items }: { items: Item[] }) => {
  return (
    <div>
      <Head>
        <title>App </title>
        <meta name="description" content={`dope ass app`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
