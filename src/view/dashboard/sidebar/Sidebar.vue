<template>
<div>
  <transition name="slide">
  <div v-show="show" class="sidebar">
      <div class="geral">
        <label class="nomeside">Geral</label>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/inventario">Inventário</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click="logout">Sair</a>
          </li>
        </ul>

        <label class="nomeside">Colaboradores</label>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/colaborador/cadastro">Cadastrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/template/colaborador/listagem">Listar</router-link>
          </li>
        </ul>

        <label class="nomeside">Produtos</label>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/produto/cadastro">Cadastrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/template/emprestimo">Empréstimo</router-link>
          </li>
        </ul>
      </div>
    
  </div>
  </transition>
  <button class="botao" @click="show = !show">b</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    logout() {
      this.$store.commit("userModule/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
html{
  height: 100%;
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
  margin: 3%;
}
label {
  font-weight: bold;
  font-size: 100%;
}
.nomeside{
  margin: 4%;
}
li{
  padding: 2%;
}

.geral{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

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

</style>
