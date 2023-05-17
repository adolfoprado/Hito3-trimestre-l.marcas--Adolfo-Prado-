const tabla = document.querySelector('#lista-comunidad tbody');

function cargarBase() {
    const url = 'https://www.el-tiempo.net/api/json/v2/municipios';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(url => {
            console.log(url);
            url.forEach(url => {
                const row = document.createElement('tr');
                row.innerHTML +=` 
                    <td>${url.CODIGOINE}</td>
                    <td>${url.ID_REL}</td>
                    <td>${url.COD_GEO}</td>
                    <td>${url.CODPROV}</td>
                    <td>${url.NOMBRE_PROVINCIA}</td>
                    <td>${url.NOMBRE}</td>
                    <td>${url.POBLACION_MUNI}</td>
                    <td>${url.SUPERFICIE}</td>
                    <td>${url.PERIMETRO}</td>
                    <td>${url.CODIGOINE_CAPITAL}</td>
                    <td>${url.NOMBRE_CAPITAL}</td>
                    <td>${url.POBLACION_CAPITAL}</td>
                    <td>${url.HOJA_MTN25}</td>
                    <td>${url.LONGITUD_ETRS89_REGCAN95}</td>
                    <td>${url.LATITUD_ETRS89_REGCAN95}</td>
                    <td>${url.ORIGEN_COORD}</td>
                    <td>${url.ALTITUD}</td>
                    <td>${url.ORIGEN_ALTITUD}</td>
                    <td>${url.DISCREPANTE_INE}</td>
                    `;
                tabla.appendChild(row);
            });
        })
        .catch(error => console.log('Error encontrado : ' + error.message));
}
cargarBase();