export function Entity<T extends Function>(name: string): Function {

          return function(target: any) {
            target.prototype['$$name'] = name;
          };

        }
