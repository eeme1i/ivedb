import type { NextPage } from "next";
import { createClient } from "@supabase/supabase-js";
import { CardItem } from "../../components/Card";

export async function getServerSideProps({ params }) {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { data } = await supabaseAdmin
    .from("content")
    .select("*")
    .eq("id", params.id)
    .single();

  return {
    props: {
      item: data,
    },
  };
}

const Details: NextPage = ({ item }: { item: any }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        <CardItem key={item.id} item={item} />
      </div>
    </>
  );
};

export default Details;
