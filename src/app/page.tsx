import Timer from "@/components/Timer";
import Image from "next/image";
import us from "../../public/us.jpeg";
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-4 items-center justify-center min-h-screen px-2">
      <div className="font-mono text-green-400 border border-green-400 p-2 rounded-lg text-end">
        <Image src={us} alt="nós S2" width="200" height="300" className="w-auto brightness-50 saturate-150" />
        <p>25/05</p>
      </div>
      <Timer />
    </main>
  );
}
