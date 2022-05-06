import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import { Card, Row, Col } from 'react-bootstrap';

function App() {
  const [userData, setUserData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setUserData(response.data);
    };
    getData();
  }, []);
  return (
    <>
      
        <Row className="all-users-data g-4 m-3" xs={1} md={2} lg={3} >
          {userData.map((user, id) => (
          <Col  key={id}>
              <Card className='h-100 ps-5 bg-light'>
                <Card.Title className="display-5 fw-bold my-1">
                  {user.name}
                </Card.Title>
                
                <Card.Body >
                  
                  <p  className=''>I work at {user.company.name}, our slogan is {user.company.catchPhrase} and our business strategy is to <i>{user.company.bs}</i> </p>
                  
                  <div className=''>
                    <h5 className='display-6'>General Info</h5>
                    <div className='sub-info d-flex justify-content-between w-75 text-start'>
                      <p className=''><strong>Username</strong><span className='ms-3'>{user.username}</span></p>
                      
                    </div>
                    <div className='sub-info d-flex justify-content-between 4 w-75 text-start'>
                      <p className=''><strong>Email</strong><span className='ms-3'>{user.email}</span></p>
                      
                    </div>
                    <div className='sub-info d-flex justify-content-between w-75 text-start'>
                      <p className=''><strong>Phone</strong></p>
                      <p className='ms-3'>{user.phone}</p>
                    </div>
                    <div className='sub-info d-flex justify-content-between w-75 text-start'>
                      <p className=''><strong>Website</strong><span className='ms-3'>{user.website}</span></p>
                      
                    </div>
                    <div className='sub-info d-flex justify-content-between w-75 text-start'>
                      <p className=''><strong>Address</strong></p>
                      <p className='ms-3'>{user.address.street}, {user.address.suite}, {user.address.city}.</p>
                    </div>
                    <div className='sub-info d-flex justify-content-between w-75 text-start'>
                      <p className=''><strong>Zipcode</strong><span className='ms-3'>{user.address.zipcode}</span></p>
                    </div>
                    <div className='sub-info d-flex justify-content-between w-75 text-start'>
                      <p className=''><strong>Geo</strong><span className='ms-3'>{user.address.geo.lat}, {user.address.geo.lng}</span></p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
     
  
    </>
  );
}

export default App;
