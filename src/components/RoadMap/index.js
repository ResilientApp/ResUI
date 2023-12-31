import React from 'react'
import {ReactComponent as SchoolIcon} from '../../images/milestone-2.svg'
import timelineElements from "./timelineElements"
import "./roadmap.css"
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";

const RoadMap = () => {

  let workIconStyles= {background: "#03B5AA"};

  return (
    <div>
    {/* <div id="pageTitle">
    <h1>Timeline</h1>
    </div> */}
    <VerticalTimeline>
      {
        timelineElements.map(element => {
          //let isWorkIcon = element.icon === "work";
          let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";
          return (
            <VerticalTimelineElement 
            key = {element.key}
            date={element.date}
            dateClassName="date"
            url={element.url}
            iconStyle={workIconStyles}
            icon={<SchoolIcon />}
            >
            {/* iconStyle={isWorkIcon? <WorkIcon/> : <SchoolIcon/>} */}
            <h3 className="vertical-timeline-element-title">
              {element.title}
            </h3>
            <p id="description">{element.description}</p>
            {showButton && (
                <a
                  className={`button ${
                    "schoolButton"
                  }`}
                  href={element.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
            )
        })
        } 
    </VerticalTimeline>
    </div>
  )
}

export default RoadMap