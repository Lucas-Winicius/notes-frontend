import Image from "next/image";
import list from "@/images/list.svg";
import timeGreetings from "@/services/timeGreetings";

export default function Header({ nick }: { nick?: string }) {
  return (
    <header className="py-5 px-8">
      <div className="flex space-x-7">
        <Image src={list} width={24} height={20} alt="List" />
        <p className="text-white text-base font-semibold">{`${timeGreetings()}, ${nick}!`}</p>
      </div>
    </header>
  );
}
