import { Logger } from "@yamato-daiwa/es-extensions";
import { BasicFrontEndLogger } from "@yamato-daiwa/es-extensions/BrowserJS";


Logger.setImplementation(BasicFrontEndLogger);
