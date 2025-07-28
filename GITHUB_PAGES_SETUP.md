# 🚀 Guia de Configuração do GitHub Pages

## Status Atual
✅ **Repositório**: https://github.com/clepsydraisa/artigo  
✅ **Código**: Pronto para deploy  
✅ **Workflow**: Configurado automaticamente  

## Passos para Ativar o GitHub Pages

### 1. Aceder às Configurações
1. Vai para https://github.com/clepsydraisa/artigo
2. Clica em **Settings** (aba lateral)
3. Desce até à secção **Pages** (menu lateral esquerdo)

### 2. Configurar a Fonte
1. Em **Source**, seleciona **Deploy from a branch**
2. Em **Branch**, escolhe **main**
3. Em **Folder**, deixa **/ (root)**
4. Clica **Save**

### 3. Verificar o Deploy
1. Aguarda 2-5 minutos para o primeiro deploy
2. Vai para a aba **Actions** para ver o progresso
3. O site estará disponível em: https://clepsydraisa.github.io/artigo/

## Estrutura do Projeto
```
artigo/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── data-loader.js      # Carregamento de dados
├── article-data.json   # Dados de exemplo
├── demo.html           # Página de demonstração
└── README.md           # Documentação
```

## Funcionalidades Disponíveis
- ✅ Fluxograma interativo
- ✅ Carregamento de dados JSON
- ✅ Exportação de dados
- ✅ Zoom e navegação
- ✅ Responsivo para mobile
- ✅ Validação de dados

## URLs Importantes
- **Site**: https://clepsydraisa.github.io/artigo/
- **Repositório**: https://github.com/clepsydraisa/artigo
- **Issues**: https://github.com/clepsydraisa/artigo/issues

## Troubleshooting

### Se o site não aparecer:
1. Verifica se o GitHub Pages está ativo em Settings > Pages
2. Aguarda mais alguns minutos para o deploy
3. Verifica a aba Actions para erros

### Se houver erros no deploy:
1. Verifica se todos os arquivos estão no repositório
2. Confirma que o `index.html` está na raiz
3. Verifica se não há erros de JavaScript no console

## Próximos Passos
1. Testa o site em diferentes dispositivos
2. Partilha o link com colegas
3. Considera adicionar um domínio personalizado
4. Monitoriza o uso através das GitHub Insights

## Suporte
Se precisares de ajuda:
- Abre uma **Issue** no repositório
- Contacta através do GitHub
- Consulta a documentação no README.md 