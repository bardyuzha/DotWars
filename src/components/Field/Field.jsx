import { CONFIG } from '../../config';
import { Dots } from '../Dots/Dots';
import './Field.scss';

export const Field = () => (
  <div 
    className="field" 
    style={
      {
        width: CONFIG.fieldWidth,
        height: CONFIG.fieldHeight,
      }
    }
  >
    <div className='dot dot--team1'></div>
    <div className='dot dot--team2'></div>
  </div>
);
