
import { useState } from 'react';
import './volume.css'
import { useRef } from 'react';

function Volume() {

    const [length, setLength] = useState(0)
    const [verticalLength, setVerticalLength] = useState(0)
    const barRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const barStyle = {
        width: `${length}%`
    };

    const VerticalBarStyle = {
        height: `${verticalLength}%`
    };

    const level = (event) => {
        const clickX = event.clientX - 100;
        const barWidth = 500;
        let clickedVolume = Math.round((clickX / barWidth) * 100);
        // Ensure clickedVolume is within valid range (0 to 100)
        clickedVolume = Math.max(0, Math.min(clickedVolume, 100));
        setLength(clickedVolume)
    }

    const verticalLevel = (event) => {
        const clickX = event.clientY - 100;
        const barWidth = 400;
        let clickedVolume = Math.round((clickX / barWidth) * 100);
        // Ensure clickedVolume is within valid range (0 to 100)
        clickedVolume = Math.max(0, Math.min(clickedVolume, 100));
        setVerticalLength(100 - clickedVolume)
    }


    const handleMouseDown = (event) => {
        event.preventDefault();
        setIsDragging(true);
        handleDrag(event);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            handleDrag(event);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleDrag = (event) => {
        const barRect = barRef.current.getBoundingClientRect();
        const clickY = event.clientY - barRect.top;
        const barHeight = barRect.height;
        let draggedVolume = 100 - ((clickY / barHeight) * 100); // Invert for vertical bar

        draggedVolume = Math.max(0, Math.min(draggedVolume, 100));

        if (draggedVolume !== verticalLength) {
            setVerticalLength(draggedVolume);
        }
    };


    return (
        <div className='main'>
            <div className="volume-bar" onClick={(event) => level(event)}>
                <div className={length <75 ? "volume-level" : "high-volume-level"} style={barStyle}><h1>{length}%</h1></div>
            </div>


            {/* <div
                className="vertical-bar"
                onClick={(event) => verticalLevel(event)}
                ref={barRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                <div className='vertical-level' style={VerticalBarStyle}></div>
            </div>
            <h1>{verticalLength}%</h1> */}

        </div>

    )
}

export default Volume;