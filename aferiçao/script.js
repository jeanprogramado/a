function agendar() {
    const selectedDate = new Date(document.getElementById("date").value);
    const agendamentoDate = new Date(selectedDate);
    agendamentoDate.setDate(agendamentoDate.getDate() + 45);

    const agendamentoElement = document.getElementById("agendamento");
    agendamentoElement.innerHTML = `Data agendada para daqui a 45 dias: ${agendamentoDate.toLocaleDateString()}`;
}

window.onload = function() {
    // Aqui você pode adicionar qualquer código relacionado à inicialização da página.
    // Se você quiser implementar um calendário real ou um seletor de datas, faça isso aqui.
};
