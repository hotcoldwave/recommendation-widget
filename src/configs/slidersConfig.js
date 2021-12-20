export const modernSliderConfig = () => ({
  perPage: 1,
  autoWidth: true,
  type: "loop",
});

export const classicSliderConfig = (elementsPerPage) => ({
  type: "loop",

  autoWidth: true,
  perPage: parseInt(elementsPerPage),
  grid: {
    rows: 1,
    cols: 1,
  },

  breakpoints: {
    480: {
      autoWidth: false,
      perPage: 1,
      grid: {
        rows: 2,
        cols: 2,
        gap: {
          row: "34px",
          col: "16px",
        },
      },
    },
  },
});
