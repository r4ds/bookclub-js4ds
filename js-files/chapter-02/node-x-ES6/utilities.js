const DEFAULT_BOUND = 3;

export const clip = (values, bound = DEFAULT_BOUND) => {
  let result = [];
  for (let v of values) {
    if (v <= bound) {
      result.push(v);
    }
  }
  return result;
}
