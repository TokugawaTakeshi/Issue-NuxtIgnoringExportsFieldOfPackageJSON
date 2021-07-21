import ApplicationDependencies from "~/DependenciesInjection/ApplicationDependencies";

import {
  Logger,
  ClassRequiredInitializationHasNotBeenExecutedError,
  isNull
} from "@yamato-daiwa/es-extensions";


export default abstract class DependenciesInjector {

  private static dependencies: ApplicationDependencies | null = null;


  public static setDependencies(dependencies: ApplicationDependencies): void {
    DependenciesInjector.dependencies = dependencies;
  }


  private static getDependencies(): ApplicationDependencies {

    if (isNull(DependenciesInjector.dependencies)) {
      Logger.throwErrorAndLog({
        errorInstance: new ClassRequiredInitializationHasNotBeenExecutedError({
          className: "DependenciesInjector",
          initializingMethodName: "setDependencies"
        }),
        title: ClassRequiredInitializationHasNotBeenExecutedError.DEFAULT_TITLE,
        occurrenceLocation: "DependenciesInjector.<dependency> -> " +
            "DependenciesInjector.getDependencies(parametersObject)"
      });
    }

    return DependenciesInjector.dependencies;
  }


  public static get gateways(): ApplicationDependencies.Gateways {
    return DependenciesInjector.getDependencies().gateways;
  }
}
