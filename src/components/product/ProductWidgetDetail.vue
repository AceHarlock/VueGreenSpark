<script setup lang="ts">
import ProductItem from "./ProductItem.vue";

import { useStore } from 'vuex';
import { onMounted, reactive, computed } from 'vue'

const store = useStore();

onMounted(() => {
    // const data = store.getters.getData;
})

const data = computed(() => {
    return store.getters.getData
})

</script>

<template>
    <div class="d-flex justify-between product-detail mx-auto">
        <ProductItem
            v-for="item in data"
            :key="item.id"
            :id="item.id"
            :type="item.type"
            :amount="item.amount"
            :action="item.action"
            :active="item.active"
            :linked="item.linked"
            :selectedColor="item.selectedColor"
        />
    </div>
</template>

<style scoped>
.product-detail {
    width: 779px;
    height: 172px;

    @media screen and (max-width: 460px) {
        width: 258px;
        height: 568px;

        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>