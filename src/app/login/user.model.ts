import { propertyMap } from './propertyMapper';

export class Employee {
    public firstName: String;
    @propertyMap('lname')
    public lastName: String;
    @propertyMap('age')
    public empage: Number;
}