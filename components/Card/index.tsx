import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

type Item = {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
};

export function CardItem({ item }: { item: Item }) {
  return (
    <div className="hover:scale-[101%] transition-all duration-300 ease-in-out bg-neutral-900 group">
      <div className="w-full overflow-hidden aspect-w-2 aspect-h-1 ">
        <Link href={`/app/${item.id}`}>
          <Image
            alt=""
            src={item.imageSrc}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-700 ease-in-out cursor-pointer group-hover:"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between p-4 space-x-4">
        <div>
          <p>{item.name}</p>
        </div>
        <Button href={`/app/${item.id}`} color="white">
          View
        </Button>
      </div>
    </div>
  );
}
