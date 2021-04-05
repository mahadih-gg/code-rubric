import React from 'react';
import './Documentation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faGrinAlt } from '@fortawesome/free-solid-svg-icons'

const Documentation = () => {
    return (
        <div className="container pb-5">
            <div className="doc-header w-md-75 w-sm-100 py-3">
                <h1 className="text-center"><span className="color-secondary">code</span><span className="color-primary">rubric</span> Documentation</h1>
            </div>
            <div className="doc-body">
                <div className="instruction p-3 w-md-50 w-sm-100">
                    <h1 className="color-secondary">Instruction</h1>
                    <p>Each of our packages is very tedious and time consuming to install separately. So I have come up with an easy way for you through the <span className="color-secondary">code</span> <span className="color-primary">rubric</span>.</p>
                </div>
                <div className="procedure p-3">
                    <h1 className="color-primary">How it is work</h1>
                    <p>It's really siple to use.</p>
                    <p><span className="pr-3"><FontAwesomeIcon icon={faHandPointRight} /></span> First of all you just select your package what you want to install.</p>
                    <p><span className="pr-3"><FontAwesomeIcon icon={faHandPointRight} /></span> Then click the copy button for copy the clipboard.</p>
                    <p><span className="pr-3"><FontAwesomeIcon icon={faHandPointRight} /></span> And finally paste the copied code on your Terminal and click enter.</p>
                    <p><span className="pr-3"><FontAwesomeIcon icon={faHandPointRight} /></span> Then everything will be installed on your project</p>
                    <p>That's it. See! as simple as that. <span className="pl-1"><FontAwesomeIcon icon={faGrinAlt} /></span></p>
                </div>
            </div>
        </div>
    );
};

export default Documentation;