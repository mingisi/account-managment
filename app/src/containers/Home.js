import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem, Table  } from "react-bootstrap";
import { API } from "aws-amplify";
import "./Home.css";

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      client: []
    };
  }

  getClientDetails() {
    return <h2>About</h2>;
  }

  renderClientList(clients) {
    console.log("client:", clients)
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#id</th>
              <th>Client</th>
              <th>Created Date</th>
              <th>Modified Date</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(
              (client, i) =>
                <tr key={i}>
                  <td>{client.id}</td>
                  <td>{client.details.clientName}</td>
                  {/* {client.details.map( 
                    (d, j) =>
                      <td>{d.clientEmail}</td>
                  )} */}

                  <td>{"" + new Date(client.created).toLocaleDateString()}</td>
                  <td>{"" + new Date(client.modified).toLocaleDateString()}</td>
                  <td>{client.state}</td>
                </tr>
              
            )}
            </tbody>
        </Table>
        <Nav pullRight>
          <NavItem>
                    <Link to="/client/new">Add New Client</Link>
                  </NavItem>
        </Nav>
      </div>
    );
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Accounts</h1>
        <p>Simple application to manage your client accounts</p>
      </div>
    );
  }

  renderClients() {
    return (
      <div className="notes">
        <PageHeader>Your Client List</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderClientList(this.state.client)}
        </ListGroup>
      </div>
    );
  }

  client() {
    return API.get("client", "/client")
  }

  async componentDidMount() {

    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const client = await this.client();

      this.setState({ client });
    } catch (e) {
      alert(e.response.message);
    }

    this.setState({ isLoading: false });
  }

  renderClient(details) {

  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderClients() : this.renderLander()}
      </div>
    );
  }
}