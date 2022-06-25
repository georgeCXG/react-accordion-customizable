import React, { useEffect, useRef, useState } from 'react';

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
    toggleOpen?(): void;
}

export const AccordionItem = (props: AccordionItemProps) => {
    const {
        label,
        labelPosition = 'start',
        labelReverse = false,
        iconsLeft,
        iconsRight,
        iconSize = 20,
        secondaryIcon,
        removeDefaultIcon = false,
        removeAnimation = false,
        transitionAnimation = 200,
        removeAnimationIcon = false,
        children,
        isOpen = false,
        toggleOpen,
        style
    } = props;

    const [positionContent, setPositionContent] = useState('space-between');
    const [positionReverse, setPositionReverse] = useState('row');

    // Align ca justify
    useEffect(() => {
        labelPosition === 'start' && setPositionContent('flex-start');

        labelPosition === 'end' && setPositionContent('flex-end');

        labelPosition === 'between' && setPositionContent('space-between');

        labelPosition === 'center' && setPositionContent('center');
    }, [labelPosition]);

    // Align ca flex direction
    useEffect(() => {
        if (labelReverse === true) {
            setPositionReverse('row-reverse');
        } else {
            setPositionReverse('row');
        }
    }, [labelReverse]);

    const _styles = {
        display: 'flex',
        flexDirection: positionReverse,
        justifyContent: positionContent,
        alignItems: 'center',
        cursor: 'pointer',
        columnGap: '8px',
        borderBottom: '1px solid',
        borderColor: 'rgba(209,213,219,1)',
        width: '100%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        userSelect: 'none',
        ...style
    } as React.CSSProperties;

    const childRef = useRef<HTMLInputElement>(null);

    const _stylesSecondChildren = {
        overflow: isOpen ? 'auto' : 'hidden',
        height: isOpen ? childRef?.current?.clientHeight + 'px' : '0px',
        transition: removeAnimation ? 'none' : `${transitionAnimation ? transitionAnimation + 'ms' : '300ms'} ease`
    };

    const _stylesIcon = {
        width: iconSize ? iconSize + 'px' : '15px',
        height: iconSize ? iconSize + 'px' : '15px',
        transition: removeAnimationIcon ? 'none' : `transform ${transitionAnimation ? Number(transitionAnimation) - Number(50) + 'ms' : '250ms'} ease`,
        transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'
    };

    return (
        <>
            <div {...props} style={_styles} onClick={() => toggleOpen?.()}>
                {secondaryIcon}
                {iconsLeft?.map((i) => i)}
                {label}
                {!removeDefaultIcon && (
                    <svg style={_stylesIcon} className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
                        <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" />
                    </svg>
                )}
                {iconsRight?.map((i) => i)}
            </div>
            <div style={_stylesSecondChildren}>
                <div ref={childRef}>{children}</div>
            </div>
        </>
    );
};

interface AccordionProps {
    children: React.ReactNode;
    multipleOpen: boolean;
    onChangeStatus?(state: Array<object>): void;
    initialOpen: Array<Number>;
}

interface state {
    index: Number;
    isOpen: boolean;
}

export const Accordion = (props: AccordionProps) => {
    const { children, multipleOpen, onChangeStatus, initialOpen } = props;

    const [state, setState] = useState<state[]>([]);

    useEffect(() => {
        const arr = [
            ...Array((children as React.ReactNode[]).length)
                .fill(0)
                .map((x, index) => ({
                    index: index,
                    isOpen: initialOpen ? (initialOpen?.includes(index) ? true : false) : false
                }))
        ];

        setState(arr);
    }, []);

    // Toggle only one
    const toggleOpenOnlyOne = (n: number) => {
        setState(
            [...state].map((obj) => {
                if (obj.index === n) {
                    return {
                        ...obj,
                        isOpen: !state[n].isOpen
                    };
                } else {
                    return {
                        ...obj,
                        isOpen: false
                    };
                }
            })
        );
    };

    // Togle multiple
    const toggleOpenMultiple = (n: number) => {
        setState(
            [...state].map((obj) => {
                if (obj.index === n) {
                    return {
                        ...obj,
                        isOpen: !state[n].isOpen
                    };
                } else return obj;
            })
        );
    };

    const RenderMainComponent = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                toggleOpen: () => (multipleOpen ? toggleOpenMultiple(index) : toggleOpenOnlyOne(index)),
                isOpen: state[index]?.isOpen
            });
        }
        return child;
    });

    useEffect(() => {
        if (state.length !== 0) {
            onChangeStatus?.(state);
        }
    }, [state]);

    return <>{RenderMainComponent}</>;
};

Accordion.Item = AccordionItem;
