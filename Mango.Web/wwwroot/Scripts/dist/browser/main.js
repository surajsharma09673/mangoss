import {
  BrowserModule,
  DomRendererFactory2,
  RouterModule,
  RouterOutlet,
  ToastrModule,
  platformBrowser
} from "./chunk-4V623VH6.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  DOCUMENT,
  Injectable,
  NgZone,
  RendererFactory2,
  RuntimeError,
  enableProdMode,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵinvalidFactory
} from "./chunk-NDXHV5NK.js";

// src/app/app-routing.module.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-7HQCSKY4.js").then((m) => m.HomePageModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./chunk-HSNGP4MG.js").then((m) => m.AdminModule)
  }
  // Add other routes as needed
];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes, { useHash: true }), RouterModule] });
var AppRoutingModule = _AppRoutingModule;

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "angularproject";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 11 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-VBIOLO3C.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  provideAnimationsAsync()
], imports: [
  BrowserModule,
  AppRoutingModule,
  ToastrModule.forRoot()
] });
var AppModule = _AppModule;

// src/app/environments/environment.prod.ts
var environment = {
  production: true
};

// src/main.ts
if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.2.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
