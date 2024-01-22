import { sprinkles, Sprinkles } from './sprinkles.css';

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (acc, key) =>
      Object.assign(acc, {
        [key]: obj[key],
      }),
    {} as Pick<T, K>,
  );
}

const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> => {
  const _ = { ...obj };

  keys.forEach(key => delete _[key]);

  return _;
};

export interface Atoms extends Sprinkles {
  className?: string | string[];
}

const keys = Array.from(sprinkles.properties.keys());
export const extractAtoms = <P extends Sprinkles>(props: P) => [
  pick(props, keys),
  omit(props, keys),
];

export function atoms(atoms: Atoms) {
  const { className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return [sprinklesClassNames, className].filter(Boolean).join(' ');
}
