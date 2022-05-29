import { createStore } from 'vuex';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const autenticacaoModule = {
    namespaced: true,
    state(){
        return{
            autenticado: false,
            usuarios: []
        }
    },
    mutations: {
        autenticar(state, login){
            const listaUsuariosJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                this.usuarios = []; //esvazio a lista
                this.usuarios =  JSON.parse(listaUsuariosJSON); // faço receber os itens da lista
            }
            usuarios.forEach(user => {
                if(login.email === user.email && login.senha === user.senha){
                    localStorage.setItem('autenticado', true);
                    state.autenticado = true;
                }
            });
            
        },
        logout(state){
            localStorage.removeItem('autenticado')
            state.autenticado = false
          }
    }
}

const userModule = {
    namespaced: true,
    state(){
        return{
            users: []
        }
    },
    mutations:{
        save(state, user){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            const listaUserJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                this.users = []; //esvazio a lista
                this.users =  JSON.parse(listaUserJSON); // faço receber os itens da lista
            }
            state.users.push(user); // depois adiciono o item na lista
            localStorage.removeItem('listaUsers'); // removo a lista do local storage 
            listaUserJSON = JSON.stringify(this.users); // Transformar em JSON/String
            localStorage.setItem('listaUsers',listaUserJSON); // salvar no localStorage a lista toda novamente
            console.log(listaUserJSON)
        }
    }

=======
=======
>>>>>>> Stashed changes
const userModule = {
    namespaced: true,
    state(){
        return{
            users: [],
            autenticado: false,
            emailGravatar: null,
            nomeusuario: null,
        }
    },
    mutations:{
        // Salvar novo usuário
        save(state, user){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            let listaUserJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                state.users = []; //esvazio a lista
                state.users =  JSON.parse(listaUserJSON); // faço receber os itens da lista
            }
            state.users.push(user); // depois adiciono o item na lista
            listaUserJSON = JSON.stringify(state.users); // Transformar em JSON/String
            localStorage.setItem('listaUsers',listaUserJSON); // salvar no localStorage a lista toda novamente
        },
        // deslogar
        logout(state){
            localStorage.removeItem('autenticado')
            state.autenticado = false
          },
        
          // Autentificar usuário
          autenticar(state, login){
            // add email na imagem gravatar
            state.emailGravatar = login.email;
            let listaUserJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                state.users = []; //esvazio a lista
                state.users =  JSON.parse(listaUserJSON); // faço receber os itens da lista
            }
            state.users.forEach(element => {
                if(login.email === element.email && login.senha === element.senha){
                    state.nomeusuario = element.nome;
                    localStorage.setItem('autenticado', true);
                    state.autenticado = true;
                }
                let nomeJSON = JSON.stringify(state.nomeusuario); // Transformar em JSON/String
                localStorage.setItem('nomeusuario',nomeJSON); // salvar no localStorage a lista toda novamente
<<<<<<< Updated upstream
                
                
            });
        },
        nomeUsuario(){
            let nomeJSON = localStorage.getItem('nomeusuario')
                state.nomeusuario = null;
                state.nomeusuario =nomeJSON;
            

        }     
    }
>>>>>>> Stashed changes
=======
            });
        },
        nomeUsuario(state){
            let nomeJSON = localStorage.getItem('nomeusuario')
            state.nomeusuario = "";
            state.nomeusuario =JSON.parse(nomeJSON)
        }     
    }
>>>>>>> Stashed changes
}

const cadColaboradorModule = {
    namespaced: true,
    state(){
        return{
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            cadastroColabs: []
=======
            cadastroColabs: [],
            quantidade: null,
            colabPesquisado: [],
>>>>>>> Stashed changes
=======
            cadastroColabs: [],
            quantidade: null,
            colabPesquisado: [],
>>>>>>> Stashed changes
        }
    },
    mutations:{
        salvar(state, cadastroColab){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            // const listaColabJSON = localStorage.getItem('cadastroColabs') // recupera o localStorage
            // if(listaColabJSON){ // se tiver algo na lista
            //     this.cadastroColabs = []; //esvazio a lista
            //     this.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            // }
            state.cadastroColabs.push(cadastroColab); // depois adiciono o item na lista
            console.log(cadastroColab)
            // localStorage.removeItem('cadastroColabs'); // removo a lista do local storage 
            // listaColabJSON = JSON.stringify(this.cadastroColabs); // Transformar em JSON/String
            // localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamente
        },
=======
=======
>>>>>>> Stashed changes
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recupera o localStorage
            if(listaColabJSON){ // se tiver algo na lista
                state.cadastroColabs = []; //esvazio a lista
                state.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            }
            state.cadastroColabs.push(cadastroColab); // depois adiciono o item na lista
            listaColabJSON = JSON.stringify(state.cadastroColabs); // Transformar em JSON/String
            localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamente
        },
        excluir(state,id){
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recuperar o localStorage
            state.cadastroColabs = []; //esvazio a lista
            state.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            let index = state.cadastroColabs.filter(function (element) { // filtro todos menos aquele produto
                return element.id !== id;
            })
            state.cadastroColabs = index;
            listaColabJSON = JSON.stringify(state.cadastroColabs); // Transformar em JSON/String
            localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamente
        },
        editar(state,novo){
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recuperar o localStorage
            state.cadastroColabs = []; //esvazio a lista
            state.cadastroColabs =  JSON.parse(listaColabJSON);
            // encontrar e substituir 
            state.cadastroColabs.forEach((element, index) => {
                if(element.id === novo.id)
                    state.cadastroColabs[index] = novo
                })
            listaColabJSON = JSON.stringify(state.cadastroColabs); // Transformar em JSON/String
            localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamen

        },
        quantidadeColab(state){
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recuperar o localStorage
            state.cadastroColabs = []; //esvazio a lista
            state.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            state.quantidade = state.cadastroColabs.length
        },
        pesquisa(state, colab){
            let index = state.cadastroColabs.filter(function (element) { // filtro todos menos aquele produto
                return String(element.nome).toLowerCase().includes(String(colab).toLowerCase())  
            })
            state.colabPesquisado = index;
        }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

    }
}


const cadProdutoModule = {
    namespaced: true,
    state(){
        return{
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            cadastroProds: []
=======
=======
>>>>>>> Stashed changes
            cadastroProds: [],
            quantidade: null,
            quantidadeemp: null,
            valor: 0,
            itemPesquisado: [],
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        }
    },
    mutations:{
        salvar(state, cadastroProd){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            console.log(cadastroProd)
            // let listaProdJSON = localStorage.getItem('cadastroProds') // recupera o localStorage
            // if(listaProdJSON){ // se tiver algo na lista
            //     this.cadastroProds = []; //esvazio a lista
            //     this.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            // }
            state.cadastroProds.push(cadastroProd);
            // localStorage.removeItem('cadastroProds'); // limpar lista e add tudo novamente
            let listaProdJSON = JSON.stringify(this.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage
            console.log(listaProdJSON)
        },
}
}


=======
=======
>>>>>>> Stashed changes
            let listaProdJSON = localStorage.getItem('cadastroProds') // recupera o localStorage
            if(listaProdJSON){ // se tiver algo na lista
                state.cadastroProds = []; //esvazio a lista
                state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            }
            state.cadastroProds.push(cadastroProd);
            listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage
        },
        excluir(state,id){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            let index = state.cadastroProds.filter(function (element) { // filtro todos menos aquele produto
                return element.id !== id;
            })
            state.cadastroProds = index;
            listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage a lista toda novamente
        },
        editar(state,novo){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON);
            // encontrar e substituir 
            state.cadastroProds.forEach((element, index) => {
                if(element.id === novo.id)
                state.cadastroProds[index] = novo
                })
            listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage a lista toda novamente 
            
        },
        quantidadeItens(state){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            state.quantidade = state.cadastroProds.length
        },
        valorItens(state){
            state.valor = 0;
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            state.cadastroProds.forEach(element => {
            state.valor += Number(element.valor) 
            })
            
        },
        emprestimo(state, emprestimo){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recupera o localStorage
            if(listaProdJSON){ // se tiver algo na lista
                state.cadastroProds = []; //esvazio a lista
                state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            }
            state.cadastroProds.forEach(element => {
                if(element.id === emprestimo.idItem){
                element.status = !element.status
                element.idColab = emprestimo.idColab
                element.nomeColab = emprestimo.nomeColab 
                }   
                })
                listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
                localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage

        },
        quantidadeEmp(state){
            state.quantidadeemp=0;
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            state.cadastroProds.forEach(element => {
                if(element.status === true)
                state.quantidadeemp += 1; 
                })    
        },
        pesquisa(state, item){
            let index = state.cadastroProds.filter(function (element) { // filtro todos menos aquele produto
                return element.codigo == Number(item);
            })
            state.itemPesquisado = index;
        }
        
}
}

const tituloModule ={
    namespaced: true,
    state(){
        return{
            titulos: null
        }
    },
    mutations: {
        titulo(state, tituloPag){
            state.titulos = tituloPag;
        }
    }
}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const store = createStore({
    modules:{
        cadColaboradorModule,
        cadProdutoModule,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        autenticacaoModule,
        userModule
=======
        userModule,
        tituloModule
        
>>>>>>> Stashed changes
=======
        userModule,
        tituloModule
        
>>>>>>> Stashed changes
    }
});

export default store;