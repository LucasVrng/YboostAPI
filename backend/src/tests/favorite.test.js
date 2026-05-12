describe("Favorite Service", () => {
  it("throws validation error when add payload is invalid", async () => {
    const { addFavoriteForUser } =
      await import("../services/favoriteService.js");

    await expect(addFavoriteForUser("abc", null)).rejects.toMatchObject({
      status: 400,
      error: "ValidationError",
    });
  });

  it("throws validation error when remove id is invalid", async () => {
    const { removeFavoriteForUser } =
      await import("../services/favoriteService.js");

    await expect(removeFavoriteForUser("invalid")).rejects.toMatchObject({
      status: 400,
      error: "ValidationError",
    });
  });

  it("throws validation error when fetching favorites with invalid id", async () => {
    const { fetchUserFavorite } =
      await import("../services/favoriteService.js");

    await expect(fetchUserFavorite("0")).rejects.toMatchObject({
      status: 400,
      error: "ValidationError",
    });
  });
});
