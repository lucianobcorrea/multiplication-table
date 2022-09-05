function calculaTabuada() {
    let num = document.getElementById("txtNumber")
    let selTab = document.getElementById("selectTab")

    if(num.value.length == 0) {
        alert("Digite um número válido, por favor!")
    }else {
        selTab.innerHTML = ""
        let n = Number(num.value)
        for(let i = 1; i <= 10; i++) {
            let res = n * i
            let opt = document.createElement("option")
            opt.innerHTML = `${n} x ${i} = ${res}`
            selTab.appendChild(opt)     
        }
    }
}

function limpaCampo() {
    document.getElementById("txtNumber").value = ""
}