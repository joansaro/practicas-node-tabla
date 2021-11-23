
const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla de multiplicar en consola'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es el numero hasta el cual multiplicara la tabla en consola'
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.b)){
                            throw 'La base debe se der un numero'
                        }
                        return true;
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.l)){
                            throw 'hasta debe se der un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;