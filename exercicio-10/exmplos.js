
const mostrar = function (value = `Informe um argumento`) {
    document.write(`<h3>${value}</h3>`)

}

let user = {
    nome: 'Fran',
    idade: 32,
    email: 'freitas@gmail.com',
    cidade: 'São Paulo',
    blog: [
        { title: 'Empadão de Frango', likes: 30 },
        { title: 'Pure de Batata', likes: 50 }
    ],
    login: function () {
        mostrar('Usuario Logado');
    },
    logout() {
        mostrar('Usuario Deslogado');
    },
    logBlogPosts() {
        console.log(`${this.nome} escreveu os seguintes post:`)
        this.blog.forEach(post => {
            console.log(post.title, post.likes)

        })
    }
}

user.logBlogPosts()
