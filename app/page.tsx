"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Section from "@/components/ui/Section";

export default function Home() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  // 재료 추가
  const addIngredient = (value?: string) => {
    const target = value || input;

    if (!target.trim()) return;
    if (ingredients.includes(target)) return;

    setIngredients([...ingredients, target]);
    setInput("");
  };

  // 재료 삭제
  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white flex justify-center">
      <div className="w-[360px] p-5">

        {/* 헤더 */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">나의 냉장고</h1>
          <p className="text-gray-400 text-sm">오늘 뭐 만들까?</p>
        </div>

        {/* 입력 */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="재료 이름 입력..."
            className="flex-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 outline-none"
          />

          <Button onClick={() => addIngredient()}>
            + 추가
          </Button>
        </div>

        {/* 카테고리 */}
        <div className="flex gap-2 mb-4">
          {["단백", "채소", "양념", "기타"].map((item) => (
            <Chip key={item} label={item} />
          ))}
        </div>

        {/* 보유 재료 */}
        {ingredients.length > 0 && (
          <Section title="보유 재료">
            <div className="flex flex-wrap gap-2">
              {ingredients.map((item, idx) => (
                <Chip
                  key={idx}
                  label={item}
                  onRemove={() => removeIngredient(idx)}
                />
              ))}
            </div>
          </Section>
        )}

        {/* 빠른 추가 */}
        <Section title="빠른 추가">
          <div className="grid grid-cols-2 gap-2">
            {["돼지고기", "소고기", "두부", "새우", "참치캔", "치즈", "베이컨"].map((item) => (
              <Button key={item} onClick={() => addIngredient(item)}>
                + {item}
              </Button>
            ))}
          </div>
        </Section>

        {/* CTA 버튼 */}
        <Button
          onClick={() => console.log("레시피 찾기")}
          className={`w-full mt-2 ${
            ingredients.length === 0
              ? "bg-[#2a2a2a] text-gray-500"
              : "bg-white text-black"
          }`}
        >
          레시피 찾기
        </Button>

      </div>
    </div>
  );
}