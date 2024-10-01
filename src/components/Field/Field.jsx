import { CONFIG } from '../../config';
import { Dot } from '../Dot/Dot';
import './Field.scss';

export const Field = () => {
  
  return (
    <div 
      id="field" 
      style={
        {
          width: CONFIG.fieldWidth,
          height: CONFIG.fieldHeight,
        }
      }
    >
      {/* <div className='dot dot--team1'></div>
      <div className='dot dot--team2'></div> */}
    </div>
  );
}

const test2 = new Dot(200, 200, 2);

// (function () {
//   let d1 = document.getElementById("field");
//   console.log('🚀 ~ d1:', d1);
//   d1.insertAdjacentHTML('beforeend', '<div className="dot dot--team1"></div>');
// })();
