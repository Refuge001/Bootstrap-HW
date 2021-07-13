import Project from './project';

function Portfolio() {
  return (
    <div className='container col-lg-6 col-md-8'>
      <div className='row'>
        <div className='col'>
          <div className='page-header mt-2'>
            <h2>My Portfolio</h2>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/tigerblood.png`}
          name={'Tigerblood - Coding Video Game'}
          github={'https://github.com/wjutterback/Tigerblood'}
          deployed={'https://tiger-blood.herokuapp.com/'}
        />
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/jwjplusplus.png`}
          name={'Face Scanner'}
          github={'https://github.com/wjutterback/JoyWillJazzPlusPlus'}
          deployed={'https://wjutterback.github.io/JoyWillJazzPlusPlus'}
        />
      </div>
      <div className='row'>
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/blogwitbuddies.png`}
          name={'Blog with Buddies'}
          github={'https://github.com/wjutterback/Blog-With-Buddies'}
          deployed={'https://wills-blog-site.herokuapp.com/'}
        />
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/sermones.png`}
          name={'Sermones - Chat App'}
          github={'https://github.com/wjutterback/Sermones'}
          deployed={'https://sermones.herokuapp.com/'}
        />
      </div>
      <div className='row'>
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/searchthelibrary.png`}
          name={'Search The Library'}
          github={'https://github.com/wjutterback/Search-The-Library'}
          deployed={'https://search-the-library.herokuapp.com/'}
        />
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/employeetracker.png`}
          name={'Employee Tracker - CLI'}
          github={'https://github.com/wjutterback/Blog-With-Buddies'}
          deployed={'https://youtu.be/6SiO8HQaijo'}
        />
      </div>
      <div className='row'>
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/schedule.png`}
          name={'Work Scheduler'}
          github={'https://github.com/wjutterback/Work-Day-Scheduler'}
          deployed={'https://wjutterback.github.io/Work-Day-Scheduler'}
        />
        <Project
          img={`${process.env.PUBLIC_URL}/assets/img/weather.png`}
          name={'Weather App'}
          github={'https://github.com/wjutterback/Weather-Dashboard'}
          deployed={'https://wjutterback.github.io/Weather-Dashboard/'}
        />
      </div>
    </div>
  );
}
export default Portfolio;
