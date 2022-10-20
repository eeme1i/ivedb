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
    <Link href={`/app/${item.id}`}>
      <div className="transition-all duration-300 bg-neutral-900 hover:scale-[102%] ease-in-out">
        <div className="w-full overflow-hidden aspect-w-1 aspect-h-1">
          <Image alt="" src={item.imageSrc} layout="fill" objectFit="cover" />
        </div>
        <div className="flex items-center justify-between p-4">
          <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
          <Button href={`/app/${item.id}`} color="white">
            View
          </Button>
        </div>
      </div>
    </Link>
  );
}
