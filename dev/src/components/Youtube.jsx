
export default ({ id, style }) =>
  <iframe
    style={{
      width: '100%',
      height: '315px',
      ...(style || {}),
    }}
    src={`//www.youtube.com/embed/${id}`}
    frameBorder="0" allowFullScreen>
  </iframe>
