<template>
<div class="cardProduto">
    <div class="imageProduto">
        <img :src="cadastroProds.image" alt="produto">
    </div>
    <div class="informacoes">
        <label >{{cadastroProds.tituloItem}}</label>
        <label>{{cadastroProds.marca}}</label>
        <label>{{cadastroProds.modelo}}</label>

    </div>
</div>
</template>

<script>
export default {
computed: {
        cadastroProds(){
            this.$store.state.cadProdutoModule.cadastroProds;
        }
    },
}
</script>

<style>

</style>