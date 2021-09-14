<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "my-button"
    }
</script>

<style scoped>
    button {
        align-self: flex-end;
        padding: 10px 15px;
        background: none;
        border: 1px solid darkcyan;
        border-radius: 10px;
    }
</style>