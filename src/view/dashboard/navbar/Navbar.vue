<template>
  <div class="navbar" id="nav">
      <div class="gravatar">
        <label class="titulo-nav">{{titulo}}</label>
      <label class="nome-gravatar">{{nomeGravatar}}</label>
        <vue-gravatar email= "emailGravatar"/>
       </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: null
    
    }
  },
  computed:{
    titulo(){
            return this.$store.state.tituloModule.titulos;
        },
    emailGravatar(){
      return this.$store.state.userModule.emailGravatar;

    },
    nomeGravatar(){
      return this.$store.state.userModule.nomeusuario;
    }
  },
  mounted(){
      this.$store.commit('userModule/nomeUsuario');
    },

};
</script>

<style>
.nav{
  width: 100%;
  background-color: #03038d;
  display: flex;
  justify-content: row;
  font-family: Arial, Helvetica, sans-serif;
}
.titulo-nav{
  margin-right: 60%;
  font-size: 120%;
  color:white;
  font-weight: 700;
}

img{
  width: 3%;
  height: 3%;
  border-radius: 50%;
  margin-right: 2%;
}

.nome-gravatar{
  color: white;
  font-weight: 200;
}

.gravatar{
  width: 100%;
  margin-left: 13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>