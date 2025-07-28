class ArticleDataLoader {
    constructor() {
        this.articleData = null;
    }

    // Carregar dados do arquivo JSON
    async loadFromJSON(filePath) {
        try {
            const response = await fetch(filePath);
            this.articleData = await response.json();
            return this.articleData;
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            return null;
        }
    }

    // Carregar dados diretamente do objeto
    loadFromObject(data) {
        this.articleData = data;
        return this.articleData;
    }

    // Obter etapas do fluxograma
    getFlowchartSteps() {
        if (!this.articleData || !this.articleData.flowchart) {
            return [];
        }
        return this.articleData.flowchart.steps;
    }

    // Obter informações do artigo
    getArticleInfo() {
        if (!this.articleData) {
            return {
                title: "Artigo Científico",
                author: "Autor",
                year: "2024"
            };
        }
        return {
            title: this.articleData.articleTitle || "Artigo Científico",
            author: this.articleData.author || "Autor",
            year: this.articleData.year || "2024"
        };
    }

    // Validar estrutura dos dados
    validateData() {
        if (!this.articleData || !this.articleData.flowchart || !this.articleData.flowchart.steps) {
            return {
                valid: false,
                error: "Estrutura de dados inválida"
            };
        }

        const steps = this.articleData.flowchart.steps;
        const errors = [];

        steps.forEach((step, index) => {
            if (!step.id) errors.push(`Etapa ${index + 1}: ID em falta`);
            if (!step.title) errors.push(`Etapa ${index + 1}: Título em falta`);
            if (!step.description) errors.push(`Etapa ${index + 1}: Descrição em falta`);
            if (!step.details) errors.push(`Etapa ${index + 1}: Detalhes em falta`);
            if (!step.level || step.level < 1 || step.level > 5) {
                errors.push(`Etapa ${index + 1}: Nível inválido (deve ser 1-5)`);
            }
            if (typeof step.x !== 'number' || typeof step.y !== 'number') {
                errors.push(`Etapa ${index + 1}: Posições X/Y inválidas`);
            }
            if (!Array.isArray(step.connections)) {
                errors.push(`Etapa ${index + 1}: Conexões devem ser um array`);
            }
        });

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    // Gerar posições automáticas para etapas
    generateAutoPositions() {
        if (!this.articleData || !this.articleData.flowchart) return;

        const steps = this.articleData.flowchart.steps;
        const spacing = 250; // Espaçamento entre etapas
        const rowHeight = 200; // Altura entre linhas

        steps.forEach((step, index) => {
            const row = Math.floor(index / 5); // 5 etapas por linha
            const col = index % 5;
            
            step.x = 50 + (col * spacing);
            step.y = 50 + (row * rowHeight);
        });
    }

    // Exportar dados para JSON
    exportToJSON() {
        if (!this.articleData) return null;
        return JSON.stringify(this.articleData, null, 2);
    }
}

// Funções globais para uso externo
window.ArticleDataLoader = ArticleDataLoader;

// Função para carregar dados do artigo
window.loadArticleData = async (filePath) => {
    const loader = new ArticleDataLoader();
    const data = await loader.loadFromJSON(filePath);
    if (data) {
        window.articleDataLoader = loader;
        return data;
    }
    return null;
};

// Função para aplicar dados ao fluxograma
window.applyArticleData = (data) => {
    if (window.flowchartManager && data && data.flowchart) {
        window.flowchartManager.updateFlowchartData(data.flowchart.steps);
        return true;
    }
    return false;
}; 