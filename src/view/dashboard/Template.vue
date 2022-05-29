<template class="template">
<div>
    <div v-if="autenticado">
        <Navbar class="nav" />
        <Sidebar class="side"/>
        <div class="tela">
        <router-view></router-view>
        </div>
    </div>

    <div class="login-template" v-else>
        <label> Ações de login são necessárias -</label>
         <router-link to="/"> Login</router-link>
    </div>
</div>
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
            return this.$store.state.userModule.autenticado;
        },
        
    },
    monted(){
        this.$store.state.autenticacaoModule.autenticado = localStorage.getItem('autenticado') ? true : false
    }

}
</script>

<style scoped>

.login-template{
    text-align: center;
    font-size: 100%;
}

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

</style>
