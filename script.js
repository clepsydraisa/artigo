class FlowchartManager {
    constructor() {
        this.steps = [];
        this.currentStep = null;
        this.zoom = 1;
        this.dataLoader = new ArticleDataLoader();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadSampleData();
        this.renderFlowchart();
    }

    setupEventListeners() {
        // Botões de controlo
        document.getElementById('addStep').addEventListener('click', () => this.addRandomStep());
        document.getElementById('resetFlow').addEventListener('click', () => this.resetFlow());
        document.getElementById('exportFlow').addEventListener('click', () => this.exportFlow());
        document.getElementById('loadData').addEventListener('click', () => this.showDataModal());
        document.getElementById('validateData').addEventListener('click', () => this.validateCurrentData());

        // Navegação
        document.getElementById('zoomIn').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoomOut').addEventListener('click', () => this.zoomOut());
        document.getElementById('goToStart').addEventListener('click', () => this.goToStep(0));
        document.getElementById('goToEnd').addEventListener('click', () => this.goToStep(this.steps.length - 1));

        // Controles de zoom flutuantes
        document.getElementById('zoomInFloat').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoomOutFloat').addEventListener('click', () => this.zoomOut());
        document.getElementById('resetZoom').addEventListener('click', () => this.resetZoom());

        // Modal
        const modal = document.getElementById('dataModal');
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => this.hideDataModal());
        window.addEventListener('click', (e) => {
            if (e.target === modal) this.hideDataModal();
        });

        // Carregamento de dados
        document.getElementById('loadJsonBtn').addEventListener('click', () => this.loadJsonFile());
        document.getElementById('loadManualBtn').addEventListener('click', () => this.loadManualData());
        document.getElementById('loadSampleBtn').addEventListener('click', () => this.loadSampleData());
    }

    loadSampleData() {
        this.steps = [
            {
                id: 1,
                title: "Revisão da Literatura",
                description: "Análise de trabalhos existentes",
                details: "Compreensão profunda do estado atual da investigação, identificação de lacunas e oportunidades de investigação.",
                level: 1,
                x: 100,
                y: 100,
                connections: [2]
            },
            {
                id: 2,
                title: "Formulação da Hipótese",
                description: "Desenvolvimento de hipóteses testáveis",
                details: "Criação de hipóteses específicas e mensuráveis baseadas na revisão da literatura.",
                level: 2,
                x: 350,
                y: 100,
                connections: [3, 4]
            },
            {
                id: 3,
                title: "Desenho Experimental",
                description: "Planeamento da metodologia",
                details: "Definição de variáveis, grupos de controlo e procedimentos experimentais.",
                level: 3,
                x: 600,
                y: 50,
                connections: [5]
            },
            {
                id: 4,
                title: "Análise Estatística",
                description: "Planeamento da análise de dados",
                details: "Seleção de testes estatísticos apropriados e definição de critérios de significância.",
                level: 3,
                x: 600,
                y: 150,
                connections: [5]
            },
            {
                id: 5,
                title: "Execução Experimental",
                description: "Realização dos experimentos",
                details: "Coleta de dados seguindo rigorosamente o protocolo experimental estabelecido.",
                level: 2,
                x: 850,
                y: 100,
                connections: [6]
            },
            {
                id: 6,
                title: "Análise de Dados",
                description: "Processamento e interpretação",
                details: "Aplicação de testes estatísticos e interpretação dos resultados obtidos.",
                level: 2,
                x: 1100,
                y: 100,
                connections: [7]
            },
            {
                id: 7,
                title: "Conclusões",
                description: "Síntese dos resultados",
                details: "Interpretação dos resultados no contexto da hipótese original e implicações para investigação futura.",
                level: 1,
                x: 1350,
                y: 100,
                connections: []
            }
        ];
        this.renderFlowchart();
        this.updateProgress();
    }

    renderFlowchart() {
        const flowchart = document.getElementById('flowchart');
        flowchart.innerHTML = '';

        // Renderizar balões
        this.steps.forEach(step => {
            const bubble = this.createStepBubble(step);
            flowchart.appendChild(bubble);
        });

        // Renderizar conexões
        this.renderConnections();
    }

    createStepBubble(step) {
        const bubble = document.createElement('div');
        bubble.className = `step-bubble level-${step.level}`;
        bubble.style.left = `${step.x}px`;
        bubble.style.top = `${step.y}px`;
        bubble.dataset.stepId = step.id;

        bubble.innerHTML = `
            <div class="step-title">${step.title}</div>
            <div class="step-description">${step.description}</div>
        `;

        bubble.addEventListener('click', () => this.showStepDetails(step));
        return bubble;
    }

    renderConnections() {
        const flowchart = document.getElementById('flowchart');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.pointerEvents = 'none';
        svg.style.zIndex = '1';

        this.steps.forEach(step => {
            step.connections.forEach(targetId => {
                const targetStep = this.steps.find(s => s.id === targetId);
                if (targetStep) {
                    const connection = this.createConnection(step, targetStep);
                    svg.appendChild(connection);
                }
            });
        });

        flowchart.appendChild(svg);
    }

    createConnection(fromStep, toStep) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const fromX = fromStep.x + 100;
        const fromY = fromStep.y + 50;
        const toX = toStep.x;
        const toY = toStep.y + 50;

        line.setAttribute('x1', fromX);
        line.setAttribute('y1', fromY);
        line.setAttribute('x2', toX);
        line.setAttribute('y2', toY);
        line.setAttribute('stroke', '#666');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('marker-end', 'url(#arrowhead)');

        return line;
    }

    showStepDetails(step) {
        this.currentStep = step;
        const stepInfo = document.getElementById('stepInfo');
        stepInfo.innerHTML = `
            <h4>${step.title}</h4>
            <p><strong>Descrição:</strong> ${step.description}</p>
            <p><strong>Detalhes:</strong> ${step.details}</p>
            <p><strong>Nível:</strong> ${step.level}</p>
            <p><strong>Posição:</strong> (${step.x}, ${step.y})</p>
            <p><strong>Conexões:</strong> ${step.connections.join(', ') || 'Nenhuma'}</p>
        `;
        this.updateProgress();
    }

    addRandomStep() {
        const newId = Math.max(...this.steps.map(s => s.id)) + 1;
        const levels = ['Pesquisa', 'Análise', 'Validação', 'Teste', 'Implementação'];
        const descriptions = ['Processo importante', 'Etapa crítica', 'Verificação necessária'];
        
        const newStep = {
            id: newId,
            title: `Etapa ${newId}`,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            details: 'Detalhes da nova etapa adicionada dinamicamente.',
            level: Math.floor(Math.random() * 5) + 1,
            x: Math.random() * 800 + 100,
            y: Math.random() * 400 + 50,
            connections: []
        };

        this.steps.push(newStep);
        this.renderFlowchart();
    }

    resetFlow() {
        this.loadSampleData();
    }

    exportFlow() {
        const data = {
            steps: this.steps,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'fluxograma-exportado.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    showDataModal() {
        document.getElementById('dataModal').style.display = 'block';
    }

    hideDataModal() {
        document.getElementById('dataModal').style.display = 'none';
    }

    loadJsonFile() {
        const fileInput = document.getElementById('jsonFile');
        const file = fileInput.files[0];
        
        if (!file) {
            alert('Por favor, selecione um arquivo JSON.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.loadDataFromObject(data);
            } catch (error) {
                alert('Erro ao carregar arquivo JSON: ' + error.message);
            }
        };
        reader.readAsText(file);
    }

    loadManualData() {
        const textarea = document.getElementById('manualData');
        const data = textarea.value.trim();
        
        if (!data) {
            alert('Por favor, insira dados JSON válidos.');
            return;
        }

        try {
            const parsedData = JSON.parse(data);
            this.loadDataFromObject(parsedData);
        } catch (error) {
            alert('Erro ao processar dados JSON: ' + error.message);
        }
    }

    loadDataFromObject(data) {
        if (data.flowchart && data.flowchart.steps) {
            this.steps = data.flowchart.steps;
            this.renderFlowchart();
            this.updateProgress();
            
            // Atualizar informações do artigo
            if (data.articleTitle) {
                document.getElementById('articleTitle').textContent = data.articleTitle;
            }
            if (data.author) {
                document.getElementById('articleAuthor').textContent = data.author;
            }
            
            this.hideDataModal();
            alert('Dados carregados com sucesso!');
        } else {
            alert('Estrutura de dados inválida. Esperado: { flowchart: { steps: [...] } }');
        }
    }

    validateCurrentData() {
        const validation = this.dataLoader.validateData();
        if (validation.valid) {
            alert('✅ Dados válidos!');
        } else {
            alert('❌ Dados inválidos:\n' + validation.errors.join('\n'));
        }
    }

    zoomIn() {
        this.zoom = Math.min(this.zoom * 1.2, 3);
        this.applyZoom();
    }

    zoomOut() {
        this.zoom = Math.max(this.zoom / 1.2, 0.3);
        this.applyZoom();
    }

    resetZoom() {
        this.zoom = 1;
        this.applyZoom();
    }

    applyZoom() {
        const flowchart = document.getElementById('flowchart');
        flowchart.style.transform = `scale(${this.zoom})`;
    }

    goToStep(stepIndex) {
        if (stepIndex >= 0 && stepIndex < this.steps.length) {
            this.showStepDetails(this.steps[stepIndex]);
        }
    }

    updateProgress() {
        const currentIndex = this.currentStep ? this.steps.findIndex(s => s.id === this.currentStep.id) + 1 : 0;
        const total = this.steps.length;
        document.getElementById('progressIndicator').textContent = `Etapa ${currentIndex} de ${total}`;
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new FlowchartManager();
});

// Funções globais para uso externo
window.addFlowchartStep = function(title, description, details, level, x, y, connections) {
    const flowchart = window.flowchartManager;
    if (flowchart) {
        const newId = Math.max(...flowchart.steps.map(s => s.id)) + 1;
        const newStep = { id: newId, title, description, details, level, x, y, connections: connections || [] };
        flowchart.steps.push(newStep);
        flowchart.renderFlowchart();
    }
};

window.updateFlowchartStep = function(id, updates) {
    const flowchart = window.flowchartManager;
    if (flowchart) {
        const step = flowchart.steps.find(s => s.id === id);
        if (step) {
            Object.assign(step, updates);
            flowchart.renderFlowchart();
        }
    }
};

window.removeFlowchartStep = function(id) {
    const flowchart = window.flowchartManager;
    if (flowchart) {
        flowchart.steps = flowchart.steps.filter(s => s.id !== id);
        flowchart.renderFlowchart();
    }
}; 