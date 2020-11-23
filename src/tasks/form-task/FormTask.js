import React from 'react';
import { FormTaskComplete } from './FormTaskComplete';
import img from './assets/form-goal.png';

export const FormTask = () => {
    return (
        <div>
            <p>For this task you need to implement the form shown in the image below the logic for saving the below (<a href={img} target="_blank" rel="noopener noreferrer">{img}</a>) as well as the following validation rules:</p>
            <ul>
                <li>First Name and Last Name are mandatory fields.</li>
                <li>User Inactivity Date is mandatory ONLY if the User Type is set to "Inactive".</li>
                <li>User Inactivity Date value must have the format <code>YYYY-MM-DD</code> (This format should also be configurable).</li>
                <li>User Inactivity Date is only valid if it contains a date that is in the past.</li>
                <li>Validation messages should appear if a field is invalid and was touched.</li>
            </ul>

            <p>Additional Requirements</p>
            <ul>
                <li>The task should be implemented inside the component found at: <code>/src/tasks/form-task/FormTaskComplete/FormTaskComplete.js</code>.</li>
                <li>When submitting the form, you should use the <code>saveUserForm</code> function found in <code>/src/tasks/form-task/FormTaskComplete/form-api.js</code>.</li>
                <li>You may create as many sub-components as you deem necessary.</li>
                <li>When styling the form, feel free to use CSS, SCSS, React-JSS, or other.</li>
                <li>Feel free to include any UI/UX improvements for the form.</li>
                <li><strong>Do not use any 3rd party form libraries to complete this task.</strong></li>
                <li><strong>Testing is required for this task.</strong> The testing-library has been included in this project, but please feel free to use any other testing tools (such as enzyme)</li>
            </ul>

            <hr />

            <div>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: 'calc(50% - 1px)', height: 435, borderRight: '1px solid grey', padding: 10 }}>
                        <FormTaskComplete />
                    </div>
                    <div style={{ width: '50%', height: 435, padding: 10 }}>
                        <img src={img} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
