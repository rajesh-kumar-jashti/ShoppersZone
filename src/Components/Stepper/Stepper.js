import React from 'react'
import { useState } from 'react';
import PageOne from './PageOne/PageOne';
import PageThree from './PageThree/PageThree';
import PageTwo from './PageTwo/PageTwo';
import PageFour from './PageFour/PageFour';
import MultiStepProgressBar from './MutliStepper/MultiStepper'

const Stepper = () => {

    const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="stepper" style={{marginTop: "60px"}}>
      {/* <Logo /> */}
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber}/>
      {
        {
          pageone: <PageOne onButtonClick={nextPage} />,
          pagetwo: <PageTwo onButtonClick={nextPage} />,
          pagethree: <PageThree onButtonClick={nextPage} />,
          pagefour: <PageFour />,
        }[page]
      }
    </div>
  )
}

export default Stepper
