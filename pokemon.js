var turno = 0;
var fim_de_turno = false;
var vidap1 = 100
var vidap2 = 100
function fogo() {
    if (turno % 2 == 0 && fim_de_turno == false) {
        var normal = document.getElementById('campo').innerHTML;
        fim_de_turno = true;
        document.getElementById('campo').innerHTML+="<img src='fire-ball-vector-2106209-removebg-preview.png' class='fogo' id='fogo'>";
        setTimeout(() => {
            document.getElementById('campo').innerHTML = normal;
            document.getElementById('lucario').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";
            document.getElementById('lucario').style.animationName = 'dano';
            document.getElementById('lucario').style.animationDuration = '300ms';
        }, 350)
        setTimeout(() => {
            document.getElementById('campo').innerHTML = normal;
            turno++;
            fim_de_turno = false;
            animacao_da_vida_1(10, vidap2);
            vidap2-=10
        }, 800)
    }
}

function sombra() {
    if (turno % 2 == 1 && fim_de_turno == false) {
        var normal = document.getElementById('campo').innerHTML;
        fim_de_turno = true;
        document.getElementById('campo').innerHTML += '<img src="a687a60f-05bf-4227-a868-37bba6806ef9.png" class="sombra">';
        setTimeout(() => {
            document.getElementById('campo').innerHTML = normal;
            document.getElementById('charizard').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";
            document.getElementById('charizard').style.animationName = 'dano_charizard';
            document.getElementById('charizard').style.animationDuration = '300ms';
            animacao_da_vida_2(10, vidap1);
            vidap1-=10
        }, 350)
        setTimeout(() => {
            document.getElementById('campo').innerHTML = normal;
            turno++;
            fim_de_turno = false;
        }, 800)
    }
}

function soco() {
    if (turno % 2 == 0 && fim_de_turno == false) {
        fim_de_turno = true;
        var css_lucario = document.getElementById('lucario').style;
        var normal = document.getElementById("charizard").style;
        document.getElementById('charizard').style.marginRight = '550px';
        document.getElementById('charizard').style.float = 'none';
        document.getElementById('charizard').style.animationDuration = "2s";
        document.getElementById('charizard').style.animationName = "ataque_fisico_charizard";
        setTimeout(() => {
            document.getElementById('lucario').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";
            document.getElementById('lucario').style.animationName = 'dano';
            document.getElementById('lucario').style.animationDuration = '300ms';
            animacao_da_vida_1(20, vidap2);
            vidap2 -= 20
        }, 1000)
        setTimeout(() => {
            document.getElementById('lucario').style = css_lucario;
        },1300)
        setTimeout(() => {
            document.getElementById('charizard').style = normal;
            turno++;
            fim_de_turno = false;
            if (vidap2<=0){
                alert('charizard ganhou');
            }
        },2000)
    }
}
function fisico_lucario(){
    if (turno % 2 == 1 && fim_de_turno == false) {
        fim_de_turno = true;
        var css_lucario = document.getElementById('lucario').style;
        var normal = document.getElementById("charizard").style;
        document.getElementById('lucario').style.marginLeft = '550px';
        document.getElementById('lucario').style.float = 'none';
        document.getElementById('lucario').style.animationDuration = "2s";
        document.getElementById('lucario').style.animationName = "ataque_fisico_lucario";
        setTimeout(() => {
            document.getElementById('charizard').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";
            document.getElementById('charizard').style.animationName = 'dano_charizard';
            document.getElementById('charizard').style.animationDuration = '300ms';
            animacao_da_vida_2(20, vidap1)
            vidap1-=20
        }, 1000)
        setTimeout(() => { 
            document.getElementById('charizard').style = normal;                ;
        }, 1300)
        setTimeout(() => {
            document.getElementById('lucario').style = css_lucario;
            turno++;
            fim_de_turno = false;
        }, 2000)
    }
}
function animacao_da_vida_1(dano, vida) {
    var larguraAtual = vida * 6;  // Supondo que a largura seja diretamente proporcional � vida
    var interval = setInterval(() => {
        larguraAtual -= 1;
        if (larguraAtual <= (vida - dano) * 6) {
            larguraAtual = (vida - dano) * 6;
            clearInterval(interval);
        }

        document.getElementById('vidap2').style.width = String(larguraAtual) + 'px';
    }, 1000 / 60);
    setTimeout(() => {
        if (vida-dano<=0){
            var normal=document.getElementById('vidap1').innerHTML;
            document.getElementById('vidap1').innerHTML+='<br><h1>charizard ganhou</h1>'
            vidap2=100;
            vidap1=100
            document.getElementById('vidap2').style.width ='600px';
            document.getElementById('vidap1').style.width ='600px';
            setTimeout(() => {
                document.getElementById('vidap1').innerHTML=normal
            },1000);
        }
    },300*dano);
}
function animacao_da_vida_2(dano, vida) {
        var larguraAtual = vida * 6;  // Supondo que a largura seja diretamente proporcional � vida

        var interval = setInterval(() => {
            larguraAtual -= 1;
            if (larguraAtual <= (vida - dano) * 6) {
                larguraAtual = (vida - dano) * 6;
                clearInterval(interval);
            }

            document.getElementById('vidap1').style.width = String(larguraAtual) + 'px';
        }, 1000 / 60);
        setTimeout(() => {
            if (vida-dano<=0){
                var normal=document.getElementById('vidap2').innerHTML;
                document.getElementById('vidap2').innerHTML+='<br><h1>lucario ganhou</h1>'
                vidap2=100;
                vidap1=100
                document.getElementById('vidap2').style.width ='600px';
                document.getElementById('vidap1').style.width ='600px';
                document.getElementById('charizard').style.height='0px'
                setTimeout(() => {
                    document.getElementById('vidap2').innerHTML=normal
                    document.getElementById('charizard').style.height='360px'
                },1000);
            }
        },120*dano);
}