import './Troubleshooting.css';

function Troubleshooting() {

    return (
        <div style={{ padding: '15px' }}>
            <h1 style={{ fontWeight: '600' }}>Dépannage</h1>
            <div className='main-container'>
                <div style={{ textAlign: "center" }}>
                    <svg role="img" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="circle-play" style={{ width: "40px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.7-256L208 329.7V182.3L328.7 256zM212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5s-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88z"></path></svg>
                    <h2 style={{ marginTop: "-3px", }}>Écoute en direct</h2>
                    <p>Vous expérimentez des problèmes à l’écoute de la station sur ce site web ou sur notre application mobile Cogeco Média?</p>
                    <hr />
                </div>

                <div className='bottom-container'>
                    <div className='left-container'>
                        <h3 style={{ marginTop: "0px" }}>Signaler le problème</h3>
                        <p>Aidez-nous à comprendre le contexte dans lequel vous expérimentez un problème en nous donnant quelques informations sur votre appareil.</p>
                        <button style={{ width: "220px", backgroundColor: '#21409a', color: 'white', borderRadius: "24px", fontSize: '1rem', padding: "0.75rem 1rem", fontWeight: "600", cursor: "pointer", border: '0px' }}>Remplir le formulaire  <svg role="img" aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-up-right-from-square" style={{ width: "8%", marginLeft: "3px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path></svg></button>
                    </div>
                    <div className='right-container'>
                        <h5 style={{ marginTop: "0px" }}>Lorsque mon appareil se met en veille, le son coupe.</h5>
                        <p style={{ fontSize: "13px" }}>Votre appareil dispose d’un <span style={{ fontWeight: '700' }}>mode économie d’énergie</span> qui permet de prolonger la durée de vie de la batterie. Toutefois, lorsqu’il est activé, il peut limiter le fonctionnement des applications ouvertes ou lorsque celles-ci roulent en arrière-plan. Vous pouvez changer ce comportement en désactivant le mode économie d’énergie. Voici où se retrouve ce paramètre:</p>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "7%" }}>
                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" style={{ width: "60%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            </div>
                            <div style={{ marginLeft: '15px', width: "90%" }}>
                                <h5 style={{ margin: '0px' }}>iOS</h5>
                                <p style={{ fontSize: "13px", marginTop: "5px" }}>La gestion du mode économie d’énergie varie d’un appareil à l’autre, mais est généralement disponible sous <span style={{ fontWeight: '700' }}>Réglages &gt; Batterie</span> .</p>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "7%" }}>
                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="android" style={{ width: "80%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path></svg>              </div>
                            <div style={{ marginLeft: '15px', width: "90%" }}>
                                <h5 style={{ margin: '0px' }}>Android</h5>
                                <p style={{ fontSize: "13px", marginTop: "5px" }}>La gestion du mode économie d’énergie varie d’un appareil à l’autre, mais est généralement disponible sous<span style={{ fontWeight: '700' }}>Paramètres &gt; Maintenance de l’appareil &gt; Pile</span> .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Troubleshooting;
