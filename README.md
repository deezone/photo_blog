# Photo Blog
An exercise to learn Angular from TreeHouse.

###To Start

1. Clone the repository
2. Run `npm install`
3. Start the server `npm run serve`


###Development Notes

- [Angular Documentation](https://angular.io/docs/ts/latest)
- [TypeScript Documentation](http://www.typescriptlang.org/docs/tutorial.html)
- [Angular Components]()
An Angular application is made up of series of Components. A component has a template, styles, and handles business 
logic.
- [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- [Resources](https://angular.io/resources/)

**Component Decorator**
Components are the backbone of an Angular application. The Component Decorator is for defining a component and 
registering it with Angular. Each component must have a selector and a template to be valid. Read the [Component 
Decorator](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html) documentation for more details.

**[Showing component properties with interpolation](https://angular.io/docs/ts/latest/guide/displaying-data.html#!#interpolation)**
The easiest way to display a component property is to bind the property name through interpolation. With interpolation, 
you put the property name in the view template, enclosed in double curly braces: `{{myHero}}`.

**[Type Guard](https://basarat.gitbooks.io/typescript/content/docs/types/typeGuard.html)**
Type Guards allow you to narrow down the type of an object within a conditional block. TypeScript is aware of the usage 
of the JavaScript instanceof and typeof operators. If you use these in a conditional block, TypeScript will understand 
the type of the variable to be different within that conditional block.

**[String Literal Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types)**
String literal types allow you to specify the exact value a string must have. In practice string literal types combine 
nicely with union types, type guards, and type aliases. You can use these features together to get enum-like behavior 
with strings.

**[Barrel](https://angular.io/docs/ts/latest/guide/glossary.html#!#barrel)**
A way to roll up exports from several ES2015 modules into a single convenient ES2015 module. The barrel itself is an 
ES2015 module file that re-exports selected exports of other ES2015 modules.

**[:host selector specification](https://www.w3.org/TR/css-scoping-1/#host-selector)**
Selecting Into the Light: the :host, :host(), and :host-context() pseudo-classes.

**[Angular Documentation for using :host selector](https://angular.io/docs/ts/latest/guide/component-styles.html#!#sts=:host)**
Angular can bundle component styles with components, enabling a more modular design than regular stylesheets.

**[Selecting Into the Light: the :host, :host(), and :host-context() pseudo-classes](https://www.w3.org/TR/css-scoping-1/#host-selector)**

**[Structural Directive (NgIf, NgFor) Documentation](https://angular.io/docs/ts/latest/guide/structural-directives.html)**
Angular has a powerful template engine that lets us easily manipulate the DOM structure of our elements. How Angular 
manipulates the DOM with structural directives and how you can write your own structural directives to do the same 
thing.

**[Attribute Directive (NgClass, NgStyle) Documentation](https://angular.io/docs/ts/latest/guide/attribute-directives.html)**
An Attribute directive changes the appearance or behavior of a DOM element.

**[Template Syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html)**
The Angular application manages what the user sees and can do, achieving this through the interaction of a component 
class instance (the component) and its user-facing template.

Consider the component/template duality based on model-view-controller (MVC) or model-view-viewmodel (MVVM). In Angular, 
the component plays the part of the controller/viewmodel, and the template represents the view.

**[Modules](https://angular.io/docs/ts/latest/api/#!?query=module)**
Index of Angular modules available for addition to an Angual application to add functionality.
