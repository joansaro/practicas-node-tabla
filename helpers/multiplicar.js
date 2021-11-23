
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{
    try {
        let salida='';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${colors.red(base)} ${'x'.brightMagenta} ${i} = ${colors.green(base * i)}\n`;
            consola += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('================='.rainbow);
            console.log('   Tabla del ', base);
            console.log('================='.rainbow);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

        return`tabla-${base}.txt`.blue;
    } catch (err){
        return err
    }
}


module.exports = {
    crearArchivo
}