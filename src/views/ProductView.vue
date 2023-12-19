<script setup lang="ts">
import ProductWidgetTitle from '../components/product/ProductWidgetTitle.vue';
import ProductWidgetDetail from '../components/product/ProductWidgetDetail.vue';
</script>

<template>
    <div class="rounded-xl shadow-md widget">
        <ProductWidgetTitle/>
        <ProductWidgetDetail/>
    </div>
</template>

<style scoped>
.widget {
    width: 851px;
    height: 419px;
    background: #F9F9F9;

    @media screen and (max-width: 460px) {
        width: 331px;
        height: 697px;
    }
}
</style>