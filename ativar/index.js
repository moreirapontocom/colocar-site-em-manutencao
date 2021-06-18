var fs = require('fs')

// Faz uma copia do index original
fs.rename('index.html', 'index-bkp.html', () => {
    
    // Ativa a pagina de manutencao
    fs.rename('manutencao.html', 'index.html', () => {
        console.log('Done')
    })

})