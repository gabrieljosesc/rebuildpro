export type Review = {
  author: string;
  area: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // ISO date
  source: "Google" | "HomeStars";
  text: string;
};

// PLACEHOLDER: Joe supplies real customer reviews. Leave this empty until
// then. The reviews page and Review schema only render when reviews exist.
export const reviews: Review[] = [];
