const selectAllButton = document.getElementById('test')
const inputElement = document.getElementById('input')
const ulElement = document.getElementById('list')

todoList = []


selectAllButton.addEventListener('click',() =>{
    console.log('fired')
})

inputElement.addEventListener('keydown', event =>{
    if(event.key==='Enter' || event.keyCode===13){
    todoList.push(inputElement.value)
    inputElement.value = ''
    }

})

const liElement = document.createElement('li')
liElement.className = "list-group-item"
ulElement.append(liElement)

const divElement = document.createElement('div')
divElement.className = 'form-group form-check'
liElement.append(divElement)

const checkboxElement = document.createElement('input')
divElement.append(checkboxElement)
checkboxElement.type = 'checkbox'
checkboxElement.className = 'form-check-input'

const labelElement = document.createElement('label')
divElement.append(labelElement)
labelElement.className = 'form-check-label'
labelElement.setAttribute = ('for', 'exampleCheck1')
labelElement.innerText = 'Check me out'

const buttonDoneElement = document.createElement('button')
divElement.append(buttonDoneElement)
buttonDoneElement.type = 'button'
buttonDoneElement.className = 'btn btn-outline-primary'
buttonDoneElement.innerText = 'Done'

const buttonRemoveElement = document.createElement('button')
divElement.append(buttonRemoveElement)
buttonRemoveElement.type = 'button'
buttonRemoveElement.className = 'btn btn-outline-primary'
buttonRemoveElement.innerText = 'Remove'






//
//      <li class="list-group-item">

//		</li>





//js
//----------------------------
//methods: addEventListener,-обработчик собития
//----------------
//events: click, - события
//---------------------------
//properties: innerText, - свойства
//-------------------------



//inputElement.value = 'test test test'
//testElement.innerText = 'another text'
//console.log(testElement)

//liElement.innerHTML =`
//                <div class="form-group form-check">
//                <input type="checkbox" class="form-check-input" id="exampleCheck1">
//                <label class="form-check-label" for="exampleCheck1">Check me out</label>
//                <button type="button" class="btn btn-outline-primary">Done</button>
//                <button type="button" class="btn btn-outline-danger">Remove</button>
//                </div>`