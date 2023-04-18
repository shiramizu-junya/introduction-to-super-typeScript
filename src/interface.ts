// type Human = {
//     name: string;
//     age: number;
// }

// 👇interfaceはTypeエイリアスと似ているが、オブジェクトにしか型をつけられない。Union型には型をつけられない
// 👇abstractはある程度実装されていたが、interfaceは全く実装されない
interface Human {
	name: string;
    age: number;
    // 👇メソッドにしか書けない。普通の関数の型注釈には書けない書き方。
    greeting(message: string): void;
};

// const human: Human = {
//     name: 'Quill',
//     age: 40,
//     greeting(message: string) {
//         console.log(message);
//     }
// }

/*
    👇Developerインスタンスを作る際に、Humanを最低でも満たすインスタンスを作ることを強制できる。
      implementsはclassのextendsと違って、複数implementsできる。
      staticプロパティやメソッドにはimplementsは影響しない。
*/
class Developer implements Human {
    constructor(public name: string, public age: number, public experience: number) {
    }

    greeting(message: string): void {
        console.log('message');
    }
}
