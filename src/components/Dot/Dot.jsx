import './Dot.scss';

// export const Dot = () => (
//   <div>123</div>
// );



export class Dot {
  static dotsAlive = [];

  constructor(x = 1, y = 1, team = 1) {
    this.x = x;
    this.y = y;
    this.team = team;

    Dot.dotsAlive.push(this);

    
    console.log('🚀 ~ Dot.dotsAlive:', Dot.dotsAlive);
    // d1.insertAdjacentHTML('beforeend', '<div className="dot dot--team1"></div>');
  }
}



// const test = new Dot(1, 1, 1);


// console.log('🚀 ~ Dot.dotsAlive:', Dot.dotsAlive);

// (function() {
  // let d1 = document.getElementById("field");
  // d1.insertAdjacentHTML('beforeend', '<div className="dot dot--team1"></div>');
  // console.log('🚀 ~ d1:', d1);
// })();



// d1.insertAdjacentHTML("beforeend", '<div className="dot dot--team1"></div>');

// const field = document.getElementsByClassName('field');
// field.appendChild(`<div className='dot dot--team1'></div>`);



// document.getElementsByClassName('field').innerHTML = '<ol><li>html data</li></ol>';