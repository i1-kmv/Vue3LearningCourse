<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <my-input
                v-model="post.title"
                placeholder="Название поста"
                type="text"
        />
        <my-input
                v-model="post.body"
                placeholder="Описание поста"
                type="text"
        />
        <my-button
                @click="createPost"
                style="margin-top: 15px"
        >
            Создать
        </my-button>
    </form>
</template>

<script>
    import MyButton from "./UI/MyButton";
    import MyInput from "./UI/MyInput";

    export default {
        name: "PostForm.vue",
        components: {MyInput, MyButton},
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
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: ''
                }
            }
        }
    }
</script>

<style scoped>

    form {
        display: flex;
        flex-direction: column;
    }


</style>