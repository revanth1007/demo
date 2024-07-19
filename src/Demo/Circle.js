import '../App.css';

function Circle() {

    return (

        <div
            style={{
                margin: '100px',
                height: '50vh',
                width: '25%',
                border: '5px solid red',
                borderRadius: '50%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >

            <div style={{ height: '50%', width: '100%', display: 'flex', borderBottom: '3px solid red', justifyContent: "space-around", alignItems: "center", }}>
                <div style={{ width: '20%', height: '35%', border: '2px solid green', borderRadius: '50%', marginLeft: '20px' }}></div>
                <div style={{ width: '20%', height: '35%', border: '2px solid green', borderRadius: '50%' }}></div>
                <div style={{ width: '20%', height: '35%', border: '2px solid green', borderRadius: '50%', marginRight: "20px" }}></div>
            </div>

            <div style={{ height: '49%', width: '100%', display: 'flex', position: "absolute", }}>
                <div style={{ width: '33%', height: '100%', border: '2px solid green', }}></div>
                <div style={{ width: '34%', height: '100%', border: '2px solid green', }}>
                    <div style={{ borderBottom: '2px solid red', height: '50%', width: '100%' }} ></div>
                    <div style={{ height: '50%', width: '100%', }} ></div>
                </div>
                <div style={{ width: '33%', height: '100%', border: '2px solid green', }}></div>
            </div>
        </div>



        // <div
        //   style={{
        //     height: '100px',
        //     width: '100px',
        //     margin: '50px',
        //     border: '5px solid red',
        //     borderRadius: "0 0 50% 50%",
        //   }}
        // >

        // </div>
    );
}

export default Circle;
