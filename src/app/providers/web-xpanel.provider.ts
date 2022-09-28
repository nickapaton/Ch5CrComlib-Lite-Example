import { APP_INITIALIZER } from "@angular/core";
import WebXPanel, { WebXPanelConfigParams, isActive } from "@crestron/ch5-webxpanel";

//Web Xpanel Configuration - Set connection info and IPID here
const xpanelConfig: Partial<WebXPanelConfigParams> = {
    ipId: '0x03'
  }


//DO NOT MODIFY ANYTHING BELOW THIS LINE
const webXPanelFactory = () => () => {
    if(isActive) {
      WebXPanel.initialize(xpanelConfig);
    }
}
export const webXpanelProvider = {
  provide: APP_INITIALIZER,
  useFactory: webXPanelFactory,
  multi: true
}