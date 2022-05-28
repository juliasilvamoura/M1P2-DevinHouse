<template>
<<<<<<< Updated upstream
  <div class="sidebar">
    <div class="navbar" id="side">
      <div class="geral">
        <label>Geral</label>
=======
<div>
  <transition name="slide">
  <div v-show="show" class="sidebar">
      <div class="geral">
        <label class="nomeside">Geral</label>
>>>>>>> Stashed changes
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/inventario">Inventário</router-link>
          </li>
          <li class="nav-item">
<<<<<<< Updated upstream
            <router-link to="/">Sair</router-link>
            <!-- <a href="#" @click="logout">Sair</a> -->
          </li>
        </ul>

        <label>Colaboradores</label>
=======
            <a href="#" @click="logout">Sair</a>
          </li>
        </ul>

        <label class="nomeside">Colaboradores</label>
>>>>>>> Stashed changes
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/colaborador/cadastro">Cadastrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/template/colaborador/listagem">Listar</router-link>
          </li>
        </ul>

<<<<<<< Updated upstream
        <label>Produtos</label>
=======
        <label class="nomeside">Produtos</label>
>>>>>>> Stashed changes
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/produto/cadastro">Cadastrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/template/emprestimo">Empréstimo</router-link>
          </li>
        </ul>
      </div>
<<<<<<< Updated upstream
      <!-- <div class="icons">
            <btn type="primary" :full="false" icon="fa-user">Fazer Login</btn>
        </div> -->
    </div>
=======
   
   
  </div>
  </transition>
  <button class="botao" @click="show = !show">b</button>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
  data() {
<<<<<<< Updated upstream
    return {};
  },
  methods: {
    logout() {
      this.$store.commit("autenticacaoModule/logout");
      this.$router.push("/login");
=======
    return {
      show: true
    };
  },
  methods: {
    logout() {
      this.$store.commit("userModule/logout");
      this.$router.push("/");
>>>>>>> Stashed changes
    },
  },
};
</script>

<style>
html{
  height: 100%;
<<<<<<< Updated upstream
}
.sidebar {
  position: absolute;
  /* position: relative; */
  margin: 0;
  height: 100% !important;
  width: 10%;
  background-color: rgb(3, 3, 141);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
#side {
=======
  font-family: Arial, Helvetica, sans-serif;
}
.sidebar {
  position: absolute;
  margin: 0;
  height: 100% !important;
  width: 11%;
  background-color: rgb(3, 3, 141);
  color: white;
  
}
#side {
  position: absolute;
  background-color: rgb(3, 3, 141);
>>>>>>> Stashed changes
  margin: 3%;
}
label {
  font-weight: bold;
  font-size: 100%;
}
<<<<<<< Updated upstream

=======
.nomeside{
  margin: 4%;
}
li{
  padding: 2%;
}
>>>>>>> Stashed changes
.geral{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
<<<<<<< Updated upstream
=======

.botao{
  position: absolute;
  bottom: 1%;
  z-index: 100;
  margin-left: 2%;
  border: none;
  border-radius: 15%;
}

.slide-enter-active,
.slide-leave-active{
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to{
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}



>>>>>>> Stashed changes
</style>