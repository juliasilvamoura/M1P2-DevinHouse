<template>
<div class="cardProduto">
    <div class="imageProduto">
        <slot name="foto"></slot>
    </div>
    <div class="titulo">
        <slot name="titulo"></slot>
    </div>
    <div class="marca">
        <slot name="marca"></slot>
    </div>
    <div class="modelo">
        <slot name="modelo"></slot>
    </div>
    <div class="span">
        <slot name="span"></slot>
    </div>    
>>>>>>> Stashed changes
</div>
</template>

<script>
export default {

}
</script>

<style>
.cardProduto{
    border: solid 1.5px black;
    border-radius: 3%;
    text-align: center;
    width: 25%;
    margin: 0.5%;
    padding: 1%;
}
.imageProduto img{
    width: 40%;
    border-radius: 80%;
}

.titulo{
    font-weight: 800;
    font-size: 100%;
    margin: 10px;
}
.marca{
    font-size: 80%;
}
.modelo{
    font-size: 80%;
    margin-bottom: 4%;
}

span{
   color: white;
   padding: 5px;
   border-radius: 20px; 
}
</style>
