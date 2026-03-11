const mongoose = require("mongoose");
const Favorite = require("../models/favorite");

// Mock mongoose
jest.mock("mongoose", () => {
  const actualMongoose = jest.requireActual("mongoose");
  return {
    ...actualMongoose,
    connect: jest.fn().mockResolvedValue(undefined),
    disconnect: jest.fn().mockResolvedValue(undefined),
    connection: {
      db: {
        dropDatabase: jest.fn().mockResolvedValue(undefined),
      },
    },
  };
});

describe("Favorite Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should validate favorite with user and item", () => {
    const favorite = new Favorite({
      user: new mongoose.Types.ObjectId(),
      item: new mongoose.Types.ObjectId(),
    });
    const validationError = favorite.validateSync();
    expect(validationError).toBeUndefined();
  });

  it("should not validate favorite without user", () => {
    const favorite = new Favorite({ item: new mongoose.Types.ObjectId() });
    const validationError = favorite.validateSync();
    expect(validationError).toBeDefined();
    expect(validationError.errors.user).toBeDefined();
  });

  it("should not validate favorite without item", () => {
    const favorite = new Favorite({ user: new mongoose.Types.ObjectId() });
    const validationError = favorite.validateSync();
    expect(validationError).toBeDefined();
    expect(validationError.errors.item).toBeDefined();
  });
});
