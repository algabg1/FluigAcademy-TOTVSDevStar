function externo(){
    var pessoa = {
        nome : "Wilson",
        sobrenome : "Bizon",
        departamento : "fluig"
    };

    document.getElementById("local2").innerHTML =
    pessoa.nome + " trabalha no " + pessoa.departamento +
    "<br />" + pessoa.nome + " " + pessoa.sobrenome;
}