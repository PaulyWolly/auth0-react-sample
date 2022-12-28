/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import 'bootstrap/dist/css/bootstrap.min.css'
import './PhotoList.css'

const PhotoList = ({ photos }) => {
// Property in my class. This is an array that I will reference when
  // receiving the data from API
  // public postArray: IPhoto[];

  // interface IPhoto {
  //   albumId: number;
  //   id: number;
  //   title: string;
  //   url: string;
  //   thumbnailUrl: string;
  // }



  return (
    <div>

      <ul className="list-group">
        {photos?.map((photo) => (
          <li key={photo.id} className="list-group-item d-flex justify-content-between align-items-center">
            ({photo.id}) {photo.title.toUpperCase()}
            <br/>
            {photo.url} {photo.thumbnailUrl}
            <img src={photo.thumbnailUrl} alt="imgPath"></img>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default PhotoList