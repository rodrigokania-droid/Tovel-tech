const fs = require('fs');
const path = require('path');

const srcDir = "C:\\Users\\rjkan\\.gemini\\antigravity-ide\\brain\\99a72a06-bf67-47fe-bfbb-37f73f4fee1a";
const destDir = "public\\portfolio";

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

const map = {
    'site_empresa_mockup': 'site_empresa.png',
    'pagina_venda_mockup': 'pagina_venda.png',
    'sistema_gestao_mockup': 'sistema_gestao.png',
    'app_equipe_mockup': 'app_equipe.png',
    'plataforma_membros_mockup': 'plataforma_membros.png',
    'id_visual_redes_mockup': 'id_visual_redes.png'
};

for (const file of files) {
    if (file.endsWith('.png')) {
        for (const [prefix, destName] of Object.entries(map)) {
            if (file.startsWith(prefix)) {
                fs.copyFileSync(path.join(srcDir, file), path.join(destDir, destName));
                console.log(`Copied ${file} to ${destName}`);
            }
        }
    }
}
