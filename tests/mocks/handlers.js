import { rest } from "msw";

export const handlers = [
  rest.get("https://rickandmortyapi.com/api/episode/1", (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: "Episode Test",
      })
    );
  }),
];
