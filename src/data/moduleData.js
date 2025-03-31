const moduleData = {
    1: {
        name: "API",
        videos: [
            {
                id: "x_H2GgqjCZI",
                title: "Como consumir API em Python - Curso de API com Python #01",
                description: "Aprenda os fundamentos sobre APIs e como consumi-las usando Python."
            },
            {
                id: "IdviYZIQLlA",
                title: "Consumindo API com Python - Obtendo dados de uma API - Curso de API com Python #02",
                description: "Aprenda como obter dados de uma API usando Python."
            }
        ],
        quizzes: [
            // Primeira variação do quiz para Módulo 1 (API)
            [
                {
                    question: "O que significa a sigla API?",
                    options: [
                        "Application Programming Interface",
                        "Advanced Programming Interface",
                        "Application Program Integration",
                        "Automatic Protocol Interface"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Qual biblioteca Python é comumente usada para fazer requisições HTTP a APIs?",
                    options: [
                        "http",
                        "requests",
                        "urllib",
                        "apilib"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual é o formato de dados mais comum retornado por APIs modernas?",
                    options: [
                        "XML",
                        "CSV",
                        "JSON",
                        "YAML"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual método HTTP é geralmente usado para obter dados de uma API?",
                    options: [
                        "POST",
                        "PUT",
                        "DELETE",
                        "GET"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "De acordo com o vídeo, qual método HTTP é usado para atualizar dados existentes?",
                    options: [
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Para converter uma resposta JSON para um dicionário Python, qual método você usaria?",
                    options: [
                        "response.text()",
                        "response.json()",
                        "response.dict()",
                        "response.parse()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que é um status code 200 em uma resposta HTTP?",
                    options: [
                        "Erro no servidor",
                        "Redirecionamento",
                        "Requisição bem-sucedida",
                        "Recurso não encontrado"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "No exemplo do vídeo sobre API do Rick and Morty, qual método foi usado para obter dados dos personagens?",
                    options: [
                        "POST",
                        "GET",
                        "PUT",
                        "DELETE"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "De acordo com os vídeos, qual é a função da biblioteca 'requests' em Python?",
                    options: [
                        "Criar interfaces gráficas",
                        "Fazer requisições para APIs e sites",
                        "Manipular arquivos locais",
                        "Processar imagens"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Como você pode verificar se uma requisição para uma API foi bem-sucedida?",
                    options: [
                        "Verificando se o código de status é 200",
                        "Olhando a documentação da API",
                        "Verificando a velocidade da resposta",
                        "Contando o número de caracteres retornados"
                    ],
                    correctAnswer: 0
                }
            ],
            // Segunda variação do quiz para Módulo 1 (API)
            [
                {
                    question: "Na analogia do garçom apresentada no vídeo, o que representaria a API?",
                    options: [
                        "O cliente sentado na mesa",
                        "O garçom",
                        "A comida servida",
                        "A cozinha"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método HTTP seria adequado para criar um novo recurso em uma API?",
                    options: [
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Em Python, como você adiciona parâmetros a uma requisição GET?",
                    options: [
                        "requests.get(url, params={'key': 'value'})",
                        "requests.get(url, header='key:value')",
                        "requests.get(url, data={'key': 'value'})",
                        "requests.get(url).params('key', 'value')"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "O que significa o código de status HTTP 404?",
                    options: [
                        "Requisição bem-sucedida",
                        "Erro no servidor",
                        "Redirecionamento permanente",
                        "Recurso não encontrado"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "De acordo com o segundo vídeo, o que acontece quando você tenta acessar uma API com credenciais inválidas?",
                    options: [
                        "A API responde com dados aleatórios",
                        "A API ignora a requisição",
                        "A API responde com um erro (geralmente 401 ou 403)",
                        "A API corrige automaticamente suas credenciais"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Como você lida com erros ao fazer requisições API em Python?",
                    options: [
                        "Ignorando todos os erros",
                        "Usando blocos try/except",
                        "Usando o método .errors()",
                        "Apenas imprimindo mensagens de erro"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No exemplo do Firebase mostrado no vídeo, qual método é usado para criar uma nova entrada no banco de dados?",
                    options: [
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual o benefício de usar a biblioteca 'requests' em vez do módulo 'urllib' nativo do Python?",
                    options: [
                        "É mais rápida",
                        "É mais segura",
                        "Possui uma interface mais simples e intuitiva",
                        "É a única que funciona com APIs modernas"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "De acordo com o vídeo, qual método HTTP é usado para deletar dados?",
                    options: [
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "Qual método do Firebase mostrado no vídeo permite atualizar dados existentes?",
                    options: [
                        "GET",
                        "POST",
                        "PATCH",
                        "DELETE"
                    ],
                    correctAnswer: 2
                }
            ],
            // Terceira variação do quiz para Módulo 1 (API)
            [
                {
                    question: "O que é um payload em uma requisição API?",
                    options: [
                        "O tempo de resposta da API",
                        "Os dados enviados no corpo da requisição",
                        "O endereço do servidor API",
                        "O tipo de autenticação usado"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "De acordo com o vídeo, qual é a função do método PATCH em uma API?",
                    options: [
                        "Obter dados",
                        "Criar novos dados",
                        "Atualizar dados parcialmente",
                        "Deletar dados"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Na biblioteca requests, como você converte a resposta da API em um formato utilizável em Python?",
                    options: [
                        "response.parse()",
                        "response.json()",
                        "response.convert()",
                        "response.python()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que significa o código de status HTTP 500?",
                    options: [
                        "Requisição mal formada",
                        "Recurso não encontrado",
                        "Erro no servidor",
                        "Requisição bem-sucedida"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "De acordo com o vídeo do Firebase, ao fazer uma requisição POST, o que acontece se você não passar nenhuma informação?",
                    options: [
                        "A requisição é bem-sucedida, mas nada é criado",
                        "Um erro 400 é retornado",
                        "A API cria um recurso vazio",
                        "A API usa valores padrão"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Quais são os quatro tipos principais de requisições mostrados no segundo vídeo?",
                    options: [
                        "READ, WRITE, UPDATE, REMOVE",
                        "INSERT, SELECT, UPDATE, DELETE",
                        "GET, POST, PUT/PATCH, DELETE",
                        "FETCH, CREATE, MODIFY, ERASE"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Ao trabalhar com APIs, por que é importante validar dados de entrada e saída?",
                    options: [
                        "Para economizar bateria do computador",
                        "Para evitar erros e comportamentos inesperados",
                        "Porque o Python exige isso",
                        "Para reduzir o tamanho das requisições"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "De acordo com o vídeo, qual é a instrução Python para instalar a biblioteca requests?",
                    options: [
                        "install requests",
                        "python -m install requests",
                        "pip install requests",
                        "python requests install"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "No exemplo do Firebase, por que é necessário adicionar '.json' ao final da URL?",
                    options: [
                        "Para converter a resposta automaticamente para Python",
                        "É uma regra específica do Firebase para indicar o formato de dados",
                        "Para acelerar a requisição",
                        "Para evitar erros de CORS"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Por que verificar a documentação de uma API antes de usá-la?",
                    options: [
                        "Para conhecer os endpoints, parâmetros, limites de taxa e formatos de resposta",
                        "Porque é ilegal usar uma API sem ler a documentação",
                        "Para descobrir o salário dos desenvolvedores da API",
                        "A documentação não é importante, apenas o endpoint da API"
                    ],
                    correctAnswer: 0
                }
            ]
        ]
    },
    2: {
        name: "Automação",
        videos: [
            {
                id: "8AMNaVt0z_M",
                title: "Projetos de Automação de Tarefas com Python - Playlist para iniciantes",
                description: "Aprenda a automatizar tarefas cotidianas usando Python."
            },
            {
                id: "2EIfXi2-vCI",
                title: "7 projetos de automação que todos deveriam conhecer",
                description: "Conheça 7 projetos de automação que podem ajudar no seu dia a dia."
            }
        ],
        quizzes: [
            // Primeira variação do quiz para Módulo 2 (Automação)
            [
                {
                    question: "Qual biblioteca Python é frequentemente usada para automatizar tarefas no navegador?",
                    options: [
                        "BeautifulSoup",
                        "Requests",
                        "Selenium",
                        "Pandas"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é um WebDriver no contexto do Selenium?",
                    options: [
                        "Um plugin de navegador",
                        "Um componente que permite ao Python controlar um navegador",
                        "Um servidor proxy para requisições web",
                        "Um arquivo de configuração para automação"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual biblioteca é mais adequada para automatizar a manipulação de planilhas Excel?",
                    options: [
                        "Numpy",
                        "Matplotlib",
                        "OpenPyXL ou pandas",
                        "Scikit-learn"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é web scraping?",
                    options: [
                        "Aceleração de conexão com a internet",
                        "Extração de dados de websites",
                        "Criação de sites automaticamente",
                        "Detecção de falhas em páginas web"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No Selenium, como você encontra um elemento na página por seu XPath?",
                    options: [
                        "driver.find_element_by_xpath('xpath')",
                        "driver.find_element(By.XPATH, 'xpath')",
                        "driver.get_element('xpath')",
                        "driver.select_xpath('xpath')"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No contexto de automação, o que é um 'headless browser'?",
                    options: [
                        "Um navegador sem interface gráfica",
                        "Um navegador com menor consumo de memória",
                        "Um navegador que não armazena histórico",
                        "Um navegador sem suporte a JavaScript"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Qual função do módulo 'os' do Python permite executar comandos do sistema operacional?",
                    options: [
                        "os.command()",
                        "os.execute()",
                        "os.run()",
                        "os.system()"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "Para automatizar o download de arquivos da web, qual biblioteca seria mais apropriada?",
                    options: [
                        "requests",
                        "beautifulsoup",
                        "urllib",
                        "webdl"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Qual comando é usado para clicar em um botão usando Selenium?",
                    options: [
                        "elemento.press()",
                        "elemento.click()",
                        "elemento.submit()",
                        "elemento.activate()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Como você instala o Selenium no Python?",
                    options: [
                        "apt-get install selenium",
                        "pip install selenium",
                        "conda install selenium",
                        "python -m install selenium"
                    ],
                    correctAnswer: 1
                }
            ],
            // Segunda variação do quiz para Módulo 2 (Automação)
            [
                {
                    question: "Qual biblioteca permite automatizar movimentos do mouse e teclado no Python?",
                    options: [
                        "MousePy",
                        "PyAutoGUI",
                        "ClickAutomation",
                        "KeyboardMaster"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Na versão 4 do Selenium, qual é a nova forma recomendada de localizar elementos?",
                    options: [
                        "driver.find('xpath', 'valor')",
                        "driver.find_element(By.XPATH, 'valor')",
                        "driver.locate_element('xpath', 'valor')",
                        "driver.search('xpath', 'valor')"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que é o agendador de tarefas do Windows usado para executar scripts automaticamente?",
                    options: [
                        "Cron",
                        "Task Scheduler",
                        "Windows Timer",
                        "AutoExecute"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Que vantagem o WebDriver Manager traz para projetos com Selenium?",
                    options: [
                        "Aumento de performance na automação",
                        "Download e gerenciamento automático do driver correto do navegador",
                        "Integração com bancos de dados",
                        "Suporte a mais idiomas de programação"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Para automatizar o envio de mensagens no WhatsApp, qual biblioteca você pode usar?",
                    options: [
                        "WhatsApp-py",
                        "Selenium ou pywhatkit",
                        "WhatBot",
                        "MessageAutomator"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que é um webhook no contexto de automação?",
                    options: [
                        "Um método para conectar hardware ao computador",
                        "Uma URL que recebe notificações automáticas quando eventos ocorrem",
                        "Um tipo de linguagem de programação",
                        "Um aplicativo para controle remoto"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual módulo Python permite trabalhar com datas e horários?",
                    options: [
                        "timedate",
                        "date",
                        "datetime",
                        "calendar"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é RPA no contexto de automação?",
                    options: [
                        "Robotic Protocol Authorization",
                        "Robotic Process Automation",
                        "Remote Process Activation",
                        "Repeated Python Actions"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método do Selenium é usado para preencher um campo de texto?",
                    options: [
                        "elemento.fill('texto')",
                        "elemento.value = 'texto'",
                        "elemento.send_keys('texto')",
                        "elemento.input('texto')"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual é uma boa prática ao criar scripts de automação?",
                    options: [
                        "Minimizar comentários para manter o código limpo",
                        "Incluir pausas e tratamento de erros",
                        "Sempre usar abordagens complexas para garantir robustez",
                        "Evitar registros de log para melhorar a performance"
                    ],
                    correctAnswer: 1
                }
            ],
            // Terceira variação do quiz para Módulo 2 (Automação)
            [
                {
                    question: "Qual biblioteca Python permite manipular imagens para automação?",
                    options: [
                        "ImageLib",
                        "OpenCV ou Pillow",
                        "PhotoPy",
                        "MatplotImg"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual comando Selenium é usado para abrir uma URL em um navegador automatizado?",
                    options: [
                        "browser.navigate(url)",
                        "browser.get(url)",
                        "browser.open(url)",
                        "browser.load(url)"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual destas ferramentas é específica para automação de testes?",
                    options: [
                        "PyTest",
                        "NumPy",
                        "Pandas",
                        "Matplotlib"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "O que é uma 'macro' no contexto de automação?",
                    options: [
                        "Um tipo de vírus",
                        "Uma sequência de comandos pré-programados",
                        "Uma biblioteca Python",
                        "Um tipo de banco de dados"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual pacote permite criar automações de terminal em Python?",
                    options: [
                        "subprocess",
                        "terminal",
                        "console",
                        "shell"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "O que o Selenium WebDriver faz em um projeto de automação?",
                    options: [
                        "Comprime arquivos para torná-los mais rápidos",
                        "Melhora a interface gráfica dos navegadores",
                        "Permite que o código Python controle um navegador",
                        "Gera relatórios automáticos de uso da internet"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual biblioteca é usada para reconhecimento óptico de caracteres (OCR) em Python?",
                    options: [
                        "PyOCR",
                        "Tesseract (via pytesseract)",
                        "ReadText",
                        "OcrPy"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Para que serve o XPath no contexto do Selenium?",
                    options: [
                        "Para medir a velocidade de execução do script",
                        "Para localizar elementos HTML em uma página web",
                        "Para executar JavaScript no navegador",
                        "Para otimizar o consumo de memória"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O módulo 'logging' em Python é usado para:",
                    options: [
                        "Login em sistemas remotos",
                        "Registrar eventos e mensagens em arquivos de log",
                        "Calcular logaritmos para análise de dados",
                        "Fazer o download de logs de servidores"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual é a principal vantagem da automação com Selenium mostrada nos vídeos?",
                    options: [
                        "Executada apenas em sistemas Windows",
                        "Funciona apenas com tarefas simples",
                        "Simula ações humanas em um navegador real",
                        "Requer hardware especializado"
                    ],
                    correctAnswer: 2
                }
            ]
        ]
    },
    3: {
        name: "Análise de Dados",
        videos: [
            {
                id: "2xurqZxctAU",
                title: "Análise de Dados com Python | O que é, Como, Onde, Por que usar?",
                description: "Aprenda os fundamentos da análise de dados com Python."
            },
            {
                id: "IT7zPluDADk",
                title: "MINHA OPINIÃO sobre o PANDAS do PYTHON (e dicas de uso)",
                description: "Aprenda sobre a biblioteca Pandas e como usá-la efetivamente."
            }
        ],
        quizzes: [
            // Primeira variação do quiz para Módulo 3 (Análise de Dados)
            [
                {
                    question: "Quais são as principais bibliotecas Python para análise de dados?",
                    options: [
                        "Django, Flask, FastAPI",
                        "Pygame, PyQt, Kivy",
                        "Pandas, NumPy, Matplotlib",
                        "Selenium, BeautifulSoup, Requests"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é um DataFrame no Pandas?",
                    options: [
                        "Um tipo de função matemática",
                        "Uma estrutura de dados tabular bidimensional",
                        "Um formato de arquivo para armazenar dados",
                        "Um tipo de gráfico"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método do Pandas é usado para lidar com valores ausentes?",
                    options: [
                        "df.clear_na()",
                        "df.drop_na()",
                        "df.fillna()",
                        "df.remove_na()"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual função é usada para ler um arquivo CSV com Pandas?",
                    options: [
                        "pandas.load_csv()",
                        "pandas.read_csv()",
                        "pandas.import_csv()",
                        "pandas.open_csv()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que é uma Series no Pandas?",
                    options: [
                        "Um conjunto de episódios de TV",
                        "Uma sequência de números em progressão aritmética",
                        "Um array unidimensional rotulado",
                        "Uma coleção de DataFrames"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "De acordo com os vídeos, qual destas bibliotecas é necessária para que o Pandas trabalhe com arquivos Excel?",
                    options: [
                        "xlsxwriter",
                        "openpyxl",
                        "excelpy",
                        "pyxlsx"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que faz o método .describe() no Pandas?",
                    options: [
                        "Apresenta informações sobre o DataFrame",
                        "Gera um resumo estatístico dos dados",
                        "Descreve a estrutura de dados utilizada",
                        "Documenta o código"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Como você seleciona uma coluna específica em um DataFrame?",
                    options: [
                        "df.get_column('nome_coluna')",
                        "df['nome_coluna']",
                        "df.column('nome_coluna')",
                        "df.select('nome_coluna')"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "De acordo com o vídeo, qual é a forma mais fácil de instalar o Pandas junto com outras bibliotecas de ciência de dados?",
                    options: [
                        "Usando o gerenciador de pacotes pip",
                        "Instalando o Anaconda",
                        "Compilando o código fonte",
                        "Usando o apt-get install"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual é a diferença entre .loc e .iloc no Pandas?",
                    options: [
                        "Não há diferença, são sinônimos",
                        ".loc usa nomes de linhas/colunas, .iloc usa índices numéricos",
                        ".loc é mais rápido, .iloc é mais preciso",
                        ".loc é para linhas, .iloc é para colunas"
                    ],
                    correctAnswer: 1
                }
            ],
            // Segunda variação do quiz para Módulo 3 (Análise de Dados)
            [
                {
                    question: "O que é um 'pivot table' no Pandas?",
                    options: [
                        "Uma tabela que pode ser girada na tela",
                        "Uma tabela resumo que agrega dados de maneira específica",
                        "Uma tabela que permite apenas entradas numéricas",
                        "Uma tabela temporária usada para cálculos"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método é usado para concatenar DataFrames no Pandas?",
                    options: [
                        "pandas.append()",
                        "pandas.concat()",
                        "pandas.merge()",
                        "pandas.join()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Segundo o vídeo, qual é a linha de código para importar o Pandas?",
                    options: [
                        "import pandas",
                        "import pandas as pd",
                        "from pandas import *",
                        "require pandas"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual destas não é uma operação de agregação comum no Pandas?",
                    options: [
                        "mean()",
                        "sum()",
                        "randomize()",
                        "count()"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é um 'heatmap' em visualização de dados?",
                    options: [
                        "Um mapa que mostra a temperatura em diferentes regiões",
                        "Uma representação gráfica onde cores representam valores numéricos",
                        "Um mapa que utiliza tecnologia térmica para análise de dados",
                        "Um gráfico que mostra apenas dados com alta intensidade"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método é usado para remover duplicatas em um DataFrame?",
                    options: [
                        "df.remove_duplicates()",
                        "df.drop_duplicates()",
                        "df.delete_duplicates()",
                        "df.unique()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Conforme explicado no vídeo sobre Excel, como se pode ler uma aba específica de uma planilha pelo seu nome usando Pandas?",
                    options: [
                        "pd.read_excel('arquivo.xlsx', tab='nome_aba')",
                        "pd.read_excel('arquivo.xlsx', sheet_name='nome_aba')",
                        "pd.read_excel('arquivo.xlsx', worksheet='nome_aba')",
                        "pd.read_excel('arquivo.xlsx', sheet='nome_aba')"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual é o principal objetivo do NumPy em análise de dados?",
                    options: [
                        "Criar interfaces gráficas para análise",
                        "Fornecer estruturas de dados para manipulação SQL",
                        "Fornecer suporte para computação numérica eficiente",
                        "Gerenciar bancos de dados"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Como você calcularia a média de uma coluna numérica no Pandas?",
                    options: [
                        "df['coluna'].mean()",
                        "mean(df['coluna'])",
                        "df.average('coluna')",
                        "df.mean('coluna')"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "O que é análise de dados exploratória (EDA)?",
                    options: [
                        "Aplicação de algoritmos avançados de machine learning",
                        "Processo de investigar conjuntos de dados para descobrir padrões",
                        "Método para explorar novas fontes de dados",
                        "Técnica para extrair dados de websites"
                    ],
                    correctAnswer: 1
                }
            ],
            // Terceira variação do quiz para Módulo 3 (Análise de Dados)
            [
                {
                    question: "Qual destas é uma vantagem de usar o Pandas para análise de dados?",
                    options: [
                        "É a única biblioteca que funciona com Python",
                        "Oferece estruturas de dados flexíveis e funções para manipulação eficiente",
                        "Só funciona com dados numéricos",
                        "É mais rápido que todas as outras bibliotecas"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que faz a função df.head() no Pandas?",
                    options: [
                        "Mostra as primeiras linhas do DataFrame",
                        "Retorna informações sobre o cabeçalho das colunas",
                        "Cria um novo DataFrame apenas com os cabeçalhos",
                        "Ordena o DataFrame pelo cabeçalho"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Como você pode verificar os tipos de dados das colunas em um DataFrame?",
                    options: [
                        "df.column_types()",
                        "df.types()",
                        "df.dtypes",
                        "df.get_types()"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Segundo o vídeo, qual a diferença entre usar Pandas e OpenPyXL para trabalhar com Excel?",
                    options: [
                        "Pandas é mais lento, OpenPyXL é mais rápido",
                        "Pandas é para leitura, OpenPyXL apenas para escrita",
                        "Pandas é para manipulação de dados, OpenPyXL para formatação e recursos avançados",
                        "Não há diferenças significativas entre eles"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é um 'outlier' na análise de dados?",
                    options: [
                        "Um valor extremo que se desvia significativamente dos outros",
                        "Um tipo de gráfico usado em análise estatística",
                        "Uma coluna com valores ausentes",
                        "Um erro na importação de dados"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Como você pode criar um novo DataFrame a partir de uma seleção de colunas?",
                    options: [
                        "new_df = df.select(['col1', 'col2'])",
                        "new_df = df[['col1', 'col2']]",
                        "new_df = df.extract(['col1', 'col2'])",
                        "new_df = pick_columns(df, ['col1', 'col2'])"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "De acordo com o vídeo, qual ambiente online já tem o Pandas pré-instalado?",
                    options: [
                        "VS Code Online",
                        "Google Colab",
                        "Jupyter Online",
                        "PyCharm Cloud"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que significa quando dizemos que as operações no Pandas são 'vetorizadas'?",
                    options: [
                        "Operam apenas em gráficos vetoriais",
                        "Funcionam em lotes de dados simultaneamente, sem loops explícitos",
                        "Usam técnicas de computação vetorial da matemática",
                        "Só funcionam com dados numéricos"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Como você lê uma planilha Excel específica pelo seu índice?",
                    options: [
                        "pd.read_excel('arquivo.xlsx', sheet=2)",
                        "pd.read_excel('arquivo.xlsx', sheet_name=2)",
                        "pd.read_excel('arquivo.xlsx', index=2)",
                        "pd.read_excel('arquivo.xlsx', sheet_index=2)"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual destas NÃO é uma etapa comum no processo de análise de dados?",
                    options: [
                        "Limpeza e pré-processamento de dados",
                        "Análise exploratória",
                        "Renderização de vídeos em 3D",
                        "Visualização de resultados"
                    ],
                    correctAnswer: 2
                }
            ]
        ]
    },
    final: {
        name: "Exame Final",
        quizzes: [
            // Primeira variação do exame final (atualizada)
            [
                {
                    question: "Qual biblioteca Python é mais adequada para realizar requisições HTTP a uma API?",
                    options: [
                        "http",
                        "requests",
                        "urllib",
                        "apilib"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método HTTP é mais apropriado para obter dados de uma API?",
                    options: [
                        "POST",
                        "PUT",
                        "DELETE",
                        "GET"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "Qual biblioteca é mais indicada para automatizar tarefas no navegador?",
                    options: [
                        "BeautifulSoup",
                        "Requests",
                        "Selenium",
                        "Pygame"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é web scraping?",
                    options: [
                        "Criar websites automaticamente",
                        "Extrair dados de páginas web",
                        "Testar a segurança de um site",
                        "Melhorar a velocidade de carregamento de páginas"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual objeto do Pandas representa uma tabela de dados bidimensional?",
                    options: [
                        "Table",
                        "Matrix",
                        "DataFrame",
                        "Grid"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Como você lê um arquivo CSV usando o Pandas?",
                    options: [
                        "pd.load_csv('arquivo.csv')",
                        "pd.read_csv('arquivo.csv')",
                        "pd.import_csv('arquivo.csv')",
                        "pd.open('arquivo.csv')"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual código status HTTP indica que uma requisição foi bem-sucedida?",
                    options: [
                        "404",
                        "500",
                        "200",
                        "301"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Conforme explicado nos vídeos, o que é um JSON?",
                    options: [
                        "Um tipo de arquivo de imagem",
                        "Uma linguagem de programação",
                        "Um formato de dados baseado em texto",
                        "Um tipo de banco de dados"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual é a função do módulo 'time' em scripts de automação?",
                    options: [
                        "Medir a velocidade de execução do script",
                        "Criar atrasos entre operações",
                        "Mostrar a hora atual",
                        "Todas as alternativas anteriores"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "Como você pode lidar com valores ausentes em um DataFrame do Pandas?",
                    options: [
                        "df.remove_nulls()",
                        "df.fillna(value)",
                        "df.clean()",
                        "df.remove_empty()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "De acordo com os vídeos de API, qual método HTTP é usado para criar novos dados?",
                    options: [
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual biblioteca permite criar visualizações de dados em Python?",
                    options: [
                        "DataViz",
                        "Matplotlib",
                        "PyGraph",
                        "Visuals"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que o método .groupby() faz no Pandas?",
                    options: [
                        "Divide os dados em grupos e aplica operações a cada grupo",
                        "Ordena os dados em ordem alfabética",
                        "Agrupa colunas similares",
                        "Remove duplicatas no DataFrame"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Qual destas não é uma biblioteca comum para análise de dados em Python?",
                    options: [
                        "NumPy",
                        "Django",
                        "Pandas",
                        "Matplotlib"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Em Python, como você verifica se uma requisição a uma API foi bem-sucedida?",
                    options: [
                        "Verificando se response.ok é True",
                        "Usando o método check_success()",
                        "Verificando se o status_code é 200",
                        "Todas as opções anteriores estão corretas"
                    ],
                    correctAnswer: 2
                }
            ],
            // Segunda variação do exame final (atualizada)
            [
                {
                    question: "Qual destas é uma forma de lidar com erros em requisições a APIs?",
                    options: [
                        "Ignorar todos os erros",
                        "Usar blocos try/except",
                        "Reiniciar o computador",
                        "Mudar para outra linguagem de programação"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No contexto de APIs, o que significa fazer uma requisição POST?",
                    options: [
                        "Obter dados do servidor",
                        "Criar novos dados no servidor",
                        "Atualizar dados existentes no servidor",
                        "Excluir dados do servidor"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual biblioteca Python permite automatizar movimento do mouse e teclado?",
                    options: [
                        "AutoMouse",
                        "PyAutoGUI",
                        "ClickBot",
                        "InputSimulator"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que é um 'headless browser'?",
                    options: [
                        "Um navegador sem interface gráfica",
                        "Um navegador que não armazena histórico",
                        "Um navegador que não suporta JavaScript",
                        "Um navegador sem suporte para extensões"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Como converter uma coluna de texto para numérica no Pandas?",
                    options: [
                        "df['coluna'].to_numeric()",
                        "pd.numeric(df['coluna'])",
                        "pd.to_numeric(df['coluna'])",
                        "df.convert('coluna', 'numeric')"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual método você usaria para encontrar valores únicos em uma coluna do Pandas?",
                    options: [
                        "df['coluna'].unique()",
                        "df['coluna'].distinct()",
                        "df.unique('coluna')",
                        "df.find_unique('coluna')"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "De acordo com os vídeos, o que é uma 'API REST'?",
                    options: [
                        "Um tipo de API que só funciona quando o servidor está em repouso",
                        "Uma API que segue princípios arquiteturais específicos para comunicação web",
                        "Uma API que só permite operações GET",
                        "Uma API que necessita de períodos de inatividade"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Conforme explicado nos vídeos, qual método HTTP é usado para atualizar parcialmente um recurso?",
                    options: [
                        "GET",
                        "POST",
                        "PATCH",
                        "DELETE"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é o 'Cron' no contexto de automação?",
                    options: [
                        "Uma biblioteca Python",
                        "Um sistema para agendar tarefas em sistemas Unix",
                        "Um formato de arquivo para armazenar dados",
                        "Um tipo de algoritmo de machine learning"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual biblioteca é comumente usada para reconhecimento óptico de caracteres (OCR)?",
                    options: [
                        "VisualReader",
                        "pytesseract",
                        "ocr-python",
                        "text-extract"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que é um 'pivot table' no Pandas?",
                    options: [
                        "Uma tabela que automaticamente ordena os dados",
                        "Uma tabela resumo que reorganiza e agrega dados",
                        "Uma tabela que contém apenas dados numéricos",
                        "Uma tabela temporária"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Como você pode mesclar dois DataFrames no Pandas?",
                    options: [
                        "df1 + df2",
                        "pd.merge(df1, df2)",
                        "df1.combine(df2)",
                        "pd.join_frames(df1, df2)"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Na analogia do garçom apresentada no vídeo de API, o que representaria o backend?",
                    options: [
                        "O cliente sentado na mesa",
                        "O garçom",
                        "A cozinha",
                        "O menu"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que é um 'outlier' na análise de dados?",
                    options: [
                        "Um valor que se desvia significativamente dos outros",
                        "Um erro na importação de dados",
                        "Uma coluna vazia",
                        "Um tipo de gráfico"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Qual destas é uma etapa essencial em qualquer projeto de análise de dados?",
                    options: [
                        "Criar uma interface gráfica",
                        "Publicar os resultados em um jornal científico",
                        "Limpeza e pré-processamento dos dados",
                        "Usar machine learning avançado"
                    ],
                    correctAnswer: 2
                }
            ],
            // Terceira variação do exame final (atualizada)
            [
                {
                    question: "Qual formato de dados é mais comumente retornado por APIs modernas?",
                    options: [
                        "XML",
                        "CSV",
                        "JSON",
                        "TXT"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que significa o código de status HTTP 404?",
                    options: [
                        "Requisição bem-sucedida",
                        "Erro no servidor",
                        "Recurso não encontrado",
                        "Redirecionamento"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual é a biblioteca mais usada para web scraping em Python?",
                    options: [
                        "WebScraper",
                        "BeautifulSoup",
                        "ScrapingLib",
                        "WebHarvest"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No contexto de automação, o que significa RPA?",
                    options: [
                        "Rapid Python Analysis",
                        "Robotic Process Automation",
                        "Remote Python Application",
                        "Random Parameter Assignment"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No Pandas, o que é uma Series?",
                    options: [
                        "Um conjunto de episódios de TV",
                        "Um array unidimensional rotulado",
                        "Um tipo de visualização de dados",
                        "Uma sequência de operações"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método do Pandas é usado para remover linhas com valores ausentes?",
                    options: [
                        "df.remove_na()",
                        "df.clean()",
                        "df.dropna()",
                        "df.delete_nulls()"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "De acordo com os vídeos, para que serve a biblioteca requests em Python?",
                    options: [
                        "Para criar interfaces gráficas",
                        "Para fazer requisições a APIs e sites",
                        "Para manipular bancos de dados SQL",
                        "Para processar imagens"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual método HTTP é usado para atualizar um recurso existente em uma API?",
                    options: [
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual módulo Python é usado para trabalhar com datas e horários?",
                    options: [
                        "time",
                        "date",
                        "datetime",
                        "calendar"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "Qual biblioteca Python permite manipular arquivos Excel?",
                    options: [
                        "ExcelPy",
                        "openpyxl",
                        "xlsreader",
                        "excelreader"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que faz o método .describe() no Pandas?",
                    options: [
                        "Descreve a estrutura do DataFrame",
                        "Gera um resumo estatístico dos dados numéricos",
                        "Mostra a documentação do DataFrame",
                        "Lista todas as colunas e seus tipos"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No vídeo de API, como você converte a resposta de uma API em um formato utilizável em Python?",
                    options: [
                        "response.convert()",
                        "response.json()",
                        "response.to_python()",
                        "response.format()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual destas é uma vantagem da automação com Python?",
                    options: [
                        "Só funciona em sistemas Windows",
                        "Reduz erros humanos e aumenta a produtividade",
                        "É a única linguagem que suporta automação",
                        "Não requer conhecimento de programação"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "O que é 'data wrangling'?",
                    options: [
                        "Um tipo de algorítmo de machine learning",
                        "O processo de limpar e transformar dados para análise",
                        "Uma técnica para visualização de dados",
                        "Um método de criptografia de dados"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "No segundo vídeo sobre API, quais são os quatro principais tipos de interações com dados?",
                    options: [
                        "Pegar, Criar, Atualizar, Deletar",
                        "Selecionar, Inserir, Modificar, Remover",
                        "GET, POST, PUT/PATCH, DELETE",
                        "Read, Write, Edit, Erase"
                    ],
                    correctAnswer: 2
                }
            ]
        ]
    }
};

export default moduleData;
