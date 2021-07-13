<template>
  <v-card flat>
    {{$route.params.category}} category index
  </v-card>
</template>

<script>
    export default {
        name: "CategoryIndex",
        created() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
