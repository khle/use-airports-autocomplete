"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAirportsAutocomplete = void 0;
var react_1 = require("react");
var debounce_1 = __importDefault(require("./debounce"));
var fuse_js_1 = __importDefault(require("fuse.js"));
var MIN_LENGTH_SEARCH = 2;
var airports_1 = __importDefault(require("./airports"));
function useAirportsAutocomplete(_a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.debounce, debounce = _c === void 0 ? 200 : _c, _d = _b.defaultValue, defaultValue = _d === void 0 ? "" : _d;
    var _e = (0, react_1.useState)(false), ready = _e[0], setReady = _e[1];
    var _f = (0, react_1.useState)(defaultValue), value = _f[0], setVal = _f[1];
    var _g = (0, react_1.useState)({
        loading: false,
        hasError: false,
        data: [],
    }), suggestions = _g[0], setSuggestions = _g[1];
    var init = (0, react_1.useCallback)(function () {
        setReady(true);
    }, []);
    var clearSuggestions = (0, react_1.useCallback)(function () {
        setSuggestions({ loading: false, hasError: false, data: [] });
    }, []);
    var fetchPredictions = (0, react_1.useCallback)((0, debounce_1.default)(function (val) { return __awaiter(_this, void 0, void 0, function () {
        var airportsData, fuseOptions, fuse, result, airports;
        return __generator(this, function (_a) {
            if (!val || val.length < MIN_LENGTH_SEARCH) {
                clearSuggestions();
                return [2 /*return*/];
            }
            airportsData = airports_1.default.filter(function (a) {
                return (a.city.toLowerCase().includes(val.toLowerCase()) ||
                    a.name.toLowerCase().includes(val.toLowerCase()) ||
                    a.IATA.toLowerCase() === val.toLowerCase()) &&
                    a.IATA !== "\\N";
            });
            fuseOptions = {
                shouldSort: true,
                threshold: 0.4,
                maxPatternLength: 32,
                keys: [
                    {
                        name: "IATA",
                        weight: 0.25,
                    },
                    {
                        name: "name",
                        weight: 0.25,
                    },
                    {
                        name: "city",
                        weight: 0.5,
                    },
                ],
            };
            fuse = new fuse_js_1.default(airportsData, fuseOptions);
            result = fuse.search(val);
            airports = result.map(function (r) {
                return {
                    name: r.item.name,
                    city: r.item.city,
                    country: r.item.country,
                    IATA: r.item.IATA,
                    ICAO: r.item.ICAO,
                    lat: parseFloat(r.item.lat),
                    lon: parseFloat(r.item.lon),
                    timezone: parseInt(r.item.timezone),
                };
            });
            setSuggestions({
                loading: false,
                hasError: false,
                data: airports,
            });
            return [2 /*return*/];
        });
    }); }, debounce), [debounce, clearSuggestions]);
    var setValue = (0, react_1.useCallback)(function (val, shouldFetchData) {
        if (shouldFetchData === void 0) { shouldFetchData = true; }
        setVal(val);
        fetchPredictions(val);
    }, [fetchPredictions]);
    return {
        ready: ready,
        value: value,
        suggestions: suggestions,
        setValue: setValue,
        clearSuggestions: clearSuggestions,
        //clearCache,
        init: init,
    };
}
exports.useAirportsAutocomplete = useAirportsAutocomplete;
exports.default = useAirportsAutocomplete;
