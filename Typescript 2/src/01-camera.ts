//Capacitor es una libreria que usaremos para interactuar con la cámara de un dispositivo.
//trabajaremos con dos ENUM, CameraDirection y CameraResultType.

import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    //de no ser por los ENUM, sería mas facil cometer errores al adjudicar valores a las propiedades.
    //en este caso, con solo llamar a CameraDirection se nos informa que sus opciones son Front o Rear.
    direction: CameraDirection.Front,
  });
};
