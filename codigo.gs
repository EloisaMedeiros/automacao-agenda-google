function atualizarPlanilha(pagina, inicio, fim) {
  var agenda = CalendarApp.getCalendarById('ID_SUA_AGENDA@group.calendar.google.com');

  pagina.getRange('A1:F1').setValues([['ID Evento', 'Título', 'Descrição', 'Data Inicio', 'Data Fim', 'Participantes']]);


  var eventos = agenda.getEvents(inicio, fim);

  for (var i = 0; i < eventos.length; i++){
    var evento = eventos[i];

    // lista de e-mails separada por vírgula
    var convidados = evento.getGuestList();
    var listaParticipantes = convidados.map(function(convidado) {
      return convidado.getEmail();
    }).join(", ");

    var idEvento = evento.getId();
    var titulo = evento.getTitle();
    var descricao = evento.getDescription();
    var dataInicio = evento.getStartTime();
    var dataFim = evento.getEndTime();
    listaParticipantes

    Logger.log(idEvento + '|' + titulo + '|' + descricao + '|' + dataInicio + '|' + dataFim + '|' + listaParticipantes);

    pagina.appendRow([idEvento, titulo, descricao, dataInicio, dataFim, listaParticipantes]);
  }
}

function atualizarPlanilhaSemanal(){
  var fim = new Date();
  var inicio = new Date();
  fim.setDate(fim.getDate() + 7); // Busca até 7 dias para frente
  inicio.setHours(0, 0, 0); // atualizar toda segunda as meia noite - zero horas, zero minutos e zero segundos


  var inicioFormatar =  inicio.toLocaleDateString('pt-Br', {day: '2-digit', month: '2-digit'});
  var fimFormatar =  fim.toLocaleDateString('pt-Br', {day: '2-digit', month: '2-digit'});
  var novaAba = inicioFormatar + " até " + fimFormatar

  // criar pagina na planilha
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var pagina = planilha.getSheetByName(novaAba) || planilha.insertSheet(novaAba);
  pagina.clear();

  atualizarPlanilha(pagina, inicio, fim);

}
