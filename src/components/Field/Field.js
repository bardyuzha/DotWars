import { CONFIG } from '../../config';
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
    Field
  </div>
);
