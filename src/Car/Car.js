
import { useState } from 'react';
import './car.css'

function Car() {

    const [lights, setLights] = useState(true)
    const [onOff, setOnOff] = useState('OFF')

    const handleLights = () => {
        setLights(prev => !prev)
        if(lights){
            setOnOff("ON")
        }
        else{
            setOnOff("OFF")
        }
    }

    return (

        <>
            <div className='main'>

                <div className='frame'>
                    <div className='top-frame'>
                        <div className='frame-shadow'></div>
                        <div className='frame-shadow-2'></div>
                    </div>
                </div>

                <div className='car-body'>

                    <div className='black-box'>
                        <div className={lights ? "headLight-in" : "headLight-off"}>
                            <div className='headLight-inside'></div>
                            <div className='headLight-inside'></div>
                        </div>
                        <div className='logo'>
                            <div className='logo-left-line'></div>
                            <div className='logo-middle-line'></div>
                            <div className='logo-right-line'></div>
                        </div>
                        <div className={lights ? "headLight-in" : "headLight-off"}>
                            <div className='headLight-inside'></div>
                            <div className='headLight-inside'></div>
                        </div>
                    </div>

                    <div className='top-body'>
                        <div className='top-left-body'></div>
                        <div className='top-center-body'></div>
                        <div className='top-right-body'></div>
                    </div>

                    <hr />

                    <div className='bottom-body'>
                        <div className='bottom-body-box'></div>
                    </div>

                </div>

                <div className='tyres-container'>
                    <div className='tyre-body'></div>
                    <div className='connecting-rod'></div>
                    <div className='tyre-body'></div>
                </div>
                <button onClick={handleLights}>{onOff}</button>
            </div>
            
        </>

    )
}

export default Car;