"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = exports.AccordionItem = void 0;
const react_1 = __importStar(require("react"));
const AccordionItem = (props) => {
    var _a;
    const { label, labelPosition = 'start', labelReverse = false, iconsLeft, iconsRight, iconSize = 20, secondaryIcon, removeDefaultIcon = false, removeAnimation = false, transitionAnimation = 200, removeAnimationIcon = false, children, isOpen = false, toggleOpen, style } = props;
    const [positionContent, setPositionContent] = (0, react_1.useState)('space-between');
    const [positionReverse, setPositionReverse] = (0, react_1.useState)('row');
    // Align ca justify
    (0, react_1.useEffect)(() => {
        labelPosition === 'start' && setPositionContent('flex-start');
        labelPosition === 'end' && setPositionContent('flex-end');
        labelPosition === 'between' && setPositionContent('space-between');
        labelPosition === 'center' && setPositionContent('center');
    }, [labelPosition]);
    // Align ca flex direction
    (0, react_1.useEffect)(() => {
        if (labelReverse === true) {
            setPositionReverse('row-reverse');
        }
        else {
            setPositionReverse('row');
        }
    }, [labelReverse]);
    const _styles = Object.assign({ display: 'flex', flexDirection: positionReverse, justifyContent: positionContent, alignItems: 'center', cursor: 'pointer', columnGap: '8px', borderBottom: '1px solid', borderColor: 'rgba(209,213,219,1)', width: '100%', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', userSelect: 'none' }, style);
    const childRef = (0, react_1.useRef)(null);
    const _stylesSecondChildren = {
        overflow: isOpen ? 'auto' : 'hidden',
        height: isOpen ? ((_a = childRef === null || childRef === void 0 ? void 0 : childRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) + 'px' : '0px',
        transition: removeAnimation ? 'none' : `${transitionAnimation ? transitionAnimation + 'ms' : '300ms'} ease`
    };
    const _stylesIcon = {
        width: iconSize ? iconSize + 'px' : '15px',
        height: iconSize ? iconSize + 'px' : '15px',
        transition: removeAnimationIcon ? 'none' : `transform ${transitionAnimation ? Number(transitionAnimation) - Number(50) + 'ms' : '250ms'} ease`,
        transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", Object.assign({}, props, { style: _styles, onClick: () => toggleOpen === null || toggleOpen === void 0 ? void 0 : toggleOpen() }),
            secondaryIcon, iconsLeft === null || iconsLeft === void 0 ? void 0 :
            iconsLeft.map((i) => i),
            label,
            !removeDefaultIcon && (react_1.default.createElement("svg", { style: _stylesIcon, className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 512 512" },
                react_1.default.createElement("path", { d: "M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" }))), iconsRight === null || iconsRight === void 0 ? void 0 :
            iconsRight.map((i) => i)),
        react_1.default.createElement("div", { style: _stylesSecondChildren },
            react_1.default.createElement("div", { ref: childRef }, children))));
};
exports.AccordionItem = AccordionItem;
const Accordion = (props) => {
    const { children, multipleOpen, onChangeStatus, initialOpen } = props;
    const [state, setState] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const arr = [
            ...Array(children.length)
                .fill(0)
                .map((x, index) => ({
                index: index,
                isOpen: initialOpen ? ((initialOpen === null || initialOpen === void 0 ? void 0 : initialOpen.includes(index)) ? true : false) : false
            }))
        ];
        setState(arr);
    }, []);
    // Toggle only one
    const toggleOpenOnlyOne = (n) => {
        setState([...state].map((obj) => {
            if (obj.index === n) {
                return Object.assign(Object.assign({}, obj), { isOpen: !state[n].isOpen });
            }
            else {
                return Object.assign(Object.assign({}, obj), { isOpen: false });
            }
        }));
    };
    // Togle multiple
    const toggleOpenMultiple = (n) => {
        setState([...state].map((obj) => {
            if (obj.index === n) {
                return Object.assign(Object.assign({}, obj), { isOpen: !state[n].isOpen });
            }
            else
                return obj;
        }));
    };
    const RenderMainComponent = react_1.default.Children.map(children, (child, index) => {
        var _a;
        if (react_1.default.isValidElement(child)) {
            return react_1.default.cloneElement(child, {
                toggleOpen: () => (multipleOpen ? toggleOpenMultiple(index) : toggleOpenOnlyOne(index)),
                isOpen: (_a = state[index]) === null || _a === void 0 ? void 0 : _a.isOpen
            });
        }
        return child;
    });
    (0, react_1.useEffect)(() => {
        if (state.length !== 0) {
            onChangeStatus === null || onChangeStatus === void 0 ? void 0 : onChangeStatus(state);
        }
    }, [state]);
    return react_1.default.createElement(react_1.default.Fragment, null, RenderMainComponent);
};
exports.Accordion = Accordion;
exports.Accordion.Item = exports.AccordionItem;
//# sourceMappingURL=Accordion.js.map