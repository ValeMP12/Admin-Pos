<template>
  <div>
    <h1>Home</h1>
  </div>

</template>

<script lang="ts">
import { getProducts } from '@/modules/products/actions/get-products';
getProducts();
</script>
