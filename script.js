const selectAllButton = document.getElementById('test')
const inputElement = document.getElementById('input')
const ulElement = document.getElementById('list')

//const todoList = []
let todoList = []

actionPanel2.style.display = 'none'            // не удаляем из DOM а скрываем


inputElement.addEventListener('keydown', event =>{
    if((event.key==='Enter' || event.keyCode===13)&&(inputElement.value)){
    todoList.unshift({
        content: inputElement.value,
        done: false,
        selected: false
    })


    inputElement.value = ''
    upgradeView()
    }

})

function upgradeView() {
    ulElement.innerHTML = ''
//    for (const todoItem of todoList){
        for (let index = 0; index < todoList.length; index++){
        const todoItem = todoList[index]

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
        checkboxElement.id = 'todoItem' + index
        checkboxElement.checked = todoItem.selected

        const labelElement = document.createElement('label')
        divElement.append(labelElement)
        labelElement.className = 'form-check-label'
        if (todoItem.done){
            labelElement.className += ' todoDone'
        }
        labelElement.setAttribute('for', 'todoItem' + index)
        labelElement.innerText = todoItem.content


        if (!todoItem.done){                                        //если элемент не выполнен то мы эту кнопку добавим
            const buttonDoneElement = document.createElement('button')
            divElement.append(buttonDoneElement)
            buttonDoneElement.type = 'button'
            buttonDoneElement.className = 'btn btn-outline-primary'
            buttonDoneElement.innerText = 'Done'
            buttonDoneElement.style = 'float: right'

             buttonDoneElement.addEventListener('click', () =>{        //обработчик событий
                todoItem.done = !todoItem.done  //меняем на противоположный
                upgradeView() //обновляем
           })

        }

        else {                                                        //если элемент выполнен то мы эту кнопку добавим
            const buttonRemoveElement = document.createElement('button')
            divElement.append(buttonRemoveElement)
            buttonRemoveElement.type = 'button'
            buttonRemoveElement.className = 'btn btn-outline-primary'
            buttonRemoveElement.innerText = 'Remove'
            buttonRemoveElement.style = 'float: right'

            buttonRemoveElement.addEventListener('click', () => {          //обработчик событий
                todoList = todoList.filter (
                currentTodoItem => currentTodoItem !== todoItem )
                upgradeView()
           })
        }

        checkboxElement.addEventListener('change', () => {
        todoItem.selected = checkboxElement.checked
        upgradeView()

        })
      }
      const someSelected = todoList.some(todoItem => todoItem.selected)
      if (someSelected) {
        actionPanel1.style.display = 'none'
        actionPanel2.style.display = 'block'
      }

      else {
         actionPanel1.style.display = 'flex'
         actionPanel2.style.display = 'none'
      }
}


document.getElementById('doneAction').addEventListener('click', () => {
    for (const todoItem of todoList )
        if (todoItem.selected){
        todoItem.done = true
        todoItem.selected = false
        }
        upgradeView()
})

document.getElementById('restoreAction').addEventListener('click', () => {
    for (const todoItem of todoList )
        if (todoItem.selected){
        todoItem.done = false
        todoItem.selected = false
        }
        upgradeView()
})


document.getElementById('removeAction').addEventListener('click', () => {
    todoList = todoList.filter(todoItem => !todoItem.selected)

    upgradeView()
})

document.getElementById('test').addEventListener('click', () => {
    for (const todoItem of todoList ){
       todoItem.selected = true
        }

    upgradeView()

})
