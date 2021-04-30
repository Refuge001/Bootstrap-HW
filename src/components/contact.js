function Contact() {
  return (
    <div className='container col-lg-6' style={{ width: '350px' }}>
      <div className='row'>
        <div className='col'>
          <div className='page-header mt-2'>
            <div className='card mx-auto' style={{ width: '18rem' }}>
              <div className='card-body'>
                <h1 className='card-title'>Contact Me</h1>
                <hr />
                <p className='card-text'>William James Utterback</p>
                <p className='card-text'>346-262-9732</p>
                <p className='card-text'>
                  <a href='mailto:uwill08@gmail.com'>uwill08@gmail.com</a>
                </p>
                <p className='card-text'>
                  <a
                    className='d-flex card-link d-inline-flex'
                    href='./assets/Resume.pdf'
                    target='_blank'
                  >
                    Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <form className='mx-auto'>
          <div className='form-group'>
            <label htmlFor='input-name'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              className='form-control'
              id='input-name'
              placeholder='Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='input-email'>
              <strong>E-mail</strong>
            </label>
            <input
              type='email'
              className='form-control'
              id='input-email'
              placeholder='E-mail'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='input-message'>
              <strong>Message</strong>
            </label>
            <textarea
              className='form-control col-md-12'
              id='input-message'
              rows='3'
              placeholder='Message'
            ></textarea>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
          <hr />
          <div className='card' style={{ width: '18rem', textAlign: 'center' }}>
            <div
              className='card-header font-weight-bold'
              style={{ fontSize: '22px' }}
            >
              Social Media
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <a
                  href='https://github.com/wjutterback'
                  target='_blank'
                  rel='noreferrer'
                  className='card-link d-inline-flex'
                >
                  Github Profile
                </a>
              </li>
              <li className='list-group-item'>
                <a
                  href='https://www.linkedin.com/in/will-utterback-700bb61b9/'
                  target='_blank'
                  rel='noreferrer'
                  className='card-link d-inline-flex'
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
