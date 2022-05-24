<template>
  <div class="sidebar">
    <div class="navbar" id="side">
      <div class="geral">
        <label>Geral</label>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/inventario">Inventário</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Sair</router-link>
            <!-- <a href="#" @click="logout">Sair</a> -->
          </li>
        </ul>

        <label>Colaboradores</label>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/colaborador/cadastro">Cadastrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/template/colaborador/listagem">Listar</router-link>
          </li>
        </ul>

        <label>Produtos</label>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/template/produto/cadastro">Cadastrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/template/emprestimo">Empréstimo</router-link>
          </li>
        </ul>
      </div>
      <!-- <div class="icons">
            <btn type="primary" :full="false" icon="fa-user">Fazer Login</btn>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.commit("autenticacaoModule/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
html{
  height: 100%;
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
  margin: 3%;
}
label {
  font-weight: bold;
  font-size: 100%;
}

.geral{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>