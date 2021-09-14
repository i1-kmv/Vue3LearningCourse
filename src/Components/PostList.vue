<template>
    <h3>My posts</h3>
    <post-item class="post" v-for="post in posts" :post="post"/>
</template>

<script>
    import PostItem from "./PostItem";
    export default {
        name: "PostList.vue",
        components: {PostItem},
        props: {
            posts: {
                type: Array,
                required:true
            }
        }
    }

</script>

<style scoped>

</style>