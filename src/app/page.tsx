import Timer from "@/components/Timer";
import Image from "next/image";
import us from "../../public/us.jpeg";
import { Card } from "@/components/Card";
import DriveCarousel from "@/components/DriverCarousel";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-4 items-center justify-center min-h-screen px-2">
      <div className="flex flex-col gap-4 items-center justify-center px-2 w-full md:w-[80%]">
        <div className="flex flex-col gap-4 items-center justify-center px-2">
          <div className="font-mono text-green-400 border border-green-400 p-2 rounded-lg text-end">
            <Image src={us} alt="nós S2" width="200" height="300" className="w-auto brightness-50 saturate-150" priority />
            <p>25/05</p>
          </div>
          {
            Date.now() < new Date("2025-05-24T21:00:00").getTime() ?
              <Timer />
              :
              ''
          }
        </div>
        {
          Date.now() < new Date("2025-05-24T21:00:00").getTime() ?
            ''
            :
            <>
              <Card>
                <p className="text-2xl">
                  {" Primeiro, tem que dar o play em nossa música :)"}
                </p>
                <iframe width="100%" height="315"
                  src="https://www.youtube.com/embed/eddeBsUlBBA?si=TxEQCih5R2TfhFQW"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
              </Card>
              <Card>
                <p className="md:text-2xl">
                  Fizemos um ano desde que decidimos seguir nossa vidas um ao lado do outro.
                  Um ano de risos, conversas intermináveis, descobertas e crescimento — como casal e como pessoas.
                  Parece clichê dizer que passou rápido, mas a verdade é que, ao seu lado,
                  o tempo voa de um jeito bom. Leve. Feliz.
                </p>
              </Card>
              <Card>
                <p className="md:text-2xl">
                  Cada momento com você, desde os mais simples até os mais marcantes, foi especial.
                  Desde fazer passeios incríveis a sós ou em família, até ir bater perna no shopping, cada momento com você é único.
                  A forma como você me olha, como me entende mesmo no silêncio, como me traz segurança e amor nos dias bons e nos difíceis…
                  tudo isso me faz ter ainda mais certeza de que escolhi a pessoa certa para caminhar comigo.
                </p>
              </Card>
              <Card>
                <p className="md:text-2xl">
                  Aprendi muito com você nesse ano. Sobre o amor, parceria,
                  a vida, sobre mim. Sou grato por cada detalhe - e principalmente por você.
                </p>
              </Card>
              <Card>
                <p className="md:text-2xl">
                  Quando digo que você é minha sorte, não é à toa. Pois você é exatamente isso: a mega sena do universo
                  me escolheu e eu ganhei o melhor anjo que tinha no céu para mim, você. O presente mais lindo
                  que eu poderia ter.
                </p>
              </Card>
              <Card>
                <p className="md:text-2xl">
                  Que venham muitos outros anos, recheados de novas memórias, aventuras e, acima de tudo, amor.
                  <br/>
                  <strong>
                    Feliz 1 ano pra nós! ❤️
                  </strong>

                </p>
              </Card>
              <Card center>
                <DriveCarousel />
              </Card>
            </>
        }

      </div>
    </main>
  );
}
