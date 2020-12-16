import React, { useContext } from 'react';
import { Nav, Dropdown, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Logout from './LogOut';

const DropDownBar = () => {
  const { currentUser } = useContext(AppContext);
  console.log(currentUser);
  return (
    <div>
      {currentUser._id && (
        <Navbar>
          <Nav.Item>
            <Dropdown drop="down" className="mr-1">
              <Dropdown.Toggle variant="">
                <Image
                  src={
                    currentUser?.avatar
                      ? currentUser.avatar
                      : 'https://res.cloudinary.com/deeg4bzxa/image/upload/v1607912992/Kendra_cozg5z.jpg'
                  }
                  height={50}
                  width={50}
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                {/* <Dropdown.Item as={Link} to="/posts-page">
                  View All Posts
                </Dropdown.Item> */}
                <Dropdown.Item as={Link} to="/blog">
                  Create A Post
                </Dropdown.Item>
                {/* <Dropdown.Item as={Link} to="/posts/$:id">
                  Update A Post
                </Dropdown.Item> */}
                <Dropdown.Item as={Link} to="/reset-password">
                  Reset Password
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/update-password">
                  Update Password
                </Dropdown.Item>
                <Logout />
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Navbar>
      )}
    </div>
  );
};

export default DropDownBar;
