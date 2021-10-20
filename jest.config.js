module.exports = {
  testEnvironment: "node",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["/node_modules/"]
};
