const ImageCardWithTitle = ({ title, image, link }) => {
  return (
    <a href={link}>
      <div className="image-card-with-title">
        <div className="image-card-with-title__image">
          <img src={image} alt={title} />
        </div>
        <h6 className="image-card-with-title__title">{title}</h6>
      </div>
    </a>
  );
};

export default ImageCardWithTitle;
