import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import GoodMemories from './pages/GoodMemories';
import BadMemories from './pages/BadMemories';
import NewMemory from './pages/NewMemory';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { sadOutline, happyOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
          <IonRouterOutlet>
              <Route path="/" component={GoodMemories} />
              <Redirect to="/good-memories" />
              <Route exact path="/bad-memories" component={BadMemories} />
              <Route exact path="/new-memory" component={NewMemory} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
              <IonTabButton tab="good-memories" href="/good-memories">
                  <IonIcon icon={happyOutline} />
                  <IonLabel>Good Memories</IonLabel>
              </IonTabButton>
              <IonTabButton tab="bad-memories" href="/bad-memories">
                  <IonIcon icon={sadOutline} />
                  <IonLabel>Bad Memories</IonLabel>
              </IonTabButton>
          </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
