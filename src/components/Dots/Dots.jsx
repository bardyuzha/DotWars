import './Dots.scss';

// export const Dot = () => (
//   <div>123</div>
// );

class Dot {
  static dotsAlive = [];

  constructor(startX = 1, startY = 1, team = 1) {
    this.startX = startX;
    this.startY = startY;
    this.team = team;
  }
}

// const test = new Dot(200, 200, 1);


// const field = document.getElementsByClassName('field');
// field.appendChild(`<div className='dot dot--team1'></div>`);



// document.getElementsByClassName('field').innerHTML = '<ol><li>html data</li></ol>';