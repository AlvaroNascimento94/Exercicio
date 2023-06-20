function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector('.btn-clear'),


        inicia() {
            /* sempre q for referenciar uma chave do objeto dentro do obj uso o this */
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                };

            })
        },
        cliqueBotoes() {
            //this -> calculadora
            /* nesse caso eu não estou apontando o this para a calculadora e sim para o documento
             */
            /* ja q não aparece o bind p mim, posso usar a arrowfunction, pois 
            ela não permite a mudaça do meu this */
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    /* chamo a função */
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    /* chamo a função */
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = ''
        },
        apagaUm() {
            /* para apagar um coloco o slice  */
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;
            console.log(conta)
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Inválida');
                    return
                }
                this.display.value = String(conta);
            } catch (error) {
                alert('Conta Inválida');
                return
            }
        }
    }
}
const calculadora = criaCalculadora();
calculadora.inicia();