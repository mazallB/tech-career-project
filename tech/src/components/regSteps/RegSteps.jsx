import React from 'react';
import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import PasswordChange from '../passwordChange/PasswordChange'
import SecondRegistration from '../secondRegistration/SecondRegistration'
import ThirdRegistration from '../thirdRegistration/ThirdRegistration';
import Greeting from '../Greeting/greeting';




const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <PasswordChange/>,
  },
  {
    title: 'Second',
    content: <SecondRegistration/>,
  },
  {
    title: 'Last',
    content: <ThirdRegistration/> ,
  },
];

const RegSteps = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (

    <>
    <Greeting/>
<br/>
<br/>

      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title}/>
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>

      <div className="steps-action">
      {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
       
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
          
        )}
        

{current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
      </div>
    </>
  );
};

export default RegSteps