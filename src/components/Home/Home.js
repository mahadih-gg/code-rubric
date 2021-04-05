import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faCopy, faTerminal } from '@fortawesome/free-solid-svg-icons'
import CopyToClipboard from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [installCommand, setInstallCommand] = useState([]);
    const [yarn, setYarn] = useState(false)
    const [inputValue, setInputValue] = useState('');
    let ref = useRef();

    useEffect(() => {
        setInputValue(ref.current.value);
    }, [installCommand])

    const frontEnd = [
        'Bootstrap',
        'React-Bootstrap',
        'React-Router',
        '@Material-UI/Core',
        'Firebase',
        'React-Hook-Form',
        'Axios'
    ];
    const backEnd = [
        'Express',
        'Body-Parser',
        'Cors',
        'MongoDB',
        'Nodemon',
        'Dotenv'
    ]
    const handleInstall = (id) => {
        const packageId = id.toLowerCase();

        let command = installCommand.indexOf(packageId)
        if (command === -1) {
            setInstallCommand([...installCommand, packageId])
        }
        else {
            let remainCommand = [...installCommand];
            remainCommand.splice(command, 1)
            setInstallCommand(remainCommand)
        }
    }

    const notify = () => {
        toast.success("Copied!")
    };

    return (
        <div className="home-main pb-3">
            <ToastContainer />
            <div className="web-intro text-center">
                <img src={logo} className="img-fluid" height="" alt="" />
                <p>Welcome to Code Rubric. Go to <FontAwesomeIcon icon={faHandPointRight} /> <Link to="/documentation">Documentation</Link></p>
            </div>
            <div className="home-body pb-5">
                <div className="row package-selector">
                    <button className={`col-6 py-3 border-right package-npm ${!yarn ? 'active' : ''}`} onClick={() => setYarn(false)}>npm</button>
                    <button className={`col-6 py-3 package-yarn ${yarn ? 'active' : ''}`} onClick={() => setYarn(true)}>yarn</button>
                </div>

                <div>
                    <h3 className="m-4"><FontAwesomeIcon icon={faTerminal} /> Front-end</h3>

                    <div className="wrapper d-flex">
                        {frontEnd.map(front => {
                            return (
                                <div className="custom-control custom-checkbox iconSelect ml-2" key={front}>
                                    <input type="checkbox" id={front} name="customCheck" className="custom-control-input" />
                                    <label className="custom-control-label" onClick={() => {
                                        handleInstall(front);
                                    }} htmlFor={front}>
                                        <div className="mt-1">{front}</div>
                                    </label>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>

                <div>
                    <h3 className="m-4"><FontAwesomeIcon icon={faTerminal} /> Back-end</h3>

                    <div className="wrapper d-flex">
                        {backEnd.map(back => {
                            return (
                                <div className="custom-control custom-checkbox iconSelect ml-2" key={back}>
                                    <input type="checkbox" id={back} name="customCheck" className="custom-control-input" />
                                    <label className="custom-control-label" onClick={() => {
                                        handleInstall(back);
                                    }} htmlFor={back}>
                                        <div className="mt-1">{back}</div>
                                    </label>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="copy-box m-3">
                        <div className="input-group w-75 command-show">
                            <input type="text" className="form-control" value={
                                yarn ? `yarn add ${installCommand.join(' ')}`
                                    : `npm install ${installCommand.join(' ')}`
                            } ref={ref} onChange={inputValue} disabled />
                            <div className="input-group-append">
                                <CopyToClipboard text={inputValue}>
                                    <button className="btn btn-outline-secondary" type="button" onClick={notify}><FontAwesomeIcon icon={faCopy} /></button>
                                </CopyToClipboard>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Home;