# ecore-typescript

CrossEcore is a framework for model-based software engineering targeting multiple platforms.
From a platform-independent class model (i.e. an Ecore model), source code for multiple platforms like C#, TypeScript, JavaScript and Swift is generated.
Derived attributes, constraints for model validation and operation bodies can be expressed in the [Object Constraint Language (OCL)](http://www.omg.org/spec/OCL/About-OCL/).
CrossEcore comes with a runtime library for every target platform that implements the Ecore and OCL API.
The Ecore API provides many of the features that are known from the [Eclipse Modeling Framework](https://www.eclipse.org/modeling/emf/), e.g., persistence, reflection, notifications, switches, factories, referential integrity and validation.
With the aid of an OCL Compiler, OCL expressions are translated to equivalent expressions of the target programming language.
CrossEcore’s APIs can be used across platforms almost consistently.

This package implements the Ecore and OCL API in TypeScript/JavaScript.
You need this package (1) when you have generated TypeScript/JavaScript code from your own custom Ecore model as it depends on this package or (2) when you want to create Ecore models programmatically.

Java developers that are familiar with the Eclipse Modeling Framework will note that this package corresponds to the original Java package org.eclipse.emf.ecore.

You can either use your TypeScript code to realize a web browser or node.js application.
CrossEcore's code generator creates TypeScript classes.
The typescript compiler translates the classes into JavaScript modules.
Modules have their own namespace and scope and avoid the pollution of the global namespace.
Many JavaScript build tools and packaging tools that require the use of modules.
These build tools are integrated with optimizers and obfuscators.
There are differnt kinds of module formats.
Usually you use commonJs format for node.js applications.
For web applications, you can use the Asynchronous Module Format (AMD).
If you are using AMD, you need a module loader like requireJs or systemJs.
The module loader lazily loads modules and their dependencies on demand and automatically.

## Browser Tutorial

Let's say you want to generate TypeScript from MyPackage.ecore.
The code generator creates a package folder with your TypeScript files.
This package has a dependency to the TypeScript ecore package and is required for the reflection API and base class implementations, e.g., BasicEObjectImpl.ts.
This means you need to include both mypackage and ecore in your TypeScript application.
You can install the ecore package via npm: ``npm install --save crossecore``

```json
{
  "compilerOptions": {
    "module": "amd",
    "target": "es5",
    "sourceMap": false,
    "baseUrl": ".",
    "paths": {
      "Ecore": ["node_modules/crossecore/dist"]
    }
  },
  "exclude": [
    "node_modules"
  ]
}
```

### Requirejs

Install requirejs via npm: ``npm install --save requirejs``.  
Also install the requirejs TypeScript definitions: ``npm install --save @types/requirejs``

```typescript
requirejs.config({

    baseUrl: '.',
    paths: {
        ecore: '../node_modules/crossecore/dist'
    }
});
```

```typescript
requirejs(["uml/UmlFactoryImpl"], function(UmlFactoryImpl) {

    var c = UmlFactoryImpl.eINSTANCE.createClass();
});
```
