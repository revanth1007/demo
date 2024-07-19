
import './popUp.css';
import icon from './Icon.png';

function PopUp() {
    return (
        <div className='qq'>
            <div className="main-box">
                <div className="top">
                    <img src={icon} />
                    <h3 className='heading'>Error Pop-up</h3>
                </div>
                <div className='bottom'>
                    <p>System Error: Cannot play content</p>
                    <button>Dismiss</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp