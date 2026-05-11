"use client";

import { useRouter } from "next/navigation";

export default function RecipeDetailPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 상단 이미지 */}
      <section className="relative h-[340px] overflow-hidden">
        <img
          src="/recipes/egg-roll.jpeg"
          alt="계란말이"
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* top buttons */}
        <div className="absolute top-6 left-5 right-5 z-10 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="
              w-11
              h-11
              rounded-full
              bg-black/40
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-lg
            "
          >
            ←
          </button>

          <button
            className="
              w-11
              h-11
              rounded-full
              bg-black/40
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-lg
            "
          >
            ❤️
          </button>
        </div>

        {/* recipe info */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="
                h-[30px]
                px-3
                rounded-full
                bg-[#7CFFB2]/15
                text-[#7CFFB2]
                text-sm
                flex
                items-center
              "
            >
              추천 레시피
            </span>

            <span className="text-sm text-zinc-300">
              ❤️ 1.2k
            </span>
          </div>

          <h1 className="text-[34px] font-bold tracking-[-0.05em] mb-3">
            계란말이
          </h1>

          <p className="text-zinc-300 leading-relaxed text-[15px]">
            냉장고 속 계란과 대파만 있어도
            간단하고 맛있는 한 끼를 만들 수 있어요.
          </p>
        </div>
      </section>

      {/* content */}
      <section className="px-5 pt-7 pb-32">
        {/* info cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            {
              label: "조리시간",
              value: "10분",
            },
            {
              label: "난이도",
              value: "쉬움",
            },
            {
              label: "칼로리",
              value: "320kcal",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-[24px]
                bg-[#151515]
                border
                border-white/5
                py-5
                flex
                flex-col
                items-center
              "
            >
              <p className="text-zinc-400 text-xs mb-2">
                {item.label}
              </p>

              <p className="text-[18px] font-bold">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* 추천 이유 */}
        <section className="mb-8">
          <h2 className="text-[22px] font-bold mb-4 tracking-[-0.04em]">
            왜 추천했나요?
          </h2>

          <div
            className="
              rounded-[30px]
              bg-[#151515]
              border
              border-white/5
              p-5
            "
          >
            <div className="flex gap-3 mb-4">
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#7CFFB2]/15
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                🧠
              </div>

              <div>
                <p className="font-semibold mb-1">
                  오늘의 AI 추천
                </p>

                <p className="text-sm text-zinc-400">
                  냉장고 재료 기반 추천
                </p>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-zinc-300">
              계란과 대파가 냉장고에 있어서
              가장 빠르게 만들 수 있는 요리예요.
              오늘처럼 피곤한 날 간단하게 먹기 좋아요.
            </p>
          </div>
        </section>

        {/* 재료 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[22px] font-bold tracking-[-0.04em]">
              필요한 재료
            </h2>

            <button className="text-sm text-zinc-400">
              냉장고 비교
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                name: "계란",
                amount: "3개",
                has: true,
              },
              {
                name: "대파",
                amount: "1/2대",
                has: true,
              },
              {
                name: "소금",
                amount: "약간",
                has: false,
              },
            ].map((item) => (
              <div
                key={item.name}
                className="
                  h-[68px]
                  rounded-[22px]
                  bg-[#151515]
                  border
                  border-white/5
                  px-5
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p className="font-semibold mb-1">
                    {item.name}
                  </p>

                  <p className="text-sm text-zinc-400">
                    {item.amount}
                  </p>
                </div>

                <div
                  className={`
                    h-[32px]
                    px-3
                    rounded-full
                    text-sm
                    flex
                    items-center
                    ${
                      item.has
                        ? "bg-[#7CFFB2]/15 text-[#7CFFB2]"
                        : "bg-red-500/10 text-red-400"
                    }
                  `}
                >
                  {item.has ? "보유중" : "없음"}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 조리 순서 */}
        <section>
          <h2 className="text-[22px] font-bold mb-4 tracking-[-0.04em]">
            조리 순서
          </h2>

          <div className="flex flex-col gap-4">
            {[
              "계란을 풀고 대파를 잘게 썰어주세요.",
              "팬에 기름을 두르고 약불로 예열해주세요.",
              "계란물을 얇게 부어 돌돌 말아주세요.",
            ].map((step, index) => (
              <div
                key={index}
                className="
                  rounded-[26px]
                  bg-[#151515]
                  border
                  border-white/5
                  p-5
                  flex
                  gap-4
                "
              >
                <div
                  className="
                    min-w-[38px]
                    h-[38px]
                    rounded-full
                    bg-[#7CFFB2]
                    text-black
                    font-bold
                    flex
                    items-center
                    justify-center
                  "
                >
                  {index + 1}
                </div>

                <p className="text-[15px] leading-relaxed text-zinc-300 pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* 하단 버튼 */}
      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          border-t
          border-white/5
          bg-black/70
          backdrop-blur-xl
          p-5
        "
      >
        <div className="mx-auto max-w-[430px]">
          <button
            className="
              w-full
              h-[58px]
              rounded-[22px]
              bg-[#7CFFB2]
              text-black
              font-bold
              text-[16px]
            "
          >
            만들어보기 🍳
          </button>
        </div>
      </div>
    </main>
  );
}