
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter. Ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia. Foi atrás de vídeos, artigos e mais informações sobre como utilizar essa tecnologia."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula, ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para encontrar informações relevantes e explicar o conteúdo em uma linguagem mais fácil de entender.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis. Percebeu que ela pode encontrar informações na internet de forma mais rápida e explicar termos complicados de maneira simplificada."
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para desenvolver seu trabalho. Achou que era mais fácil procurar respostas utilizando meios tradicionais, mesmo que levasse mais tempo. Também preferiu proteger seus dados pessoais e evitar muita intromissão da tecnologia."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e a escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Passou a impulsionar a inovação na área de IA e a buscar novos caminhos profissionais com essa tecnologia. Participa ativamente do desenvolvimento de soluções criativas e de processos envolvendo inteligência artificial."
            },
            {
                texto: "Preocupa-se com as pessoas que perderam seus empregos para máquinas e defende a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criação de um grupo de estudos entre trabalhadores para discutir formas de utilização da IA de maneira ética. Também passou a buscar soluções para diminuir as desigualdades geradas pela automação."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou que muitas pessoas ainda não sabem utilizar ferramentas tradicionais e decidiu compartilhar seus conhecimentos de desenho utilizando ferramentas de pintura digital para iniciantes. Também passou a incentivar a criatividade por meio de desenhos tradicionais."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagens de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagens e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente a utilizar essas ferramentas. Também compartilhou suas artes nas redes sociais."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazê-lo com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente, passou a utilizar a IA para fazer todas as suas tarefas e agora se sente dependente dessa tecnologia para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção, pois toda máquina erra. Por isso, revisar o trabalho e contribuir com perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA pode cometer erros e que os textos gerados nem sempre refletem o que você pensa. Por isso, aprendeu que os conteúdos produzidos pela IA devem servir como auxílio, e não como resultado final."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
