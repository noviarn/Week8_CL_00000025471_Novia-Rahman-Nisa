import { IonPage, IonContent, IonRow, IonCol, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useRef, useState } from "react";

const NewMemory: React.FC<{path: string; webPath: string}> = () => {
	const [takenPhoto, setTakenPhoto] = useState<{
		path: string;
		preview: string
	}>();

	const takePhotoHandler = async () => {
		const photo = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 80,
			width: 500
		})
	}

	return (
	  	<IonPage>
	  			<IonContent className="ion-padding">
			  		<IonRow className="ion-text-center">
			  			<IonCol>
			  				<div className="image-preview">
			  					<h3>No photo chosen</h3>
			  				</div>
			  				<IonButton fill="clear" onClick={takePhotoHandler}>
			  					<IonIcon slot="start" icon={camera}/>
			  					<IonLabel>Take a photo</IonLabel>
			  				</IonButton>
			  			</IonCol>
			  		</IonRow>
			  		<IonRow className="ion-margin-top">
			  			<IonCol className="ion-text-center">
			  				<IonButton>Add Memory</IonButton>
			  			</IonCol>
			  		</IonRow>
			  	</IonContent>
	  	</IonPage>
	);
};

export default NewMemory;