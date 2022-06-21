import React from 'react';
interface AccordionItemProps {
    label: string | JSX.Element;
    labelPosition: 'start' | 'end' | 'between' | 'between-reverse' | 'center';
    labelReverse: boolean;
    iconsLeft: Array<JSX.Element>;
    iconsRight: Array<JSX.Element>;
    iconSize: Number;
    secondaryIcon: JSX.Element;
    removeDefaultIcon: boolean;
    removeAnimation: boolean;
    removeAnimationIcon: boolean;
    transitionAnimation: Number;
    children: React.ReactNode;
    style: React.CSSProperties;
    isOpen: boolean;
    toggleOpen: () => void;
}
export declare const AccordionItem: (props: AccordionItemProps) => JSX.Element;
interface AccordionProps {
    children: React.ReactNode;
    multipleOpen: boolean;
    onChangeStatus: (status: Array<object>) => void;
    initialOpen: Array<Number>;
}
export declare const Accordion: {
    (props: AccordionProps): JSX.Element;
    Item: (props: AccordionItemProps) => JSX.Element;
};
export {};
