import Typography from "typography";
export const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.7,
  headerFontFamily: ["Kanit", "sans-serif"],
  bodyFontFamily: ["Kanit", "sans-serif"],
  scaleRatio: 2.0,
  headerWeight: 500,
  boldWeight: 600,
  bodyWeight: 400,
});
export const { rhythm, scale } = typography;
