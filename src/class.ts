abstract class Person {
	static species = 'Homo sapience';

	static isAdult(age: number) {
		if (age > 18) return true;
		return false;
	}

	constructor(public readonly name: string, protected age: number) {}

	incrementAge() {
		this.age++;
	}

	greeting(this: Person) {
		console.log(`Hello My name ${this.name}. I am ${this.age} years old`);
		this.explainJob();
	}

	// 抽象的なクラス（abstract class）で継承でのみ使えるクラスで、抽象的なメソッドなどを定義する。具体的な処理は継承先で実装する。
	abstract explainJob(): void;
}

class Teacher extends Person {
    private static instance: Teacher;

	private constructor(name: string, age: number, private _subject: string) {
		super(name, age);
    }

    get subject() {
        if (!this._subject) throw new Error('例外が発生しました');
        return this._subject;
    }

    set subject(value) {
        this._subject = value;
    }

    // 抽象クラスに抽象メソッドが定義されている場合は、継承先で同名のメソッドを定義しないとエラーになる
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }

	// greeting() {
	// 	console.log(`Hello My name ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
	// }

    static getInstance() {
        if (Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 40, 'Math');
        return Teacher.instance;
    }
}

// 抽象クラスは直接的にインスタンス化できない
// const bob = new Person();

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher === teacher2);
// teacher.greeting();
