type Recipe = {
  id: number;
  title: string;
  category: string;
  cookingTime: number;
  difficulty: string;
  thumbnail: string;
  ingredients: string[];
  basicIngredients: string[];
  description: string;
  steps: string[];
};

export function recommendRecipes(
  recipes: Recipe[],
  userIngredients: string[]
) {

  return recipes.map((recipe) => {

    const matched =
      recipe.ingredients.filter((item) =>
        userIngredients.includes(item)
      );

    const missing =
      recipe.ingredients.filter(
        (item) =>
          !userIngredients.includes(item)
      );

    const matchRate = Math.round(
      (matched.length /
        recipe.ingredients.length) *
      100
    );

    return {
      ...recipe,
      matchRate,
      missing,
    };
  });
}