document.getElementById('game').style.display = 'none';

function startGame() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    const video = document.getElementById('meuVideo');
    video.play();
    video.onended = showChoices;
}

function showChoices() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('choices').style.display = 'flex';
    showChoicesText();
}

function showChoicesText() {
    const textElement = document.getElementById('textBeforeChoices');
    textElement.style.display = 'block';
    document.getElementById('descriptionText').style.display = 'block';
    setTimeout(() => {
        textElement.style.display = 'none';
        document.getElementById('leaveButton').style.display = 'inline-block';
        document.getElementById('stayButton').style.display = 'inline-block';
    }, 1000); //aumentar o tempo dps
}

function chooseLeave() {
    document.getElementById('choices').style.display = 'none';
    exitHospital(false);
    videoLeave.src = "video3.mp4";
    videoLeave.autoplay = true;
    videoLeave.width = 1300;
}

function chooseStay() {
    document.getElementById('choices').style.display = 'none';
    const syringeVideo = document.createElement('video');
    syringeVideo.src = "video2.mp4";
    syringeVideo.autoplay = true;
    syringeVideo.width = 1300;
    syringeVideo.onended = () => {
        document.getElementById('syringeFoundScene').style.display = 'flex'; // Mostra a cena da seringa
        syringeVideo.style.display = 'none'; // Esconde o vídeo da seringa
    };
    document.body.appendChild(syringeVideo);
}

function goToEscrita() {
    document.getElementById('mundoAberto').style.display = 'none';
    document.getElementById('escritaMundoAberto').style.display = 'flex';
}

function showCredits() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('credits').style.display = 'block';
}

function goBack() {
    document.getElementById('credits').style.display = 'none';
    document.getElementById('cover').style.display = 'block';
    document.getElementById('main').style.display = 'flex';
}




// Ao finalizar o vídeo
exitVideo.onended = () => {
    document.body.removeChild(exitVideo); // Remove o vídeo após terminar
    document.getElementById('mundoAberto').style.display = 'block'; // Mostra a tela do mundo aberto
};

// Adiciona o vídeo ao corpo do documento
document.body.appendChild(exitVideo);


function exitHospital(hasSyringe) {
    if (hasSyringe) {
        document.getElementById('syringeFoundScene').style.display = 'none';
        document.getElementById('mundoAberto').style.display = 'flex';

        const videoLeave = document.getElementById('videoLeave');
        videoLeave.play();
        videoLeave.autoplay = true;
        videoLeave.width = 1300;
        videoLeave.onended = () => {
            document.getElementById('videoLeave').style.display = 'flex';
        }
    }
}
function playNextVideo() {
    const nextVideo = document.createElement('video3');
    nextVideo.src = "video3";
    nextVideo.autoplay = true;
    nextVideo.onended = () => {
        // Aqui você pode definir o que acontece após o vídeo terminar
        // Exemplo: Ir para a próxima cena ou mostrar outra imagem
        document.getElementById('mundoAberto').style.display = 'flex'; // Exibe a tela do mundo aberto
    };
    document.body.appendChild(nextVideo);
    document.getElementById('syringeFoundScene').style.display = 'none'; // Esconde a cena da seringa
}


function irParaLuta(direcao) {
    window.location.href = 'luta.html?direcao=' + direcao;
}

