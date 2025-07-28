# Fluxograma Científico Dinâmico

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Site-brightgreen)](https://clepsydraisa.github.io/artigo/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Language](https://img.shields.io/badge/Language-Portuguese-red.svg)](README.md)

Um fluxograma interativo e dinâmico para visualizar etapas de processos científicos, desenvolvido em HTML, CSS e JavaScript.

🌐 **Acesse o site**: https://clepsydraisa.github.io/artigo/

## Características

- **Balões Hierarquizados**: Diferentes níveis visuais com cores distintas
- **Conexões Dinâmicas**: Linhas e setas que conectam as etapas
- **Interatividade**: Clique nos balões para ver detalhes
- **Responsivo**: Funciona em dispositivos móveis e desktop
- **Exportação**: Possibilidade de exportar o fluxograma em JSON

## Como Usar

### Visualização
1. Abra `index.html` no seu navegador
2. Clique nos balões para ver informações detalhadas
3. Use os botões de controlo para adicionar etapas ou resetar

### Personalização dos Dados

Para adicionar as suas próprias etapas, pode:

#### Opção 1: Editar diretamente no JavaScript
Modifique a função `loadSampleData()` no arquivo `script.js`:

```javascript
loadSampleData() {
    this.steps = [
        {
            id: 1,
            title: "Sua Etapa",
            description: "Descrição da etapa",
            details: "Detalhes completos sobre esta etapa",
            level: 1, // 1-5 (hierarquia visual)
            x: 100, // posição X
            y: 100, // posição Y
            connections: [2] // IDs das etapas conectadas
        },
        // ... mais etapas
    ];
}
```

#### Opção 2: Usar as funções globais
```javascript
// Adicionar nova etapa
addFlowchartStep("Título", "Descrição", "Detalhes", 1, 200, 150, [2, 3]);

// Atualizar etapa existente
updateFlowchartStep(1, { title: "Novo Título", level: 2 });

// Remover etapa
removeFlowchartStep(1);
```

### Estrutura dos Dados

Cada etapa tem a seguinte estrutura:
- `id`: Identificador único
- `title`: Título da etapa
- `description`: Descrição curta
- `details`: Informações detalhadas
- `level`: Nível hierárquico (1-5, afeta cor e tamanho)
- `x`, `y`: Posição no fluxograma
- `connections`: Array com IDs das etapas conectadas

## Níveis Hierárquicos

- **Nível 1**: Azul escuro - Etapas principais
- **Nível 2**: Rosa - Sub-etapas importantes
- **Nível 3**: Azul claro - Etapas secundárias
- **Nível 4**: Verde - Etapas de suporte
- **Nível 5**: Amarelo - Etapas menores

## Funcionalidades

### Botões de Controlo
- **Adicionar Etapa**: Cria uma nova etapa aleatória
- **Resetar Fluxo**: Volta aos dados de exemplo
- **Exportar**: Baixa o fluxograma em formato JSON

### Interatividade
- Clique nos balões para ver detalhes
- Informações aparecem no painel inferior
- Animações suaves nas transições

## 🚀 Hospedagem no GitHub Pages

O projeto está configurado para ser automaticamente publicado no GitHub Pages!

### Acesso ao Site
- **URL do Site**: https://clepsydraisa.github.io/artigo/
- **Repositório**: https://github.com/clepsydraisa/artigo

### Configuração Automática
O projeto já está configurado com:
- ✅ Workflow de deploy automático
- ✅ Branch `main` como fonte
- ✅ Deploy automático a cada push

### Como Funciona
1. Qualquer push para a branch `main` ativa o deploy automático
2. O site é atualizado em poucos minutos
3. Disponível publicamente para qualquer pessoa

### Configuração Manual (se necessário)
Se precisar configurar manualmente:
1. Vá para **Settings** > **Pages** no repositório
2. Selecione **Deploy from a branch**
3. Escolha a branch **main**
4. Clique **Save**

### Personalização do Domínio
Para usar um domínio personalizado:
1. Vá para **Settings** > **Pages**
2. Adicione o domínio em **Custom domain**
3. Configure o DNS conforme instruções do GitHub

## Personalização Avançada

### Cores
Edite as variáveis CSS no arquivo `styles.css`:
```css
.step-bubble.level-1 {
    background: linear-gradient(135deg, #sua-cor1, #sua-cor2);
}
```

### Layout
Ajuste o tamanho do container em `styles.css`:
```css
.flowchart-container {
    min-height: 600px; /* Aumentar altura */
}
```

## Compatibilidade

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Licença

Este projeto está disponível para uso livre em projetos científicos e educacionais. 