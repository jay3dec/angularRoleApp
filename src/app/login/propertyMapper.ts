export function propertyMap(sourceProperty:string) {
    return function (target: any, propertyKey: string) {
      if(!target.constructor._propertyMap){
        target.constructor._propertyMap ={};
      } 
      target.constructor._propertyMap[sourceProperty] = propertyKey;
    }
}

export class ModelMapper<T> {
    _propertyMapping: any;
    _target: any;
    constructor(type: { new(): T; }) {
        this._target = new type();
        this._propertyMapping = this._target.constructor._propertyMap;
    }

    map(source) {
        let mappedKeys = Object.keys(this._propertyMapping);
        Object.keys(source).forEach((key) => {
           if(mappedKeys.indexOf(key) === -1){
            this._target[key] = source[key];
           } else {
               this._target[this._propertyMapping[key]] = source[key];
           }
        });
        return this._target;
    }
}