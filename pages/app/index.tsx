import type { NextPage } from "next";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

export async function getStaticProps() {
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
    <>
      <div className="grid grid-cols-4 gap-8">
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
        <p>app section</p>
      </div>
    </>
  );
};

export default App;

function CardItem({ item }: { item: Item }) {
  return (
    <div>
      <div className="w-full overflow-hidden aspect-w-1 aspect-h-1">
        <Image alt="" src={item.imageSrc} layout="fill" objectFit="cover" />
      </div>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </div>
  );
}
