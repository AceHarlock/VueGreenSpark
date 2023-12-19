<script setup lang="ts">
</script>

<template>
    <div class="border-b-2 border-gray-400 mx-auto widget-header mt-5">
        <h3 class="text-black font-bold widget-title">
            Per product widget
        </h3>
    </div>
</template>

<style scoped>
.widget-header {
    width: 776px;
    height: 48px;
    margin-bottom: 20px;

    @media screen and (max-width: 460px) {
        width: 258px;
        margin: 48px;
        margin-bottom: 5px;
    }
}

.widget-title {
    font-family: 'Cabin';
    font-size: 30px;
}
</style>