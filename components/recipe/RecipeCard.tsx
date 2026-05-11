"use client";

import { useRouter } from "next/navigation";

interface Recipe {
  id: number;
  title: string;
  image: string;
  time: string;
  level: string;
}

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({
  recipe,
}: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/recipe/${recipe.id}`)
      }
      className="min-w-[170px] bg-[#111111] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-[170px] object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">
          {recipe.title}
        </h3>

        <p className="text-sm text-zinc-400">
          {recipe.time} · {recipe.level}
        </p>
      </div>
    </div>
  );
}