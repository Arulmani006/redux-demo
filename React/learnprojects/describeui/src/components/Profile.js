export default function Profile({ name, imageId }) {
    const imageUrl = (
      'https://i.imgur.com/' +
      imageId +
      's.jpg'
    );
    return (
      <img
        className="avatar"
        src={imageUrl}
        alt={name}
      />
    );
  }