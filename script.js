// // alert('Hello!')
// // confirm('Вы учите JS')
// // 

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')

// // const skillText = prompt("Какой язык вы учите?", "Пока не в курсе")
// // const isLoveValue = confirm('Вы любите изучаемый язык')


// // skill.innerText = skillText
// // isLove.innerText = isLoveValue

// string.innerHTML = "str"

// STRING
// const str1 = 'I\'m OK'
// const str2 = "Саша сказал: \n \"Привет\""
// const str3 = `I'm say ${str1}`

// console.log(str1)
// console.log(str2)
// console.log(str3)

//NUMBER
// (сумма)+ (разница)- (деление)/ (умножение)* (возведение)**
// const num1 = 75 + 15
// const num2 = 99 * 88
// const num3 = 2**44
// alert(num3)
// const rem = 8 * "5"
// NaN Not a Number
// console.log(rem)
// const inf = 17 / 0
// от -(2**53 -1) до (2**53 -1)

//BIGINT
// const bigint = 123456789877654321n
// console.log(bigint)

//boolean
//true / false
// > < >= <= >== <== == ===
// const bool = 10 > 5
// console.log(bool)

//NULL
// let empt = null
// console.log(empt, typeof empt)

//UNDEFINED
// let box = undefined
// console.log(box, typeof box)

//SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

//OBJECT
// const obj = {
//     name: "Pasha",
//     age: 28,
//     isHappy: true
// }
// console.log(obj.name)
// console.log(obj['name'])

// obj.job = "Yandex"
// console.log(obj)

// const arr = ["Аня", 8, true]
// arr.job = "SpyFamily"
// console.log(arr)

// const variant = "option1"
// console.log( 5 == "5")
// console.log( 5 === "5")
// console.log( "5" == "5")
// console.log( 'a' > "15")

// const userName = prompt('Who you are?', 'anonim')
// if (userName === 'admin') {
//     alert('Hello, Boss!')
// }
// else if (userName === 'anonim' || !userName){
//     alert(`I don't know you..`)
// }
// else {alert(`Hi, ${userName}`)}

// const counts = prompt('До скольки хотите посчитать?', 10)
// let i = 10
// while (i <= counts) {
//     console.log(i++)
// }

// do {
//     console.log(i++) 
// } while (i <= counts)

// const arr = []

// for (let i=1; i<=50; ++i){
//     arr.push(i)
// }


// const newArr = []

// for (elem of arr) {
//     const marker = elem % 3
//     if (!marker){
//         newArr.push(elem)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: 'Имя',
//     age: 0,
//     city: 'Default'
// }
// for (key in obj) {
//     console.log(key, obj[key])
// }

//FUNCTION
//declaration

// function multiply(a, b) {
//     const result = (a * b)
//     return result;
// }
// console.log(multiply(2, 5))

// //expretion
// const wowScream = function () {
//     alert("WooooooooW")
// }
// // wowScream()

// //arrow
// const arrow = () => {
//     allert("arrow is in the sky")
// }
// // arrow()

//ИГРА
//Нажав на кнопку начать игра запускается
//пользователь можетт ввести ответ, должна появиться кнопка проверить
//нажав кнопку проверить мы сравниваем ввод пользователя с ответом
//вывести результат и правильное значение, сменить кнопку на начать заново

const getRandomNuminRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNuminRange(0, 100)
    // const randomNum2 = getRandomNuminRange(0, 100)

    // let symbol
    // if (Math.random() > 0.5){
    //     symbol = "+"
    // }
    // else {
    //     symbol = "-"
    // }

    const symbol = (Math.random() < 0.5) ? "+" : "-"
    const task = `${getRandomNuminRange(0, 100)} ${symbol} ${getRandomNuminRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}



const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,

}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась"
        userAnswer.value = null
        //генерируем задачу, и ответ
        // const task = getTask()
        //показываю задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toggleGameState()
        //меняю кнопку
        //меняю состояние
    } else {
        // сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        // вывести поздравления
        title.innerText = "Вы " + ((isRight) ? "победили!" : "проиграли")
        // поменять кнопку и состояние
        btnGame.innerText = "Начать заново"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})

// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// }
// else {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// }
const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

// const choosedState = {
//     countElements: 0,
// }

// const changeCount = (value) => {
//     choosedState.countElements += value
//     counterEl.innerHTML = choosedState.countElements
// }

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerHTML = this.countElements
    }
}
const eventFunc = (e) => {
    // choosedEl[i].className = "choosed_element"
    //выбрать элемент, т.е. выделить его с помощью класса
    //запустить счетчик
    // counterEl.innerText = +counterEl.innerText +1
    if (e.target.className === "") {
        e.target.className = "choosed_element"
    choosedState.setCountValue (1)
    } else {
        e.target.className = ""
        choosedState.setCountValue (-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}