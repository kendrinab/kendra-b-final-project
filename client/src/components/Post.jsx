// import React, { useContext } from 'react';
// import DeleteButton from './DeleteButton';
// import AddButton from './AddButton';
// import { AppContext } from '../context/AppContext';
// import moment from 'moment';

// const Post = ({ posts }) => {
//   const { search } = useContext(AppContext);

//   const filteredPosts = posts?.filter((post) => {
//     return post.description.toLowerCase().includes(search.toLowerCase());
//   });
//   return (
//     <div>
//       {filteredPosts.map((post) => (
//         <tr key={post._id}>
//           <td>
//             {post.completed ? (
//               <strike>{post.description}</strike>
//             ) : (
//               post.description
//             )}
//           </td>
//           <td>
//             {post.dateCreated
//               ? moment(post.dateCreated).format('MMM Do, YYYY')
//               : 'No Due Date'}
//           </td>
//           <td>
//             <DeleteButton id={post._id} />
//             <AddButton post={post} />
//           </td>
//         </tr>
//       ))}
//     </div>
//   );
// };
// export default Post;
