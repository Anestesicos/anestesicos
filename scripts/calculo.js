new Vue({
    el: "#login-box",
    data: {
        vi: {}
    },
    methods: {
        calcular: () => {
            let a, anestesico, quantAnest, VPeso, peso, resultado, mostrar, calculo;
            resultado = document.querySelector(".callout-success");
            a = document.querySelector("#selecionar");
            anestesico = a.options[a.selectedIndex].text;
            quantAnest = a.options[a.selectedIndex].value;
            peso = document.querySelector("#peso");
            VPeso = peso.value;

            if (anestesico === "Selecionar") {
                resultado.style.visibility = "hidden";
                resultado.innerHTML = `<h3>0mg</h3>`;
                return
            }

            if (VPeso === "" || VPeso === 0) {
                resultado.style.visibility = "hidden";
                resultado.innerHTML = `<h3>0mg</h3>`;
                return;
            }

            if (anestesico === "Lidocaína 2% - 36mg") { // Lidocaína
                calculo = (VPeso * 7) < 500 ? (VPeso * 7) : 500;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 36).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Articaína 4% - 72mg") { //  Articaína
                calculo = (VPeso * 7) < 500 ? (VPeso * 7) : 500;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 72).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Prilocaína 3% - 54mg") { // Prilocaína
                calculo = (VPeso * 8) < 600 ? (VPeso * 8) : 600;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 54).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Mepivacaína 2% - 36mg") { // Mepivacaína
                calculo = (VPeso * 6.6) < 400 ? (VPeso * 6.6) : 400;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 36).toFixed(1) + " tubetes"}</h3>`;
            }
            resultado.innerHTML = mostrar;
            resultado.style.visibility = "visible";


            function quantidadePorTubete(quant){
                console.log(quant)
                return (quant * 1.8)/1;
            }
        }
    }
})
;