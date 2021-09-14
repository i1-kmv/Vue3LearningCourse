<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input v-model="post.title"
               class="input"
               type="text"
               placeholder="Название поста"
        >
        <input v-model="post.body"
               class="input"
               type="text"
               placeholder="Описание поста"
        >
        <button class="btn" @click="createPost">Создать</button>
    </form>
</template>

<script>
    export default {
        name: "PostForm.vue",
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                this.post.id = Date.now()
                this.posts.push(newPost)
                this.title = ''
                this.body = ''
            }
        }
    }
</script>

<style scoped>

    form {
        display: flex;
        flex-direction: column;
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