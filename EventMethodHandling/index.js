<div id="example-2">
    <button v-on:click="say('hi')">Say Hi!</button>
    <button v-on:click="say('what')">Say What?!</button>
</div>

new Vue({
    el: '#example-2',
    methods: {
        say: function (msg) {
            alert(msg)
        }
    }
})
