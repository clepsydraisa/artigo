# Fluxograma Científico Dinâmico

Um fluxograma interativo e dinâmico para visualizar etapas de processos científicos, desenvolvido em HTML, CSS e JavaScript.

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

## Hospedagem no GitHub Pages

1. Faça push do código para um repositório GitHub
2. Vá para Settings > Pages
3. Selecione a branch main como fonte
4. O site estará disponível em `https://seu-usuario.github.io/seu-repositorio`

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