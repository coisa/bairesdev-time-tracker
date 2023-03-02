#!/usr/bin/env -S ${NVM_DIR}/versions/node/v17.9.1/bin/node

const { Command } = require('commander');

const holidayCommand = require('../src/console/command/holidays')
const registerCommand = require('../src/console/command/register')

const program = new Command();

program.showHelpAfterError('(add --help for additional information)')

program
    .name('bairesdev-timetracker')
    .description('CLI BairesDev TimeTracker')
    .version('0.1.0');

program.command('holidays')
    .description('Lista de feriados')
    .action(holidayCommand)

program.command('register')
    .description('Registra tarefas em um período informado')
    .option('-t, --token', 'Token de autenticação')
    .option('-s, --start', 'Data de início do período')
    .option('-e, --end', 'Data de fim do período')
    .option('-n, --no-interaction', 'Não deve fazer perguntas interativas')
    .action(registerCommand)

program.parse();
