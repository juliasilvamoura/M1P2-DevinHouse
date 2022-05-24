<template>
  <div class="logar" style="margin: 5%">
    <h1>Login</h1>
    <vee-form @submit="autenticar" :validation-schema="schema" v-slot="{ errors }">
        <div class="row">
      <div class="col-6">
        <img
          src="https://www.logisticadescomplicada.com/wp-content/uploads/2011/11/gestao-de-estoques.jpg"
          alt="imagem inventário de estoque"
        />
      </div>
        <div class="col-4" style="margin-top: 5%">
          <label>Email </label>
          <vee-field name="email" type="email" class="form-control" v-model="login.email"/>
          <span class="text-danger" v-show="errors.email">{{ errors.email }}</span>
        <!-- </div> -->
        <!-- <div class="col-3" style="margin-top: 2%"> -->
            <br>
          <label>Senha </label>
          <vee-field name="senha" type="password" class="form-control" v-model="login.senha"/>
          <span class="text-danger" v-show="errors.senha">{{ errors.senha }}</span>
          <br>
        <!-- </div> -->
        <!-- <div class="col-4" style="margin-top: 2%"> -->
          <button type="submit" class="btn btn-primary">Login</button>
           <button type="buton" class="btn btn-light" style="margin-left: 5%" @click="google">Google</button>
           <button type="buton" class="btn btn-light" style="margin-left: 5%" @click="cadastroLogin">Cadastrar</button>
        </div>
        </div>
      </vee-form>
    
  </div>
</template>

<script>
import { Form, Field, defineRule } from "vee-validate";
export default {
  components: {
    "vee-form": Form,
    "vee-field": Field,
  },
  data() {
    defineRule("required", (value) => {
      if (!value || value.length === 0) {
        return "Campo obrigatório";
      }
      return true;
    });
    defineRule("validaEmail", (value) => {
      let regexp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexp.test(value)) {
        return "Email inválido!";
      }
      return true;
    });
    defineRule("validaSenha", (value) => {
      if (value.length < 8) {
        return "Senha inválida";
      }
      return true;
    });
    const schema = {
                email: "required|validaEmail",
                senha: "required|validaSenha"
            }
    return {
        schema,
        login: {},
    };
  },
  methods: {
    autenticar() {
        this.$store.commit('autenticacaoModule/autenticar', this.login)
            if(this.$store.state.autenticacaoModule.autenticado){
                this.$router.push('/template'); // se for autentificado vai para 
            }
    },
    google(){
        alert("Função em construção!")
    },
    cadastroLogin(){
        this.$router.push('/login/cadastro')
    }
  },
}

</script>

<style scoped>
h1{
    text-align: center;

}

label{
    font-size: 130%;
    margin-top: 5%;
}

img { 
    margin-right: 10%; 
    width: 100%;
    left: 100%;
}

button {
    margin-top: 5%;
    padding: 5px;
    font-size: 1.3em;
    border-radius: 10%;
}

</style>