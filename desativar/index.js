var fs = require('fs')

// Desativa a pagina de manutencao
fs.rename('index.html', 'manutencao.html', () => {
    
    // Volta a pagina index-bkp para o nome original
    fs.rename('index-bkp.html', 'index.html', () => {
        console.log('Done')
    })
})