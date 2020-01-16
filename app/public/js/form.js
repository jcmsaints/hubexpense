$("form#formulario-inscricao-vtv").submit(function(e) {
  e.preventDefault();
  //Posso fazer aqui o upload da imagem
  isValid = handleMultimedia("form#formulario-inscricao-vtv", isValid);

  $(".btenviar")
    .attr("value", "A Enviar...")
    .prop("disabled", true);

  //if (now < end_date && now > start_date) {
  var form = $("#formulario-inscricao-vtv");

  $(".form-msg-error").text("");
  $("#sbmt-insc-form").prop("disabled", true);

  form.validate();

  var formData = {
    description: $("#description").val(),
    categoryName: $("#expenseCategory").val(),
    date: $("#datepicker").val(),
    value: $("#expense").val()
  };

  if (form.valid() && $("#form-dn").val() && isValid) {
    submitForm(
      formData,
      "#formulario-inscricao-vtv",
      "#form-passatempo",
      ".form-msg-error"
    );
  } else {
    $("#sbmt-insc-form").prop("disabled", false);
    $(".form-msg-error").text("Por favor preencha os campos em falta");
  }
});
