import { IonPage, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import { Directory, Filesystem } from '@capacitor/filesystem';

const GoodMemories: React.FC = () => {
  return (
  	<IonPage>
  		<IonFab vertical="bottom" horizontal="end" slot="fixed">
        	<IonFabButton href="/new-memory">
            	<IonIcon icon={add} />
          	</IonFabButton>
        </IonFab>
  	</IonPage>
  );
};

export default GoodMemories;