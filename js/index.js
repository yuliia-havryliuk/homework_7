// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.

const CountryList = [
    {
     country: "Україна",
     capital:"Київ",
     count: 40000000
    },
    {
     country: "Грузія",
     capital:"Тбілісі",
     count: 10000000
    
    },
    {
     country: "Великобританія",
     capital:"Лондон",
     count: 100000000
    },
    {
     country: "США",
     capital:"Вашингтон",
     count: 300000000   
}];


const ConvertToMln = 1000000

const listAddedNumber = CountryList.map(function(country, index){
    return{
        ...country,
        number: index+1,
        count: country.count/ConvertToMln
    }
})

//=============== попередні рішення =====================
//рахуємо порядкові номери країн
// let listCount =[]
// CountryList.forEach((country, index)=>{
// listCount.push(index+1)
// })

//створюємо нові ключі зі значеннями порядкових номерів

//варіант 1:
// for(let i=0;i<CountryList.length;i++){
//     CountryList[i]["number"] = listCount[i]
// }

//варіант 2
// CountryList.map(function(country, index, array){
//     country["number"] = listCount[index]
// })

//конвертуємо count в млн
// const ConvertToMln = 1000000
//варіант 1:
// for (key in CountryList){
//     CountryList[key].count = (CountryList[key].count / ConvertToMln)
// }

//варіант 2
// listAddedNumber.map(function(country, index, array){
//     country.count = country.count/ConvertToMln
// })
//=============== попередні рішення =====================

//створюємо для кожного елемента об'єкта тег
const createCountryList = country =>{

    const listRef = document.createElement('ul')
    listRef.classList.add('list__info')

    const listNumberRef = document.createElement('li')
    listNumberRef.classList.add('list__number')
    listNumberRef.textContent = country.number

    const listCountryRef = document.createElement('li')
    listCountryRef.classList.add('list__country')
    listCountryRef.textContent = country.country

    if(country.country === 'Україна'){
        listCountryRef.style.color = 'blue'
    }

    const listCapitalRef = document.createElement('li')
    listCapitalRef.classList.add('list__capital')
    listCapitalRef.textContent = country.capital

    if(country.capital === 'Київ'){
        listCapitalRef.style.color = 'gold'
    }

    const listCountRef = document.createElement('li')
    listCountRef.classList.add('list__count')
    listCountRef.textContent = `${country.count} млн`
    // console.log(listCountRef)

    //вкладаємо дочерні елементи в батьківський ul
    listRef.append(listNumberRef, listCountryRef, listCapitalRef, listCountRef)


    return listRef
}


// циклимо вивод всіх елементів
listAddedNumber.forEach( country => {
    createCountryList(country)
})


//групуємо всі об'єкти
const allCountriesList = listAddedNumber.map(country => createCountryList(country))

//прикріплюємо їх до HTML-класа
const listRootRef = document.querySelector('.js-country__list')
listRootRef.append(...allCountriesList)



//2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).

//створюємо теги для елементів списку
const flowers = [
    {
        name:'Rose'
    }, 
    {
        name:'Daisy'
    }, 
    {
        name:'Tulip'
    }
]

//нумеруємо список
const addedNumberToFlowers = flowers.map(function(flower, index){
    return {
        ...flower,
        number: index+1
    }
})

//=============== попередні рішення =====================
//варіант 2
// const flowersNumber = [];
// flowers.forEach((flower, index)=>{
//     flowersNumber.push(index+1)
// })

//додаємо змінене значення в масив

//варіант 1:
// for(let i=0;i<flowers.length;i++){
//     flowers[i]["number"] = flowersNumber[i]
// }

//варіант 2
// flowers.map(function(flower, index, array){
//     flower["number"] = flowersNumber[index]
// })
//=============== попередні рішення =====================

//додаємо parent ul
let flowersListRef = document.createElement('ul')
    flowersListRef.classList.add('flowers__list')
    flowersListRef.textContent = 'Flowers:'

//створюємо для елементів теги
const createFlowersList = (flower) => {

    const flowersItemRef = document.createElement('li')
    flowersItemRef.classList.add('flowers__item')
    flowersItemRef.textContent = `${flower.number}. ${flower.name}`
    flowersListRef.appendChild(flowersItemRef)

    return flowersListRef
}

// групуємо всі елементи масива 
const allFlowers = addedNumberToFlowers.map(flower => createFlowersList(flower))

//вішаємо всі елементи на html тег
const allFlowersList = document.querySelector('.js-flowers__list')
allFlowersList.append(...allFlowers)

//додаємо функцію зміни кольору
const colors = ['gold', '#ff9d33', '#8fa9dd', '#db239c', '#bb3ae5']

//створюємо parent тег
let buttonsList = document.createElement('div')
buttonsList.classList.add('button__info')

//створюємо кнопки і вішаємо onclick
const createButtons = color =>{

    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.style.backgroundColor = color
    btn.onclick =()=>{
        allFlowersList.style.color = color
    }

    buttonsList.append(btn)

    return buttonsList
}

//групуємо кнопки
const allButtons = colors.map(color => createButtons(color))
const allButtonsList = document.querySelector('.js-flowers__list')
allButtonsList.append(...allButtons)