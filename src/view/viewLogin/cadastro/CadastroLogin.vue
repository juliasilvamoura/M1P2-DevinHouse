<template>
   <div style="margin: 2%">
        <h3 >Novo usuário</h3>
        <vee-form id="formUser" @submit="save" :validation-schema="schema" v-slot="{ errors }">
        <div class="row" style="margin-top: 2%">
            <div class="col-3">
                <label>Nome: </label>
                <vee-field name="nome" type="text" class="form-control" v-model="user.nome"/>
                <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span>
            </div>
            <div class="col-3">
                <label>E-mail: </label>
                 <vee-field name="email" type="email" class="form-control" v-model="user.email"/>
                <span class="text-danger" v-show="errors.email">{{ errors.email }}</span>
            </div>
        </div>
        <div class="row" style="margin-top: 2%">
            <div class="col-3">
                <label for="">Senha</label>
                <vee-field name="senha" type="password" class="form-control" v-model="user.senha"/>
                <span class="text-danger" v-show="errors.senha">{{ errors.senha }}</span>
            </div>
            <div class="col-3">
                <label for="">Senha</label>
                <vee-field name="senha2" type="password" class="form-control" v-model="user.senha2"/>
                <span class="text-danger" v-show="errors.senha2">{{ errors.senha2 }}</span>
            </div>
            </div>

            <div class="col-12" style="margin: 2% 0">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
                <button type="buton" class="btn btn-light" style="margin-left: 5%" @click="logar">Login</button>
            </div>
        
        </vee-form>
    </div>
</template>

<script>
import { Form, Field, defineRule } from 'vee-validate';
export default {
    components: {
            'vee-form': Form,
            'vee-field': Field
        },
        data(){
            defineRule("required", value => {
                if (!value || value.length === 0) {
                    return "Campo obrigatório"
                }
                return true;
            });
            defineRule("validaEmail", value => {
                 let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regexp.test(value)) {
                    return "Email inválido!"
                }
                return true;
                
            });
            defineRule("validaSenha", value => {
                if (value.length < 8) {
                    return "Senha inválida"
                }
                return true;
            });
            defineRule("validaSenha2", value => {
                if (value != this.user.senha) {
                    return "As senhas devem ser iguais"
                }
                return true;
            });
            const schema = {
                nome: "required",
                email: "required|validaEmail",
                senha: "required|validaSenha",
                senha2: "required|validaSenha2",
            }
            return{
                schema,
                user: {}

            }
        },
        methods:{
            save(){
                this.user.id = Date.now();
                this.$store.commit('userModule/save', this.user) // passando o cadastro para ser salvo
                this.user = {}; // limpando os dados na tela
                document.getElementById('formUser').reset(); // retorna os valores originais
                alert("Usuário salvo com sucesso!");

            },
            logar(){
                this.$router.push('/login')
            }
        }

}
</script>

<style>

</style>