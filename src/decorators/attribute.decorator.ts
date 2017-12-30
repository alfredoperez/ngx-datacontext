export const ATTRIBUTE_METADATA = Symbol('AttributeMetadata');

export interface EntityAttribute {
  name: string;
  options: AttributeDecoratorOptions;
}

export interface AttributeDecoratorOptions {
  serializedName?: string;
  isEntity?: boolean;
}

export function Attribute(
  options: AttributeDecoratorOptions = {}
): PropertyDecorator {
  return (target: any, attributeKey: any): void => {
    if (target.attributes === undefined)
      target.attributes = new Array<EntityAttribute>();

    if (options.serializedName === undefined)
      options.serializedName = attributeKey;

    target.attributes.push({
      name: attributeKey,
      options
    });
  };
}
