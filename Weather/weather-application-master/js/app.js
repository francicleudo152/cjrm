const keyApi = "ZWKGzoafM6gsNaDWPzJsOGttq1YPG9lJ";

const getcidadeUrl = (nomeCidade) =>
 `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${keyApi}&q=${nomeCidade}`;

const getcidade = async (nomeCidade) => {
    try {
        const cidadeUrl = getcidadeUrl(nomeCidade)
        const response = await fetch(cidadeUrl);

        if (!response.ok) {
            throw new Error('Não foi possivel obter os dados');
        }
        const [dadosCidade] = await response.json();
        return dadosCidade;
        // console.log(dadosCidade);
    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getcidadeClima = async nomeCidade => {
    try {
        const { Key } = await getcidade(nomeCidade);
        const cidadeclimaUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${keyApi}&language=pt-Br`;
        const response = await fetch(cidadeclimaUrl);

        if (!response.ok) {
            throw new Error('Não foi possivel obter os dados');
        }
        const [dadosCidadeClima] = await response.json();
        debugger
        return dadosCidadeClima;
        // console.log(dadosCidade);
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

// getcidade('São Paulo');
getcidadeClima('São Paulo');

