function conversor(strHoras) {

  try {


    let [horas, minutos] = strHoras.split(':').map(Number);

    if (horas < 0 || minutos < 0 || horas > 23 || minutos > 59) {
      throw new Error('Digite uma hora válida!');
    }

    let periodo = horas >= 12 ? 'PM' : 'AM'

    if (horas > 12) {
      horas = horas % 12;
    }

    horas = Math.floor(horas).toString().padStart(2, "0");
    minutos = Math.floor(minutos).toString().padStart(2, "0");

    console.log(`${horas}:${minutos} ${periodo}`);

  } catch (error) {
    console.log(error.message);
  }
}

conversor('22:45');
conversor('9:20');
conversor('00:36');
conversor('12:58');
conversor('12:70');
conversor('24:58');
conversor('7.6:58');
conversor('-9:58');
