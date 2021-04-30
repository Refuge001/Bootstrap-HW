function Project({ img, name, deployed, github }) {
  return (
    <div className='col-lg-6 col-md-12 mb-2 d-flex justify-content-center'>
      <div className='card'>
        <img className='card-img-top' src={img} alt='Project Thumbnail' />
        <h1 className='card-title text-center' style={{ padding: '5px' }}>
          {name}
        </h1>
        <div className='card-body text-center'>
          <a
            href={deployed}
            target='_blank'
            rel='noreferrer'
            className='card-link d-inline-flex'
          >
            Deployed App
          </a>
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            className='card-link d-inline-flex'
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
