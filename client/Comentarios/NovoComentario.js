Template.NovoComentario.events({
    "submit form": function(evento,template){
        evento.preventDefault();
        var texto = evento.target.texto.value;
        var idDoPost = template.data._id;
        //chama o método inserirComentario
        Meteor.call("inserirComentario",texto,idDoPost);
        //Limpa a caixa de comentários depois de inseri-lo no banco de dados
        evento.target.texto.value = "";
    }
});