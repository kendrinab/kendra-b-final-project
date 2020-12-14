import React, { useContext } from 'react';
import { Nav, Dropdown, Image, Navigation } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <Navigation>
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
            {/* <Logout /> */}
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Navigation>
  );
};

export default Dropdown;
