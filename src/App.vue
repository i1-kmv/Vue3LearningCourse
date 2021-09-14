<template>
    <div class="app">
        <post-form/>
        <post-list :posts="posts"/>
    </div>
</template>

<script>
    import PostForm from "./Components/PostForm";
    import PostList from "./Components/PostList";

    export default {
        name: "App.vue",
        components: {PostList, PostForm},
        data() {
            return {
                posts: [
                    {id: 1, title: 'JS', body: 'Описание поста'},
                    {id: 1, title: 'JS-2', body: 'Описание поста-2'},
                    {id: 1, title: 'JS-3', body: 'Описание поста-3'},
                ],
            }
        },
        methods: {
            createPost() {

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

</style>