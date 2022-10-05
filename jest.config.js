module.exports = {
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
    modulePathIgnorePatterns: [
      "./dist"
    ],
    preset: "ts-jest",
    setupFilesAfterEnv: ['./singleton.ts'],
}