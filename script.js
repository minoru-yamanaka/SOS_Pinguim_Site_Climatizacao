document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');

    if (calcularBtn) {
        calcularBtn.addEventListener('click', function() {
            // Obter os valores dos campos
            const area = parseFloat(document.getElementById('area').value);
            const pessoas = parseInt(document.getElementById('pessoas').value);
            const sol = document.getElementById('sol').value;
            const resultadoDiv = document.getElementById('resultado');

            // Validar se os campos foram preenchidos
            if (isNaN(area) || isNaN(pessoas) || area <= 0 || pessoas < 0) {
                resultadoDiv.innerHTML = `
                    <h3>Erro!</h3>
                    <p>Por favor, preencha a área e o número de pessoas com valores válidos.</p>
                `;
                return;
            }

            // Lógica de cálculo simplificada
            let btuBase = area * 600; // 600 BTUs por m² como base

            // Adicionar BTUs por pessoa extra (a primeira pessoa já é contada na base)
            if (pessoas > 1) {
                btuBase += (pessoas - 1) * 600;
            }
            
            // Adicionar BTUs se houver incidência de sol forte
            if (sol === 'sim') {
                btuBase += 800; // Acréscimo para sol da tarde
            }

            // Apresentar o resultado
            resultadoDiv.innerHTML = `
                <h3>Potência recomendada:</h3>
                <p><strong>${btuBase.toLocaleString('pt-BR')} BTU/h</strong></p>
                <p>Recomenda-se um aparelho de ar condicionado com capacidade próxima a este valor.</p>
            `;
        });
    }

    // Rolagem suave para as âncoras do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});