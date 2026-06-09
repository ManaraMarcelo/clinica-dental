Roteiro de Apresentacao — Clinica Dental Bluetooth
Trabalho de Faculdade — Nuxt.js Dividido para 4 integrantes. Tempo estimado total: 15–20 minutos.

INTEGRANTE 1 — Abertura e Contexto do Projeto
Papel: apresentar o problema e o que o sistema faz. Dica: abra o site no navegador antes de começar.

[FALA]

Boa tarde a todos. Vamos apresentar o nosso projeto de desenvolvimento web, que é um sistema para uma clínica odontológica fictícia chamada Bluetooth Dental.

A ideia do trabalho foi simples: toda clínica hoje precisa de presença digital. Não é só um cartão de visitas online — é um lugar onde o paciente pode conhecer os serviços, entender o que a clínica oferece, fazer login na sua conta e até agendar uma consulta.

Com isso em mente, o nosso sistema tem quatro páginas principais:

Página inicial — é a landing page, onde apresentamos a clínica, os diferenciais e um chamado para agendamento.
Serviços — mostra todos os tratamentos disponíveis, como funciona o processo de atendimento e os planos.
Agendar — formulário completo para o paciente escolher o serviço, a data e o horário.
Área do usuário — onde o paciente logado vê seus dados, histórico de consultas e plano contratado.
(mostre rapidamente cada página no site, clicando na navbar)

Então o sistema cobre toda a jornada do paciente: do primeiro contato até o agendamento e a gestão da sua conta.

Agora, a pergunta que o trabalho exigia que a gente respondesse com a prática: como construir tudo isso de forma organizada, moderna e eficiente? A resposta foi o Nuxt.js — e é exatamente sobre ele que o próximo integrante vai falar.

INTEGRANTE 2 — O Que É Vue.js e O Que É Nuxt.js
Papel: explicar as ferramentas e por que o Nuxt existe. Dica: use as analogias — elas tornam o assunto acessível para qualquer pessoa.

[FALA]

Para entender o Nuxt, precisamos entender primeiro o Vue — porque um depende do outro.

Vue.js é um framework JavaScript para criar interfaces web. Em outras palavras, é um conjunto de ferramentas que facilita a criação de telas que o usuário vê e interage no navegador. Em vez de você escrever HTML, CSS e JavaScript soltos, o Vue te dá uma estrutura onde você cria componentes — pedaços reutilizáveis de tela. Pensa assim: o botão de agendar consulta, o menu de navegação, o card de serviço — cada um desses é um componente. O Vue organiza e conecta esses pedaços.

Nuxt.js é um framework construído em cima do Vue. Se o Vue é o motor, o Nuxt é o carro completo. O Vue te dá o poder de criar interfaces; o Nuxt te dá a estrutura inteira para um sistema web real: roteamento de páginas, organização de arquivos, carregamento de componentes automático, e muito mais.

Uma analogia que ajuda muito a entender o papel do Nuxt: quem conhece o mundo React vai saber que existe o Next.js, que é um framework construído em cima do React. A relação é exatamente a mesma — assim como o Next.js está para o React, o Nuxt.js está para o Vue. São frameworks que pegam uma biblioteca de interface e adicionam tudo que falta para você construir uma aplicação de verdade.

O Nuxt foi criado em 2016 pelos irmãos Sébastien e Alexandre Chopin, com um objetivo claro: resolver problemas comuns que aparecem quando você tenta construir um sistema real usando Vue puro.

Quais problemas o Nuxt resolve?
Com o Vue puro, alguns problemas aparecem cedo:

Iniciar um projeto do zero é trabalhoso — você precisa configurar manualmente o Vue Router para as rotas e o Vuex para gerenciar estados.
Sem estrutura de pastas padrão — cada time organiza os arquivos de um jeito diferente, gerando confusão.
Rotas configuradas manualmente — cada nova página exige que você edite um arquivo de configuração.
Sem um lugar único para configurações — as configurações ficam espalhadas.
Ruim para o Google — aplicações Vue puras montam tudo no navegador do usuário. Quando o Google tenta ler a página para indexar, o conteúdo ainda não está lá. Isso prejudica muito o ranqueamento nos buscadores.
Carregamento lento — se o navegador precisa baixar tudo antes de mostrar qualquer coisa, a primeira tela demora a aparecer.
O Nuxt resolve todos esses pontos de uma vez. E o principal mecanismo que permite isso é o modo de renderização — que eu vou explicar agora.

Modos de renderização: SSR, SSG e SPA
Essa é a parte mais técnica, mas vou simplificar ao máximo.

SPA (Single Page Application) é como o Vue puro funciona: o servidor entrega uma página quase vazia e o navegador do usuário monta tudo. É rápido depois que carrega, mas o primeiro carregamento é lento e o Google não consegue ler o conteúdo.

SSR (Server-Side Rendering) é o modo padrão do Nuxt. Aqui, quando o usuário acessa o site, o servidor já monta o HTML completo e entrega pronto pro navegador. O conteúdo aparece muito mais rápido e o Google consegue ler tudo normalmente. Mas tem um detalhe interessante: esse HTML que chega ainda não é interativo. É aí que entra o processo chamado de hidratação — o Vue "acorda" por cima desse HTML estático e o torna reativo e interativo. Depois disso, a navegação entre páginas já acontece direto no navegador, sem precisar de novas requisições ao servidor.

SSG (Static Site Generation) é quando o Nuxt gera todos os arquivos HTML no momento em que você faz o deploy — antes de qualquer usuário acessar. As páginas ficam completamente estáticas, o que é ainda mais rápido que o SSR e não precisa de servidor Node rodando.

No nosso projeto, usamos o modo SSR — o padrão do Nuxt — que já garante melhor performance e compatibilidade com buscadores.

Resumindo a relação entre Vue e Nuxt:

Vue.js	Nuxt.js
O que é	Framework de interface	Framework de aplicação completa
Faz o quê	Cria componentes e reatividade	Adiciona rotas, SSR, estrutura de projeto
Renderização	Só no navegador (SPA)	Servidor + navegador (SSR/SSG)
Analogia	O motor	O carro completo
No nosso projeto, usamos o Nuxt 3 — a versão mais recente — com Vue 3 por baixo. O próximo integrante vai mostrar como tudo isso aparece na prática dentro do nosso código.

INTEGRANTE 3 — Como o Nuxt Foi Aplicado no Projeto
Papel: mostrar a estrutura de pastas e os conceitos do Nuxt no código real. Dica: abra o VS Code ou o explorador de arquivos enquanto fala.

[FALA]

Agora vou mostrar como o Nuxt aparece de forma concreta aqui no nosso projeto.

Uma das maiores vantagens do Nuxt é que ele tem convenções de pasta. Cada pasta significa uma coisa. Isso deixa o projeto organizado por padrão, sem precisar configurar nada manualmente.

1. Roteamento por arquivo — pasta pages/
(abra a pasta pages/ no explorador de arquivos)

No Nuxt, você não precisa configurar rotas — o arquivo vira a rota automaticamente.

Olha aqui:

pages/
  index.vue      → rota "/"           (página inicial)
  servicos.vue   → rota "/servicos"   (página de serviços)
  agendar.vue    → rota "/agendar"    (página de agendamento)
  usuario.vue    → rota "/usuario"    (área do paciente)
Criou o arquivo, criou a página. Simples assim. Não temos nenhum arquivo de rotas para gerenciar.

2. Componentes automáticos — pasta components/
(abra a pasta components/)

Aqui estão todos os pedaços reutilizáveis da interface. O Nuxt importa todos eles automaticamente — não precisamos de nenhuma linha de import no código.

Temos dois grupos:

Componentes com prefixo App — usados na página inicial (AppNav, AppHero, AppFeatures, AppFooter, etc.)
Componentes com prefixo Services — usados na página de serviços (ServicesHero, ServicesGrid, ServicesPricing, etc.)
Componentes com prefixo User — usados na área do paciente (UserSidebar, UserAccountTab, UserHistoryTab, UserPlanTab)
(abre um componente, por exemplo AppNav.vue, e mostra a estrutura)

Cada arquivo .vue tem três blocos: <template> para o HTML, <script setup> para a lógica em JavaScript, e <style> para o CSS. Esse formato é chamado de Single File Component — tudo que um componente precisa fica em um único arquivo.

3. Composables — pasta composables/
(abre a pasta composables/)

Composables são funções reutilizáveis que encapsulam lógica. É outra convenção do Nuxt que importa automaticamente.

Temos dois:

useScrollReveal — controla a animação de revelar elementos conforme o usuário rola a página. Em vez de copiar esse código em cada componente, ele fica centralizado aqui e qualquer componente usa chamando useScrollReveal().
useAuth — gerencia o estado de autenticação do usuário: se está logado, quem é, etc.
Essa separação é exatamente o que o Nuxt incentiva: lógica no composable, visual no componente.

4. Configuração centralizada — nuxt.config.ts
(abre o nuxt.config.ts na raiz do projeto)

Uma das soluções que o Nuxt oferece para o problema da configuração espalhada é o arquivo nuxt.config.ts. É aqui que centralizamos tudo: quais módulos estão sendo usados, configurações de CSS global, variáveis de ambiente e muito mais. É o painel de controle da aplicação.

5. O ponto de entrada — app.vue
(abre o app.vue)

Por último, o app.vue é o arquivo raiz do sistema — ele abraça todas as páginas. Basicamente diz: "aqui dentro vai existir um <NuxtPage>, que é onde o Nuxt vai renderizar a página correta de acordo com a rota". É como o esqueleto da aplicação.

INTEGRANTE 4 — Demo ao Vivo e Conclusão
Papel: navegar pelo site mostrando o resultado final e fechar a apresentação. Dica: tenha o site rodando antes. Use npm run dev no terminal.

[FALA]

Para fechar, vou navegar pelo sistema para vocês verem o resultado final funcionando.

(navegue pelo site conforme descreve)

Página inicial — aqui está a landing page. Temos a navbar no topo, a seção hero de boas-vindas, os diferenciais da clínica apresentados em cards, depoimentos de pacientes e uma chamada final para agendamento. Todos esses blocos que vocês estão vendo são os componentes do Nuxt que o colega mostrou no código.

Página de Serviços — ao clicar em "Serviços" na navbar, o Nuxt lê a rota /servicos e renderiza automaticamente o arquivo pages/servicos.vue. Aqui vemos os tratamentos, o processo de atendimento, os preços e um FAQ. Tudo composto por componentes independentes.

Página de Agendamento — o formulário completo para o paciente: escolha do serviço, data e horário disponível.

Área do Usuário — aqui temos um sistema de abas. O usuário vê seus dados pessoais, histórico de consultas e o plano contratado. Cada aba é um componente separado (UserAccountTab, UserHistoryTab, UserPlanTab) que o Nuxt carrega conforme necessário.

(volte para a página inicial)

Para concluir:

O principal foco do Nuxt é a experiência do desenvolvedor. E isso ficou claro para a gente na prática: gastamos muito menos tempo com configuração e muito mais tempo construindo as funcionalidades do sistema.

Sem o Nuxt, teríamos arquivos soltos, lógica misturada com visual, rotas para configurar manualmente e o problema de SEO do Vue puro. Com ele, cada coisa tem seu lugar — página em pages/, pedaço de tela em components/, lógica reutilizável em composables/, configuração centralizada no nuxt.config.ts.

O Vue cuida da reatividade e dos componentes. O Nuxt cuida da estrutura, das rotas, do modo de renderização e do ciclo de vida da aplicação. Juntos, eles nos permitiram construir um sistema com quatro páginas, autenticação de usuário e componentes reutilizáveis — de forma organizada e com uma base sólida.

Agradecemos a atenção. Estamos à disposição para perguntas.

Resumo Rapido — Quem fala o que
Integrante	Tema	Tempo aprox.
1	Abertura: contexto e o que o sistema faz (demo rápida das páginas)	3–4 min
2	Vue vs Nuxt + analogia Next.js + problemas que o Nuxt resolve + SSR/SSG/SPA	6–7 min
3	Aplicação no código: pages, components, composables, nuxt.config.ts, app.vue	5–6 min
4	Demo ao vivo detalhada + conclusão	3–4 min
Dica geral: Quando um colega estiver falando, o outro pode ficar com o mouse pronto para navegar ou mostrar o arquivo correto no VS Code. Combinado antes, fica muito mais fluido.