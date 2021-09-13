<template>
    <div class="app">
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <input v-bind:value="title"
                   @input="inputTitle"
                   class="input"
                   type="text"
                   placeholder="Название поста"
            >
            <input v-bind:value="body"
                   @input="inputBody"
                   class="input"
                   type="text"
                   placeholder="Описание поста"
            >
            <button class="btn" @click="createPost">Создать</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Название:</strong>{{post.title}}</div>
            <div><strong>Описание:</strong>{{post.body}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App.vue",
        data() {
            return {
                posts: [
                    {id: 1, title: 'JS', body: 'Описание поста'},
                    {id: 1, title: 'JS-2', body: 'Описание поста-2'},
                    {id: 1, title: 'JS-3', body: 'Описание поста-3'},
                ],
                title: '',
                body: ''
            }
        },
        methods: {
            createPost() {
                const newPost = {
                    id: Date.now(),
                    title: this.title,
                    body: this.body
                }
                this.posts.push(newPost)
            },
            inputTitle(event) {
                this.title = event.target.value
            },
            inputBody(event) {
                this.body = event.target.value
            }
        }
    }
</script>

<style>
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .post {
        padding: 15px;
        border: 2px solid darkcyan;
        margin-top: 15px;
    }

    .input {
        width: 100%;
        border: 1px solid darkcyan;
        padding: 10px 15px;
        margin-top: 15px;
    }

    .btn {
        align-self: flex-end;
        margin-top: 15px;
        padding: 10px 15px;
        background: none;
        border: 1px solid darkcyan;
    }
</style>