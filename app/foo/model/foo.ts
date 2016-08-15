export class Foo {

    constructor(public id:number, public nickName:string) {
        this.id = id;
        this.nickName = nickName;

        console.log(this);
    }
}