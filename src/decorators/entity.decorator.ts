export function Entity<T extends Function>(name: string): Function {
  return (target: any): any => {
    target.prototype['$$name'] = name;
  };
}
