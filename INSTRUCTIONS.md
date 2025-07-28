# 📋 Guia de Instruções - Fluxograma Científico

## 🎯 Como Extrair Dados do Seu PDF

### Passo 1: Analisar o PDF
1. Abra o arquivo `fluxograma_Web.pdf`
2. Identifique todas as etapas do processo
3. Anote as conexões entre as etapas
4. Determine a hierarquia (níveis 1-5)

### Passo 2: Estruturar os Dados
Para cada etapa, você precisa de:
- **ID**: Número único (1, 2, 3...)
- **Título**: Nome da etapa
- **Descrição**: Resumo curto
- **Detalhes**: Informações completas
- **Nível**: 1-5 (hierarquia visual)
- **Conexões**: Array com IDs das etapas conectadas

### Passo 3: Criar o Arquivo JSON
Use o arquivo `article-data.json` como modelo:

```json
{
  "articleTitle": "Título do Seu Artigo",
  "author": "Seu Nome",
  "year": "2024",
  "flowchart": {
    "steps": [
      {
        "id": 1,
        "title": "Início",
        "description": "Ponto de partida",
        "details": "Descrição detalhada da etapa inicial",
        "level": 1,
        "x": 50,
        "y": 50,
        "connections": [2]
      },
      {
        "id": 2,
        "title": "Etapa 1",
        "description": "Primeira etapa do processo",
        "details": "Detalhes completos da primeira etapa",
        "level": 2,
        "x": 300,
        "y": 50,
        "connections": [3, 4]
      }
    ]
  }
}
```

## 🛠️ Como Usar o Sistema

### Opção 1: Carregar Arquivo JSON
1. Crie o arquivo JSON com os dados do seu artigo
2. Clique em "📁 Carregar Dados"
3. Selecione "1. Carregar arquivo JSON"
4. Escolha o seu arquivo JSON
5. Clique em "Carregar JSON"

### Opção 2: Inserir Dados Manualmente
1. Clique em "📁 Carregar Dados"
2. Selecione "2. Inserir dados manualmente"
3. Cole o JSON no campo de texto
4. Clique em "Carregar Dados"

### Opção 3: Usar Dados de Exemplo
1. Clique em "📁 Carregar Dados"
2. Selecione "3. Usar dados de exemplo"
3. Clique em "Carregar Exemplo"

## 📊 Níveis Hierárquicos

- **Nível 1**: Etapas principais (azul escuro)
- **Nível 2**: Sub-etapas importantes (rosa)
- **Nível 3**: Etapas secundárias (azul claro)
- **Nível 4**: Etapas de suporte (verde)
- **Nível 5**: Etapas menores (amarelo)

## 🔗 Estrutura de Conexões

### Conexão Simples (Sequencial)
```json
"connections": [2]
```

### Múltiplas Conexões (Ramificação)
```json
"connections": [2, 3, 4]
```

### Sem Conexões (Fim do Fluxo)
```json
"connections": []
```

## 📍 Posicionamento Automático

Se não especificar posições (x, y), o sistema pode gerar automaticamente:
- Etapas sequenciais em linha horizontal
- Ramificações em linhas paralelas
- Espaçamento adequado entre elementos

## ✅ Validação de Dados

Use o botão "✅ Validar" para verificar se:
- Todos os campos obrigatórios estão preenchidos
- As conexões são válidas
- A estrutura JSON está correta

## 🎨 Personalização

### Cores e Estilos
- Edite `styles.css` para alterar cores
- Modifique os gradientes nos níveis
- Ajuste tamanhos e espaçamentos

### Funcionalidades
- Adicione novos botões em `index.html`
- Implemente novas funções em `script.js`
- Crie validações personalizadas

## 🚀 Hospedagem no GitHub Pages

1. Faça push do código para um repositório GitHub
2. Vá para Settings > Pages
3. Selecione a branch main como fonte
4. O site estará disponível em `https://seu-usuario.github.io/seu-repositorio`

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile (responsivo)

## 🔧 Comandos Úteis no Console

```javascript
// Adicionar etapa
addFlowchartStep("Título", "Descrição", "Detalhes", 1, 200, 150, [2, 3]);

// Atualizar etapa
updateFlowchartStep(1, { title: "Novo Título", level: 2 });

// Remover etapa
removeFlowchartStep(1);

// Exportar dados
window.flowchartManager.exportFlow();
```

## 📞 Suporte

Se precisar de ajuda:
1. Verifique se o JSON está bem formatado
2. Use a validação integrada
3. Consulte os exemplos no código
4. Teste com dados de exemplo primeiro

---

**Dica**: Comece com poucas etapas para testar, depois adicione gradualmente todas as etapas do seu artigo! 