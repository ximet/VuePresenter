<div id="app">
    <ul>
        <li v-for="todo in todos"> {{ todo.text }} </li>
    </ul>
</div>

new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Forget Angular' },
            { text: 'Forget ReactJS' },
            { text: 'Learn VueJS' }
        ]
    }
})

<template v-for="todo in todos" track-by="$index">
<div v-for="(key, val) in object">
<span v-for="n in 10"> {{ n }} </span>
