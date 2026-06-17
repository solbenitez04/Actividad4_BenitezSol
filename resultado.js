const valoresUrl = window.location.search;
const parametros = new URLSearchParams(valoresUrl);

const contenedor = document.querySelector('#contenedorDatos');

if (parametros.has('nombre')) {
    const nombreUsuario = parametros.get('nombre');
    const emailUsuario = parametros.get('email');
    const edadUsuario = parametros.get('edad');
    const paisUsuario = parametros.get('pais');

    contenedor.innerHTML = `
        <ul>
            <li><strong>Nombre:</strong> ${nombreUsuario}</li>
            <li><strong>Email:</strong> ${emailUsuario}</li>
            <li><strong>Edad:</strong> ${edadUsuario} años</li>
            <li><strong>País:</strong> ${paisUsuario}</li>
        </ul>
    `;
} else {
    contenedor.innerHTML = "<p>No se recibieron datos en la URL.</p>";
}