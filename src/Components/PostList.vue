<template>
    <div v-if="posts.length > 0">
        <h3>My posts</h3>
        <post-item
                class="post"
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
        />
    </div>
    <h2 v-else>
        список постов пуст
    </h2>
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