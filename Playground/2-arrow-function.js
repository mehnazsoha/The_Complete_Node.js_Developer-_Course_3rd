// // function type-1
// const square = function (x) {
//     return x * x
// }
// console.log(square(3))


// // function type-2
// const square = (x) => {
//     return x * x
// }
// console.log(square(2))


// // function type-3
// const square = (x) => x * x
// console.log(square(4))


// const event = {
//     name: 'Birthday party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }
// event.printGuestList()


// const event = {
//     name: 'Birthday party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }  // arrow function method er khetre use na korai valo. karon aeta method er khetre kaj kore na
// }
// event.printGuestList()


// const event = {
//     name: 'Birthday party',
//     printGuestList() {
//         console.log('Guest list for ' + this.name)
//     }  // method er khetre aevhabe function er kaj korte hobe
// }
// event.printGuestList()


// const event = {
//     name: 'Birthday party',
//     guestList: ['soha', 'iqbal', 'rony', 'poran'],
//     printGuestList() {
//         const that = this
//         console.log('Guest list for ' + this.name)
//         this.guestList.forEach(function (guest) {
//             console.log(guest + ' is attending ' + that.name)  //funtion keyword tar vitore this use korle oeta sudhu matro oe funtion tar vitorer object tai khuje. tai that variable a this pass kore shei that ta use kora hochche
//         })
//     }
// }
// event.printGuestList()


const event = {
    name: 'Birthday party',
    guestList: ['soha', 'iqbal', 'rony', 'poran'],
    printGuestList() {  // ES6 method definition systax
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()