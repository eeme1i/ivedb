import type { NextPage } from "next";
import { createClient } from "@supabase/supabase-js";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import Image from "next/image";
import { Button, GhostButton } from "../../components/Button";
import Head from "next/head";

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
    <div>
      <Head>
        <title>{item.name}</title>
        <meta
          name="description"
          content={`Download ${item.name} in high quality.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full space-y-4">
          <div className="flex justify-end">
            <GhostButton href="/app" color="white">
              <div className="flex items-center justify-end space-x-4 transition-all w-max h-max group">
                <ArrowLeft className="transition-all duration-150 ease-in-out group-hover:-translate-x-1" />
                Go back
              </div>
            </GhostButton>
          </div>
          <div className="flex flex-col items-center w-full p-8 space-y-4 md:space-y-0 md:flex-row md:space-x-8 bg-neutral-900">
            <div className="max-w-[480px] w-full">
              <div className="w-full overflow-hidden aspect-w-16 aspect-h-9">
                <Image
                  alt=""
                  src={item.imageSrc}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="max-w-[480px] h-full flex flex-col justify-between space-y-4">
              <h1 className="text-4xl uppercase font-clashdisplay">
                {item.type}
              </h1>
              <p>{item.name}</p>
              <div className="flex items-center space-x-2">
                <Button href={item.imageSrc} color="white" download>
                  <p>Download</p>
                </Button>
                <GhostButton href={item.originalSrc} color="white">
                  <div className="flex items-center space-x-1">
                    <ArrowRight />
                    <p>Source</p>
                  </div>
                </GhostButton>
              </div>
              <div className="text-sm font-spacemono">
                <p>Resolution</p>
                <p className="text-white/75">{item.res}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
