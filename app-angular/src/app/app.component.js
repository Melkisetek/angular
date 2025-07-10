"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const componente_en_linea_component_1 = require("./componente-en-linea/componente-en-linea.component");
const nuevo_componente_component_1 = require("./nuevo-componente/nuevo-componente.component");
const interpolacion_component_1 = require("./interpolacion/interpolacion.component");
const padre_component_1 = require("./padre/padre.component");
const hijo_component_1 = require("./hijo/hijo.component");
const mostrar_mensaje_component_1 = require("./mostrar-mensaje/mostrar-mensaje.component");
const replicador_component_1 = require("./replicador/replicador.component");
const saludar_component_1 = require("./saludar/saludar.component");
const componente_if_component_1 = require("./componente-if/componente-if.component");
const agregar_tarea_component_1 = require("./agregar-tarea/agregar-tarea.component");
const componente_for_component_1 = require("./componente-for/componente-for.component");
let AppComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            //se importarn los componentes que se van a usar en el template
            //en este caso, se importan los componentes que se van a usar en el template
            //y se declaran en el array de imports
            //esto es necesario para que Angular los reconozca y los pueda usar
            imports: [router_1.RouterOutlet, componente_en_linea_component_1.ComponenteEnLineaComponent, nuevo_componente_component_1.NuevoComponenteComponent, interpolacion_component_1.InterpolacionComponent, padre_component_1.PadreComponent, hijo_component_1.HijoComponent, mostrar_mensaje_component_1.MostrarMensajeComponent, replicador_component_1.ReplicadorComponent, saludar_component_1.SaludarComponent, componente_if_component_1.ComponenteIfComponent, agregar_tarea_component_1.AgregarTareaComponent, componente_for_component_1.ComponenteForComponent],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppComponent = _classThis = class {
        constructor() {
            this.title = 'Hola mundo desde Angular, 2025';
        }
    };
    __setFunctionName(_classThis, "AppComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppComponent = _classThis;
})();
exports.AppComponent = AppComponent;
