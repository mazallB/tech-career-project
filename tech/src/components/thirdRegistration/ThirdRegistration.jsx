
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './ThirdRegistration.css';
import { Button, Input} from 'antd';
import SelectionInput from '../selectionInput/SelectionInput'






 export default function ThirdRegistration() {
    return (
        <div className="step-3-btns">
            <br />
        
            <div className="third-step-btn">
                <label className="date" >Date of course</label>
                <Input type="date" className="course-date" />

                <label htmlfor="languages"  className="code-languages">Code languages</label>
                <SelectionInput/>
                {/* <select name="languages" id="languages">
                    <option value="html">Html5 </option>
                    <option value="css">Css</option>
                    <option value="java-script">Java-Script</option>
                    <option value="react">React</option>

                </select> */}
                {/* <Input type="text" className="languages"/> */}

                <label className="about-you">Free text about yourself</label>
                <textarea className="about-you"/>
            </div>

            <div className="third-registration-form">
                <span className="headlin-third-registration-form">Links to SN</span>
                <label></label> 
                <Input type="text" className="facebook" placeholder="Facebook"/>
                <label></label>
                <Input type="text" className="github" placeholder="Github"/>
                <label></label>
                <Input type="text" className="linkdin" placeholder="Linkdin"/>
                <Button type="primary" className="third-ok-btn">Ok</Button>
            </div>

            <br />
        </div>

    )}



                         

                       
                        
                   
                
               
         
      
    

 
   
