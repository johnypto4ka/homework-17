const elem1 = document.querySelector('#elem1')
const elem2 = document.querySelector('#elem2')

// ------------------------------------------------

function getFirstValue () {
  alert(this.value)
}

function getSecondValue (surname, name) {
  alert(this.value + ', ' + surname + ' ' + name)
}

// 1

getFirstValue.call(elem1)

// 2 , 3 

getSecondValue.call(elem2, 'Kuzbar', 'Stanislau')

getSecondValue.apply(elem2, ['Kuzbar', 'Stanislau'])

// 4

const showName = getSecondValue.bind(elem2)
showName('Nemtcov', 'Boris')
showName('Hodorkovskiy', 'Mihail')