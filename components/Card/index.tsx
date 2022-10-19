import Image from "next/image";

type Item = {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
};

export function CardItem({ item }: { item: Item }) {
  return (
    <div className="p-4 transition-all duration-150 hover:text-black hover:bg-white">
      <div className="w-full overflow-hidden aspect-w-1 aspect-h-1">
        <Image alt="" src={item.imageSrc} layout="fill" objectFit="cover" />
      </div>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </div>
  );
}
