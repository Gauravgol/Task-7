 
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tasksdata } from './Tasksdata.js';
import NavBar from './NavBar';

function App() {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('account_bal'); // Set the initial sorting field
  const [sortDirection, setSortDirection] = useState(1); // Set the initial sorting direction (1 for ascending, -1 for descending)

  const toggleSort = (field) => {
    if (field === sortField) {
      setSortDirection(-sortDirection); // Toggle the sorting direction
    } else {
      setSortField(field);
      setSortDirection(1); // Default to ascending when changing the sort field
    }
  };

  const sortedData = tasksdata
    .filter((item) => {
      return search === '' ? item : item.first_name.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (sortField === 'account_bal' || sortField === 'credit_score') {
        return (a[sortField] - b[sortField]) * sortDirection;
      }
      return 0;
    });

  useEffect(() => {
    // Set the initial sorting state when the component mounts
    toggleSort(sortField);
  }, []); // Empty dependency array to run only on component mount

  return (
    <div>
        <NavBar/>
      <Container fluid>
        
        <Form>
          <InputGroup className="my-3">
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search contacts" />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Task Description</th>
              <th >
              Task List Title
              </th>
              <th>
                Creation By
              </th>
              <th>Creation Time</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td>{item.taskTitle}</td>
                <td>{item.taskDescription}</td>
                <td>{item.taskListTitle}</td>
                <td>{item.createdBy}</td>
                <td>{item.creationTime}</td>
                 
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
