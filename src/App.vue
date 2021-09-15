<template>
    <div class="app">
        <post-form
                @create="createPost"
        />
        <post-list
                :posts="posts"
                @remove="removePost"
        />
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
                    {id:1, title: 'JS', body: 'Описание поста'},
                    {id:2, title: 'JS-2', body: 'Описание поста-2'},
                    {id: 3, title: 'JS-3', body: 'Описание поста-3'},
                ],
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post)
            },
            removePost(post) {
                this.posts.filter(p => p.id !== post.id)
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