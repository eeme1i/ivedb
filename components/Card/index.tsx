import Image from "next/image";

export function Card({ src, name, description }: any) {
  return (
    <div>
      <div className="w-full overflow-hidden aspect-w-1 aspect-h-1">
        <Image alt="" src={src} layout="fill" objectFit="cover" />
      </div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}
