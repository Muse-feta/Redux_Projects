import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)

    const authors = users.find((data) => data.id == userId);

  return (
    <div>
        by: {authors ? authors.name : "unknown user"}
    </div>
  )
}

export default PostAuthor