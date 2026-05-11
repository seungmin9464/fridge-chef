"use client";

import { useRouter } from "next/navigation";

const fridgeItems = [
  { emoji: "🥚", name: "계란", amount: "6개" },
  { emoji: "🌿", name: "대파", amount: "1대" },
  { emoji: "🧅", name: "양파", amount: "1개" },
  { emoji: "🥬", name: "김치", amount: "1/2컵" },
  { emoji: "⬜", name: "두부", amount: "1/2모" },
];

const categories = [
  { icon: "⚡", label: "10분 컷" },
  { icon: "🌙", label: "야식" },
  { icon: "🏠", label: "자취생" },
  { icon: "🥗", label: "다이어트" },
  { icon: "🍲", label: "해장" },
];

const popularRecipes = [
  {
    title: "계란말이",
    image: "/recipes/egg-roll.jpeg",
    likes: "1.2k",
  },
  {
    title: "순두부찌개",
    image: "/recipes/tofu-stew.jpeg",
    likes: "987",
  },
  {
    title: "대파 파스타",
    image: "/recipes/green-onion-pasta.jpeg",
    likes: "823",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[430px] px-5 pt-8 pb-24">
        {/* 헤더 */}
        <section className="mb-7">
          <p className="mb-3 text-sm font-medium text-[#7CFFB2]">
            오늘 뭐 먹지?
          </p>

          <h1 className="text-[30px] font-bold leading-[1.25] tracking-[-0.04em]">
            냉장고 속 재료로
            <br />
            맛있는 요리 만들기
          </h1>
        </section>

        {/* 우리집 냉장고 */}
        <section className="mb-7">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[20px] font-bold tracking-[-0.03em]">
              우리집 냉장고
            </h2>
          </div>

          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1">
            {/* 추가 */}
            <button
              className="
                flex
                h-[112px]
                min-w-[78px]
                flex-col
                items-center
                justify-center
                rounded-[16px]
                border
                border-white/5
                bg-[#151515]
              "
            >
              <span className="text-[34px] leading-none">
                +
              </span>

              <span className="text-[15px] font-semibold">
                추가
              </span>
            </button>

            {/* 재료 */}
            {fridgeItems.map((item) => (
              <div
                key={item.name}
                className="
                  flex
                  h-[112px]
                  min-w-[78px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-white/5
                  bg-[#151515]
                "
              >
                <div className="mb-1 text-[30px]">
                  {item.emoji}
                </div>

                <p className="text-[15px] font-semibold">
                  {item.name}
                </p>

                <p className="text-xs text-zinc-400">
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 추천 카드 */}
        <section className="mb-7">
          <div className="relative h-[240px] overflow-hidden rounded-[24px] border border-white/5 bg-[#151515]">
            {/* 배경 이미지 */}
            <img
              src="/recipes/egg-roll.jpeg"
              alt="추천 음식"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                scale-105
              "
            />

            {/* gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.08) 80%)",
              }}
            />

            {/* content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div>
                <p className="mb-3 text-sm font-semibold text-[#7CFFB2]">
                  오늘의 추천
                </p>

                <h2 className="text-[24px] font-bold leading-[1.35] tracking-[-0.04em]">
                  계란만 있어도
                  <br />
                  맛있는 요리를 만들 수 있어요
                </h2>

                <p className="mt-4 text-sm text-zinc-300">
                  냉장고 재료 기반 AI 추천
                </p>
              </div>

              <button className="w-fit text-sm font-semibold text-[#7CFFB2]">
                추천 레시피 보기 →
              </button>
            </div>
          </div>
        </section>

        {/* 카테고리 */}
        <section className="mb-7">
          <div className="grid grid-cols-5 gap-2">
            {categories.map((category) => (
              <button
                key={category.label}
                className="
                  flex
                  h-[82px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[16px]
                  border
                  border-white/5
                  bg-[#151515]
                "
              >
                <span className="mb-2 text-[20px]">
                  {category.icon}
                </span>

                <span className="whitespace-nowrap text-[11px] font-medium">
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* 검색 레시피 */}
        <section className="mb-4 mt-4">
          <div className="mb-2">
            <h2 className="text-[20px] font-bold tracking-[-0.03em]">
              레시피를 입력해보세요
            </h2>
          </div>

          {/* search box */}
          <div className="rounded-[16px] border border-white/5 bg-[#151515] p-2">
            <div className="flex gap-3">
              {/* input */}
              <div
                className="
                  flex
                  h-[40px]
                  flex-1
                  items-center
                  rounded-[10px]
                  bg-black/30
                  px-5
                "
              >
                <input
                  type="text"
                  placeholder="김치찌개, 파스타, 볶음밥..."
                  className="
                    flex-1
                    bg-transparent
                    text-[15px]
                    outline-none
                    placeholder:text-zinc-500
                  "
                />
              </div>

              {/* 검색 버튼 */}
              <button
                className="
                  h-[40px]
                  whitespace-nowrap
                  rounded-[10px]
                  bg-[#7CFFB2]
                  px-6
                  font-semibold
                  text-black
                "
              >
                검색
              </button>
            </div>

            {/* 태그 */}
            <div className="relative mt-2 pr-[88px]">
              {/* 전체 지우기 */}
              <button
                className="
                  absolute
                  right-[5px]
                  top-[8px]
                  text-sm
                  text-zinc-500
                "
              >
                전체 지우기
              </button>

              {/* tags */}
              <div className="flex flex-wrap gap-1">
                {[
                  "김치찌개",
                  "파스타",
                  "계란요리",
                ].map((item) => (
                  <button
                    key={item}
                    className="
                      flex
                      h-[36px]
                      items-center
                      gap-2
                      rounded-full
                      bg-black/30
                      px-2
                      text-[12px]
                      text-zinc-300
                    "
                  >
                    <span>{item}</span>

                    <span className="text-zinc-500">
                      ✕
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 인기 레시피 */}
        <section className="mt-8">
          {/* title */}
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-[20px] font-bold tracking-[-0.04em]">
              오늘의 인기 레시피
            </h2>

            <button className="text-sm text-zinc-400">
              전체보기
            </button>
          </div>

          {/* recipe list */}
          <div className="grid grid-cols-3 gap-3">
            {popularRecipes.map((recipe, index) => (
              <div
                key={recipe.title}
                onClick={() =>
                  router.push(`/recipe/${index + 1}`)
                }
                className="
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-white/5
                  bg-[#151515]
                  transition-transform
                  active:scale-[0.98]
                "
              >
                {/* 좋아요 */}
                <div
                  className="
                    absolute
                    left-1
                    top-1
                    z-10
                    flex
                    h-[28px]
                    items-center
                    gap-1
                    rounded-full
                    bg-black/55
                    px-2
                    backdrop-blur-md
                  "
                >
                  <span className="text-[12px]">
                    ❤️
                  </span>

                  <span className="text-[11px] font-medium text-white">
                    {recipe.likes}
                  </span>
                </div>

                {/* 이미지 */}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="
                    h-[110px]
                    w-full
                    object-cover
                  "
                />

                {/* text */}
                <div className="p-3">
                  <p className="mb-1 text-sm font-semibold">
                    {recipe.title}
                  </p>

                  <p className="text-xs text-zinc-400">
                    10분 컷 · 쉬움
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-500">
                    #국물요리
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}