const todos = [
    {text: "lavar a louça", done: false},
    {text: "apanhar o lixo", done: true},
    {text: "dobrar as roupas", done: true},
]

const doneTodos = todos.filter(function(todo){
    return todo.done
})

console.log(doneTodos)