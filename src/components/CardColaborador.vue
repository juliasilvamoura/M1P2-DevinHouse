<template>
  <div class="cardColaborador">
      <div class="imagem-gravatar">
          <slot name="vue-gravatar"></slot>
      </div>
      <div class="nomeColab">
      <slot name="nome"></slot>
      </div>
      <div class="email">
          <slot name="email"></slot>
      </div>
      <div class="telefone">
          <slot name="telefone"></slot>
      </div>
      <div class="cargo">
          <slot name="cargo"></slot>
      </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.cardColaborador{
    border: solid 1.5px black;
    border-radius: 3%;
    text-align: center;
    width: 30%;
    margin: 0.5%;
    padding: 1%;
}

.imagem-gravatar img{
    width: 30%;
    margin-bottom: 5px;
}

.nomeColab{
    font-size: 130%;
    font-weight: 800;
    padding: 5px;
    width: auto;
}

.email{
    font-size: 90%;
    font-style: italic;

}
.telefone{
    font-size: 90%;
}

.cargo{
    font-size: 110%;
    color: blue;
    font-weight: 800;
    padding: 5px;
    margin-top: 5px;

}

</style>
