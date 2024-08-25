"use client";
import Title from "../title";
import KnowFutRetroCard from "./card";
import { useEffect, useState } from "react";
import getApi from "@/api/get-secao";

type ApiProps = {
  id: number;
  title: string;
  text: string;
};

export default function KnowFutRetro() {
  const [cards, setCards] = useState<ApiProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { identities } = await getApi();
        setCards(identities);
      } catch {
        console.error("Deu erro");
      }
    };
    fetchData();
  });

  return (
    <div className="w-full space-y-12 bg-red-900 h-full">
      <div>
        <Title title="Conheça nossas bases" subtitle="Sobre" />
        <div className="flex flex-wrap gap-4 justify-center py-5">
            {(cards.map((card) => (
                <KnowFutRetroCard 
                    id={card.id} 
                    title={card.title} 
                    text={card.text} 
                />
            )))}
        </div>
      </div>
    </div>
  );
}
