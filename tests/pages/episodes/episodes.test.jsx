import { getStaticProps } from "../../../pages/episodes/[id]";

describe("getStaticProps", () => {
  describe("Quando chamamos a API getEpisode", () => {
    test("Retorna um objeto com id, episódio e status de revalidação", async () => {
      const result = await getStaticProps({ params: { id: "1" } });
      console.log(result);
      expect(result.revalidate).toBe(60);
      expect(result.props.id).toBe("1");
      expect(result.props.episode).toEqual({ id: 1, name: "Episode Test" });
    });
  });
});
