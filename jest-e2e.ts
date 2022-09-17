import { pathsToModuleNameMapper } from 'ts-jest';
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
import { compilerOptions } from './tsconfig.json';

const jestConfig = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
};

export default jestConfig;
