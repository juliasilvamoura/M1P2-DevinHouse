import {createRouter, createWebHashHistory} from 'vue-router';

// Importar as telas
import Template from './../view/dashboard/Template.vue';
import CadastroProdutos from './../view/produtos/CadastroProdutos.vue'
import EmprestimoProdutos from './../view/produtos/EmprestimoProdutos.vue'
import Login from './../view/viewLogin/login/Login.vue'
import CadastroLogin from './../view/viewLogin/cadastro/CadastroLogin.vue'
import CadastroColaboradores from './../view/colaboradores/CadastroColaboradores.vue'
import ListagemColaboradores from './../view/colaboradores/ListagemColaboradores.vue'
import Inventario from './../view/inventario/Inventario.vue'

// criar subrotas que serão filhas de template
const subrotas = [
    {path: 'produto/cadastro', component: CadastroProdutos},
    {path: 'emprestimo', component: EmprestimoProdutos},
    {path: 'colaborador/cadastro', component: CadastroColaboradores},
    {path: 'colaborador/listagem', component: ListagemColaboradores},
    {path: 'inventario', component: Inventario}
]

const routes = [
    {path: '/', redirect: "/login"},
    {path: '/template', component: Template, children: subrotas,redirect: '/template/inventario'},
    // {path: '/template', component: Template},
    {path: '/login', component: Login},
    {path: '/login/cadastro', component: CadastroLogin},

    // {path: '/produto/cadastro', component: CadastroProdutos},
    // {path: '/emprestimo', component: EmprestimoProdutos},
    // {path: '/colaborador/cadastro', component: CadastroColaboradores},
    // {path: '/colaborador/listagem', component: ListagemColaboradores},
    // {path: '/inventario', component: Inventario}
    
]

const router = createRouter ({
    routes,
    history: createWebHashHistory()
});

export default router;