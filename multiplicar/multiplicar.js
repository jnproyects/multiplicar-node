// requires
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) =>{

    console.log("================".green);
    console.log(`  Tabla del ${ base }  `.red);
    console.log("================".green);

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${base*i} \n`;        
    }

    return data;

}

let crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject)=> {

        if ( !Number(base) ) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            
           data += `${ base } * ${ i } = ${base*i} \n`;
            
        }
        
        const datos = new Uint8Array(Buffer.from(data));
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, datos, (err) => {
        
          if (err) 
            reject(err);
          else
            resolve(`tabla-${ base }.txt`);        
        });


    });

};

module.exports = {
    crearArchivo,
    listarTabla
};


