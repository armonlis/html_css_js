import { ReactPropTypes } from "react";

export default function Agent(props) {
  const { agentName = 'unknown' } = props;
  const { agentCountry = 'unknown' } = props;
  const { agentImg =  '/src/public/images/no-image.png'} = props;
  const { selected = '' } = props;
  return (
    <div className={ selected ? 'agent agent_selected' : 'agent' }>
      <p className="agent_name">{agentName}</p> 
      <p className="agent_country">{agentCountry}</p>
      <div className="agent_image-container">
        <img className="agent_image" src={agentImg} alt="The agent photo."></img>
      </div>
    </div>
  )
};