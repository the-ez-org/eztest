"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
var colorette_1 = require("colorette");
var Test = /** @class */ (function () {
    function Test() {
        this.individualStatuses = [];
        this.failedCases = 0;
    }
    Test.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Test.prototype.beforeEveryTest = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Test.prototype.test = function (_a) {
        var id = _a.id, data = _a.data, expected = _a.expected;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/];
            });
        });
    };
    Test.prototype.afterEveryTest = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Test.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, caseData, testResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.onInit()];
                    case 1:
                        _b.sent();
                        _i = 0, _a = this.cases;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        caseData = _a[_i];
                        return [4 /*yield*/, this.beforeEveryTest()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.test(caseData)];
                    case 4:
                        testResult = _b.sent();
                        if (testResult.condition) {
                            this.individualStatuses.push("PASS");
                        }
                        else {
                            this.individualStatuses.push("FAIL");
                            this.failedCases += 1;
                            console.log(colorette_1.bgRed(colorette_1.white("Test Case " + caseData.id + " Failed")), __assign({ result: testResult.result }, caseData));
                        }
                        return [4 /*yield*/, this.afterEveryTest()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [4 /*yield*/, this.onEnd()];
                    case 8:
                        _b.sent();
                        if (this.failedCases > 0) {
                            console.log("❌");
                            console.log(colorette_1.bgRed(colorette_1.bold(colorette_1.white(this.name + " Test Failed"))));
                            console.log(colorette_1.bgBlack(colorette_1.white(this.cases.length - this.failedCases + " Passed, " + this.failedCases + " Failed")));
                        }
                        else {
                            console.log("✔");
                            console.log(colorette_1.bgGreen(colorette_1.bold(colorette_1.white(this.name + " Test Passed"))));
                        }
                        console.log(colorette_1.bgBlack(colorette_1.white(this.individualStatuses.toString() + "\n\n")));
                        return [2 /*return*/];
                }
            });
        });
    };
    Test.prototype.onEnd = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=index.js.map