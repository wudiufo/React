// 这是父类 【可以直接把父类理解成原型对象prototype】
class Person {
    constructor(name, age) {
            this.name = name
            this.age = age
        }
        // 打招呼的实例方法
    sayHello() {
        console.log('大家好')
    }
}





// 这是子类,美国人
// 在class类中，可以使用extends关键字，实现子类继承父类
// 语法：class子类extends父类{}
class American extends Person {
    // 问题1：为什么一定要在constructor中调用super
    // 答案：因为构造器的一个引用，如果一个子类，通过extends关键字继承了父类，那么，在子类的constructor构造函数中，必须优先调用一下super（）
    // 问题2：super是个什么东西？
    // 答案：super是一个函数，而且，他是父类的构造器；子类的super，其实就是父类中，constructor
    // 问题3：为什么调用了super（）之后，a1实例的name和age都变成了undefined了？
    constructor(name, age) {
        super(name, age)
    }
}

// 
const a1 = new American('jack', 33)
console.log(a1)
a1.sayHello()

// 这是子类，中国人
class Chinese extends Person {
    // name 姓名
    // age 年龄
    // IDNumber身份证号【中国人独有的】，既然是独有的，就不适合挂载到父类上；
    constructor(name, age, IDNumber) {
        super(name, age)
            // 语法规范：在子类中，this只能放到super之后使用
        this.IDNumber = IDNumber
    }
}

const c1 = new Chinese('张三', 22, '121233*****')
console.log(c1)
c1.sayHello()