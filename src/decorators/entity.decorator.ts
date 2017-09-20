export function Entity<T extends Function>(name: string): Function {
    
      return function(target) {
        target.prototype['$$name'] = name;
      };
    
    }
    