export const isDev = process.env.NODE_ENV === 'development';
export const isWindowAvailable = typeof window !== 'undefined';

export const compose = (...funcs: any): any => {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a: any, b: any) => (...args: any) => a(b(...args)));
};
