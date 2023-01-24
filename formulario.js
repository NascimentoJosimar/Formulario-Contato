$('#form-contato').submit(function(){
    var nome = $('#nome');
    var email = $('#email');
    var mensagem = $('#mensagem');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // Valida o campo nome
    if (nome.val() == '') {
        erro.removeClass('d-none');
        campo.html('nome'); //nome do campo não preenchido!
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    // Valida o campo email
    if (email.val() == '') {
        erro.removeClass('d-none');
        campo.html('email'); //nome do campo não preenchido!
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    // Valida o campo mensagem
    if (mensagem.val() == '') {
        erro.removeClass('d-none');
        campo.html('mensagem'); //nome do campo não preenchido!
        mensagem.focus();
        mensagem.addClass('is-invalid');
        return false;
    }
    
    // envio dos dados
    return true;
});