import './mobile.css'

function Mobile() {
    return (
        <div className="frame">
            <div className='top'>
                <div className='camera'></div>
                <div className='long-line'></div>
            </div>
            <div className='middle'>
                <div className='mid-ribbon'></div>
                <div className='mid-header'>
                    <h2>&#123;<span style={{ color: '#48c248' }}>▶</span>&#125;</h2>
                    <div className='mid-header-two'>
                        <h2>🗘</h2>
                        <h2>🖂</h2>
                        <h4 style={{ marginTop: '25px' }}>👨🏻‍💼</h4>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
            <div className='bottom'>
                <div className='long-line' style={{ margin: 'auto' }}></div>
            </div>
        </div>
    )
}

export default Mobile;