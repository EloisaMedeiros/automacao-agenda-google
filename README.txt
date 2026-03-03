# Automação: Agenda Google para Planilhas
Este projeto consiste em um script (Google Apps Script) que conecta uma agenda específica do Google a uma planilha. Ele extrai automaticamente os eventos de um período (4 dias atrás até 7 dias no futuro) e organiza a lista de participantes e seus status de confirmação.

## Objetivos e Funcionalidades
Sincronização Automática: Busca eventos diretamente do Google Calendar via ID.

Gestão de Presença: Separa cada participante em uma linha individual.

Tradução de Status: Converte os status do Google (YES, NO, INVITED) para português (Confirmado, Recusou, Pendente).

Limpeza Inteligente: Sempre que o script roda, ele limpa a aba e atualiza com os dados mais recentes para evitar duplicatas.

## Estrutura da Planilha
O script organiza os dados nas seguintes colunas:

Evento: Nome da reunião ou compromisso.

Data: Horário de início do evento.

E-mail do Participante: O endereço de e-mail de quem foi convidado.

Status de Presença: Se a pessoa confirmou, recusou ou ainda não respondeu.

## Como Instalar e Usar
Abra a sua Google Planilha.

Vá no menu superior em Extensões > Apps Script.

Apague qualquer código existente e cole o código do arquivo Codigo.gs 

Importante: Substitua o ID da agenda no script pelo ID da sua agenda (encontrado nas configurações da sua agenda no Google).

No menu suspenso do editor, selecione a função atualizarPlanilhaSemanal.

Clique em Executar e conceda as permissões necessárias na sua conta Google.

## Ferramentas Utilizadas
Google Apps Script: Linguagem baseada em JavaScript para automação de ferramentas Google.

Google Calendar API: Para ler os dados dos eventos.

Google Sheets API: Para escrever e organizar os dados na planilha.

## Autor
Desenvolvido por EloisaMedeiros como parte de um projeto de aprendizado em automação e gestão de dados para Liga Academica WIEE