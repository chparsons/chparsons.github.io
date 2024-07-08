
export default ({ id }) =>
  <iframe
    style={{ width: '100%', height: '315px' }}
    src={`//www.youtube.com/embed/${id}`}
    frameBorder="0" allowFullScreen>
  </iframe>
