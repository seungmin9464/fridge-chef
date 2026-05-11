"use client";

import RecipeCard from "@/components/recipe/RecipeCard";
import { useSearchParams } from "next/navigation";
import { recipes } from "@/data/recipes";
import { recommendRecipes } from "@/utils/recommend";

export default function ResultPage() {
  const searchParams = useSearchParams();

  const ingredients =
    searchParams
      .get("ingredients")
      ?.split(",") || [];

  const recommendedRecipes =
    recommendRecipes(
      recipes,
      ingredients
    );

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">

      {/* 상단 */}
      <div className="sticky top-0 z-10 bg-[#1f1f1f]/90 backdrop-blur-md border-b border-[#2a2a2a]">

        <div className="max-w-[480px] mx-auto p-5">

          <p className="text-sm text-gray-400 mb-2">
            오늘 만들 수 있는 요리
          </p>

          <h1 className="text-3xl font-bold mb-5">
            추천 레시피 🍳
          </h1>

          {/* 보유 재료 */}
          <div className="flex flex-wrap gap-2">
            {ingredients.map((item) => (
              <div
                key={item}
                className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="max-w-[480px] mx-auto p-5">
        {/* 결과 개수 */}
        <div className="flex justify-between items-center mb-5">
            <p className="text-gray-400 text-sm">
            총
            {" "}
            {recommendedRecipes.length}
            {" "}
            개의 레시피
          </p>
          <button className="text-sm text-gray-400">
            정확도순
          </button>
        </div>
        {/* 카드 리스트 */}
        <div className="space-y-5">
          {recommendedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              thumbnail={recipe.thumbnail}
              category={recipe.category}
              cookingTime={recipe.cookingTime}
              difficulty={recipe.difficulty}
              matchRate={recipe.matchRate}
              missing={recipe.missing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}