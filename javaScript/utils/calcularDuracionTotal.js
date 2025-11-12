export function calcularDuracionTotal(clases){
    let totalMinutos = 0;

    clases.forEach(clase => {
       
        clase.contenido.forEach(item => {
            const duracion = item.duracion.toLowerCase();

            if(duracion.includes('min')){
                const minutos = parseInt(duracion.replace('min', '').trim());
                totalMinutos += minutos
            }
            else if(duracion.includes('hs')){
                const horas = parseInt(duracion.replace('hs', '').trim());
                totalMinutos += horas * 60;
            }
        });
    });

    const horasTotales = Math.floor(totalMinutos / 60);
    const minutosRestantes = totalMinutos % 60;

    return `${horasTotales} hs ${minutosRestantes} min`;
}