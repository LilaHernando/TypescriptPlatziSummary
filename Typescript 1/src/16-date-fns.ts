//En este archivo vamos a trabajar con una librería que tiene soporte para typescript.
//simplemente instalamos la libreria, hacemos las importaciones necesarias y la utilizamos
//con normalidad.
import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
const str = format(rta, 'yyy/MM/dd');

console.log(str);
