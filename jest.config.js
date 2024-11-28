module.exports = {
  preset: 'ts-jest', // Para TypeScript
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Transforma arquivos TS/JS com Babel
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Ignora arquivos de estilo (opcional)
  },
  testEnvironment: 'jsdom', // Ambiente para simular o DOM
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // Extensões do Jest Native
};
