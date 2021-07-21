# Repro for issue 'Nuxt compiler ignores the "exports" field of dependencies "package.json"s'

[Issue](https://github.com/nuxt/nuxt.js/issues/9544)

## Experiment flow

1. Install dependencies as usual (`npm i`)
2. Run `npm run dev` (it will delegate the incremental building to `nuxt`)

You will see below error:

```
These dependencies were not found:

* @yamato-daiwa/es-extensions in ./DependenciesInjection/DependenciesInjector.ts, ./NuxtPlugins/LoggerNuxtPlugin.ts
* @yamato-daiwa/es-extensions/BrowserJS in ./NuxtPlugins/LoggerNuxtPlugin.ts
```

3. Let's confirm that plain `ts-node` can compile and rut it. Run each of two below commands:

```
ts-node DependenciesInjection/ApplicationDependencies.ts
```

```
ts-node NuxtPlugins/LoggerNuxtPlugin.ts
```

No error expected.


Even if to add `"main": "./Distributable/index.js"` to `package.json` of `@yamato-daiwa/es-extensions` and it will be found,
the other file `@yamato-daiwa/es-extensions/BrowserJS` is still required too.

The multiple distributable files **must** be the supported scenario so even we run away from this problem this time,
it will return again in the future projects.
