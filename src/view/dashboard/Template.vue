<<<<<<< Updated upstream
<template>
<div class="template">
    <div style="position: relative" v-if="autenticado">
        <Navbar/>
        <Sidebar/>
        <router-view style="position: relative; left: 10%"></router-view>
=======
<template class="template">
<div>
    <div v-if="autenticado">
        <Navbar class="nav" />
        <Sidebar class="side"/>
        <div class="tela">
        <router-view></router-view>
        </div>
>>>>>>> Stashed changes
    </div>

    <div class="login-template" v-else>
        <label> Ações de login são necessárias -</label>
<<<<<<< Updated upstream
         <router-link to="/login"> Login</router-link>
    </div>
 
    

</div>

  
=======
         <router-link to="/"> Login</router-link>
    </div>

</div>
>>>>>>> Stashed changes
</template>

<script>
import Navbar from './../dashboard/navbar/Navbar.vue'
import Sidebar from './../dashboard/sidebar/Sidebar.vue'
export default {
    components:{
        Navbar,
        Sidebar
    },
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{
        autenticado(){
<<<<<<< Updated upstream
            // return this.$store.state.autenticacaoModule.autenticado;
            return true
        }
    },
    monted(){
        this.$store.satte.autenticacaoModule.autenticado = localStorage.getItem('autenticado') ? true : false
=======
            return this.$store.state.userModule.autenticado;
        },
        
    },
<<<<<<< Updated upstream
    monted(){
        this.$store.state.autenticacaoModule.autenticado = localStorage.getItem('autenticado') ? true : false
>>>>>>> Stashed changes
    }
=======
    beforeMount(){
        this.$store.state.userModule.autenticado = localStorage.getItem('autenticado') ? true : false
        this.$store.commit("userModule/nomeUsuario");
    },
>>>>>>> Stashed changes

}
</script>

<style scoped>

.login-template{
    text-align: center;
    font-size: 100%;
}

<<<<<<< Updated upstream
.template{

}

=======
template{
    display: grid;
    grid-template-columns: 1fr 3fr ;
    grid-template-rows: 20vh 80vh;
    grid-template-areas: "menuu nav"
                        "menuu tela";
}

.nav{
    grid-area: nav;

}

.side{
    grid-area: menuu;

}

.tela{
    grid-area: tela;
    margin-left: 12%;
    margin-top: 1%;
}
>>>>>>> Stashed changes


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
</style>