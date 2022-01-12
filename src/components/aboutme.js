function AboutMe() {
  return (
    <div className='container col-lg-6'>
      <div className='row'>
        <div className='col'>
          <div className='page-header mt-2'>
            <h2>About Me</h2>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-md-12 col-sm-10 col-xs-6 col-lg-12 justify-content-center'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/DSC_2349.JPG`}
            className='box-img float-left'
            style={{ height: '150px', marginRight: '15px' }}
            alt='Handsome man swimming in a cave'
          />
          <p>
            How's it going? I'm glad you're here. Here's a little about me: I'm
            married to a wonderful woman named Lauren. I really enjoy exploring
            caves, which I've done all over the country. I was born in Lubbock,
            TX, but I've lived in California, Mississippi, Oregon, and Missouri.
            I'm currently living in Houston, TX which is a great place if you've
            never been. My hobbies include reading, computer gaming, and
            juggling. I joined the Marines when I was 18 and met a lot of great
            people; it's where I met my best friend. After the military I
            attended Texas Tech University where I majored in Classical Language
            and Literature.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 col-sm-10 col-xs-6 col-lg-12'>
          <p>
            I graduated from Rice University's Full Stack Web Development
            program in May of 2021 with a 4.0 GPA. This site, while a work in
            progress, was built with everything I've learned so far, which
            itself has been a fun and rewarding experience. I plan to continue
            adding to it for some time - when I get the time. git I hope you have
            some time to check out my portfolio, and if you have any questions
            or comments feel free to contact me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
