declare const _default: <F extends (...args: any[]) => void>(fn: F, delay: number) => (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
export default _default;
