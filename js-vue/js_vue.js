Vue.component('myItem', {
    template: '<li>{{todo.text}}</li>',
    props: ['todo']
});

let app = new Vue({
    el: '#app',
    data: {
        message: 'hello word',
        seen: false,
        todos: [
            {text: '学习 JavaScript'},
            {text: '学习 Vue'},
            {text: '整个牛项目'}
        ],
        myInput: '我来了',
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ],
        counter: 0,
        picked: ''
    },
    methods: {
        clickBtn: function () {
            alert(this.message);
        },
        count: function () {
            return this.counter += 1;
        }
    }
});

let diffuse = new Vue({
    el: 'diffuse',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
        fontSize: 0
    },
    methods: {
        addFontSize: function (value) {
            this.fontSize += value;
        },
        reduceFontSize: function (value) {
            this.fontSize -= value;
        }
    }
});
Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{post.title}}</h3>
            <button v-on:click="$emit('addFontSize', 1)">+</button>
            <button v-on:click="$emit('reduceFontSize', 1)">-</button>
            <div v-html="post.content"></div>
        </div>
    `
})