import { ReactPropTypes, SyntheticEvent } from "react";

export default function Agent(props) {
  const { id } = props;
  const { agentName = 'unknown' } = props;
  const { agentCountry = 'unknown' } = props;
  const { agentImg =  '/src/public/images/no-image.png'} = props;
  const { selected = 'false' } = props;
  return (
    <div id={ id } className={ selected ? 'agent agent_selected' : 'agent' }>
      <p className={ selected ? 'agent_name agent_name__selected' : 'agent_name' }>{agentName}</p> 
      <p className='agent_country'>{agentCountry}</p>
      <div className="agent_image-container">
        <img className="agent_image" src={agentImg} alt="The agent photo."></img>
      </div>
      <div className={ selected ? 'agent-perks agent-perks_selected' : 'agent-perks' }>
      </div>
    </div>
  )
};