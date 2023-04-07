import React, { FunctionComponent, useLayoutEffect, useRef, useState } from 'react';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutRangeSlider: FunctionComponent<Props> = ({ max, min, step, value, onChange }) => {
    const [ [leftThumbPosition, rightThumbPosition], setThumbPosition] = useState<[number, number]>([0, 0]);
    const [activeThumb, setActiveThumb] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const trackWidth = containerRef.current?.getBoundingClientRect().width || 0;

    useLayoutEffect(() => {
        const currentWidth = containerRef.current?.getBoundingClientRect().width || 0;
        const newCursorPostion = value.map(v => ((v - min) / (max - min)) * currentWidth);

        setThumbPosition(newCursorPostion as [number, number]);
    }, [JSON.stringify(value)]);

    const handleMouseDown = (index: number) => () => {
        setActiveThumb(index);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (activeThumb === null) {
            return;
        }

        const { pageX } = event;
        const { left: trackLeft } = containerRef.current?.getBoundingClientRect() as DOMRect;

        const relativeX = pageX - trackLeft;
        if (trackWidth < relativeX || relativeX <= 0) return null;
        const newValue = Math.round((relativeX / trackWidth) * (max - min) / step) * step;

        const [leftValue, rightValue] = value;

        if (activeThumb === 0) {
            if (newValue < rightValue) {
                onChange([newValue, rightValue]);
            }
        } else {
            if (newValue > leftValue) {
                onChange([leftValue, newValue]);
            }
        }
    };

    const handleMouseUp = () => {
        setActiveThumb(null);
    };


    return (
        <StyledComponent className="layout-range-slider">

            <div
                className="range-container"
                ref={containerRef}
                onMouseMove={handleMouseMove as any}
                onMouseUp={handleMouseUp}
            >
                <div className="range-track" />
                <div
                    className="range-thumb"
                    style={{ left: `${leftThumbPosition}px` }}
                    onMouseDown={handleMouseDown(0)}
                    onMouseUp={handleMouseUp}
                />
                <div
                    className="range-thumb"
                    style={{ left: `${rightThumbPosition}px` }}
                    onMouseDown={handleMouseDown(1)}
                    onMouseUp={handleMouseUp}
                />
            </div>
        </StyledComponent>
    );
};

export default LayoutRangeSlider;
