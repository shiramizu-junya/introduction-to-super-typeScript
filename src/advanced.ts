/*
 * 72. AかつBのように、&を用いてインターセクション型を定義する方法
 */
// type Engineer = {
//     name: string;
//     role: string;
// }

// type Blogger = {
//     name: string;
//     follower: number;
// }

interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

// type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger {}

// const quill: EngineerBlogger = {
//     name: 'Quill',
//     role: 'front-end',
//     follower: 1000
// }

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

/*
 * 73. 条件文を使って型を絞り込む、３つのType guard
//  */
// function toUpperCase(x: string | number) {
//     if (typeof x === 'string') return x.toUpperCase();
//     return '';
// }

type NomadWorker = Engineer | Blogger;

function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) console.log(nomadWorker.role);
    if ('follower' in nomadWorker) console. log(nomadWorker. follower);
}

class Dog {
	// 74. タグ付きUnionを使って型を絞り込む方法
	kind: 'dog' = 'dog';

	speak() {
		console.log('bow-wow');
	}
}

class Bird {
	// 74. タグ付きUnionを使って型を絞り込む方法
	kind: 'bird' = 'bird';

	speak() {
		console.log('tweet-tweet');
	}

	fly() {
		console.log('flutter');
	}
}

type Pet = Dog | Bird;

function havePet(pet: Pet) {
	pet.speak();

	// 74. タグ付きUnionを使って型を絞り込む方法
	switch (pet.kind) {
		case 'bird':
			pet.fly();
	}

	if (pet instanceof Bird) pet.fly();
}

/*
 * 75. 型アサーションを使って、手動で型を上書きする方法
 */

// const input = document.getElementById('input'); // -> HTMLElement | null型
// const input = <HTMLInputElement>document.getElementById('input');
// const input = document.getElementById('input') as HTMLInputElement;
// input.value = 'init Value';

// (document.getElementById('input') as HTMLInputElement).value = 'init Value';

/*
 * 76. !(Non-null assertion operator)を使って、nullじゃないと言い切る方法
 * 絶対にnullじゃないと言い切る。
 */

// const input = document.getElementById('input')!; // -> !でnullが消える
// const input = document.getElementById('input') as HTMLElement; // -> これと同じ

/*
 * 77. インデックスシグネチャを使用して柔軟なオブジェクトを作る方法
 */
// interface Designer {
// 	name: string;
// 	// [index: string]: string; // -> オブジェクトになんでも追加できる
// 	// [index: number]: string;
// 	[index: string]: number;
// }

// const designer: Designer = {
//     name: 'Quill',
//     // role: 'web',
//     // 10: 'hoge',
//     // age: 30
// }

/*
 * 78. 関数のオーバーロードを使って、戻り値の型を正しくTypeScriptに伝える方法
 */
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}

const upperHello = toUpperCase('hello');
const num = toUpperCase(10);

/*
 * 79. Optional Chainingはこう使う！
 */
interface DownloadedData {
    id: number;
    user?: {
        name?: {
            firstName: string;
            lastName: string;
        }
    }
}

const dl: DownloadedData = {
    id: 1,
}

// console.log(dl.user.name);
// console.log(dl.user?.name);

/*
 * 80. Nullish Coalescingはこう使う！
 */
const userData = dl.user ?? 'no-user';
// const userData = null ?? 'no-user'; // -> ??の左がnullやundefinedの時だけ、右側が評価される
console.log(userData);

/*
 * 81. LookUp型を使ってオブジェクトのメンバーの型を取得する方法
 */
