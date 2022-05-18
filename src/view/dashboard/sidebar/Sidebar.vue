<template>
  <div class="navbar">
        <div class="geral">
            <label>Geral</label>
            <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Inventário</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Sair</router-link>
        </li>

        <label>Colaboradores</label>
            <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Cadastrar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Listar</router-link>
        </li>

        <label>Produtos</label>
            <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Cadastrar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Empréstimo</router-link>
        </li>
            
        </div>
        <!-- <div class="icons">
            <btn type="primary" :full="false" icon="fa-user">Fazer Login</btn>
        </div> -->
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>