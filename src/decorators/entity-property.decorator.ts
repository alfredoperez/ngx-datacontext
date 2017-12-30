export function EntityProperty<T>(entity?: { new (): T }): any {
  return (target: any, property: any) => {
    if (entity !== undefined) target[property] = new entity();
  };
}
