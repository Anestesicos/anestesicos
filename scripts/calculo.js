new Vue({
    el: "#login-box",
    data: {
        vi: {}
    },
    methods: {
        quantidadePorTubete:(quant)=>{
            return quant;
        },
        calcular: () => {
            let a, anestesico, VPeso, peso, resultado, mostrar, calculo;
            resultado = document.querySelector(".callout-success");
            a = document.querySelector("#selecionar");
            anestesico = a.options[a.selectedIndex].text;
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

            if (anestesico === "Tubete com 30mg") { // Lidocaína
                calculo = (VPeso * 7) < 500 ? (VPeso * 7) : 500;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 54).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Tubete com 40mg") { //  Articaína
                calculo = (VPeso * 7) < 500 ? (VPeso * 7) : 500;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 72).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Tubete com 30mg a 3%") { // Prilocaína
                calculo = (VPeso * 8) < 600 ? (VPeso * 8) : 600;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 54).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Tubete com 40mg a 4%") { // Prilocaína
                calculo = (VPeso * 8) < 600 ? (VPeso * 8) : 600;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 72).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Tubete com 20mg a 2%") { // Mepivacaína
                calculo = (VPeso * 6.6) < 400 ? (VPeso * 6.6) : 400;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 36).toFixed(1) + " tubetes"}</h3>`;
            } else if (anestesico === "Tubete com 30mg a 3%") { // Mepivacaína
                calculo = (VPeso * 6.6) < 400 ? (VPeso * 6.6) : 400;
                mostrar = `<h3>${calculo + "mg"}</h3><h3>${(calculo / 54).toFixed(1) + " tubetes"}</h3>`;
            }

            resultado.innerHTML = mostrar;
            resultado.style.visibility = "visible";
        }
    }
})
;