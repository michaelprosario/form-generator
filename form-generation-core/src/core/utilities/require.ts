export class Require
{
    public static objectNotNull(obj, message: string){
        if(!obj){
            throw new Error(message);
        }
    }

    public static stringDefined(str, message: string){
        if(!str || str.length == 0){
            throw new Error(message);
        }
    }

}