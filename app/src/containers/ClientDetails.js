import React, { Component } from "react";
import { Tab, Tabs, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar } from 'react-bootstrap'
import LoaderButton from "../components/LoaderButton";
import { API } from "aws-amplify";
import "./ClientDetails.css";

export default class ClientDetails extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            details: {
                clientEmail: "a@t.com",
                clientName: "b",
                contactName: "c",
                contactEmail: "d",
                contactPartner: "e",
                manager: "f",
                fiscalPeriodEnd: "g",
                tags: "h",
                notes: "i"
            },
            company: {
                businessStructure: "j",
                taxNumber: "k",
                phone: "l",
                website: "m",
                gstRegistered: "n",
                companyNumber: "o",
                fax: "p",
                address: "q",
                region: "r",
                postecode: "s",
                country: "t",
            },
            key: 'details',
            isLoading: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleAddSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        try {
            await this.createClient({
                details: this.state.details,
                company: this.state.company
            });

            this.props.history.push("/");
        } catch (e) {
            alert(e);
            this.setState({ isLoading: false });
        }
    }

    createClient(details) {
        return API.post("client", "/client", {
            body: details,
        });
    }

    validateCustomerDetailsForm() {
        return (
            this.state.details.clientEmail.length > 0 &&
            this.state.details.clientName.length > 0 &&
            this.state.details.contactName.length > 0 &&
            this.state.details.contactEmail.length > 0 &&
            this.state.details.contactPartner.length > 0 &&
            this.state.details.manager.length > 0 &&
            this.state.details.fiscalPeriodEnd.length > 0 &&
            this.state.details.tags.length > 0 &&
            this.state.details.notes.length > 0
        );
    }

    validateCustomerCompanyForm() {
        return (
            this.state.company.businessStructure.length > 0 &&
            this.state.company.taxNumber.length > 0 &&
            this.state.company.phone.length > 0 &&
            this.state.company.website.length > 0 &&
            this.state.company.gstRegistered.length > 0 &&
            this.state.company.companyNumber.length > 0 &&
            this.state.company.fax.length > 0 &&
            this.state.company.address.length > 0 &&
            this.state.company.region.length > 0 &&
            this.state.company.postecode.length > 0 &&
            this.state.company.country.length > 0
        );
    }

    renderCustomerDetailsForm() {
        return (
            <Form>
                <FormGroup controlId="details.clientEmail">
                    <ControlLabel>Email address</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.clientEmail} type="email" placeholder="Enter email" />
                    {/* <FormText className="text-muted">We'll never share your email with anyone else.</FormText> */}
                </FormGroup>
                <FormGroup controlId="details.clientName">
                    <ControlLabel>Client Name</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.clientName} placeholder="Enter Client Name" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="details.contactName">
                    <ControlLabel>Contact Name</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.contactName} placeholder="Enter Contact Name" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="details.contactEmail">
                    <ControlLabel>Contact Email</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.contactEmail} placeholder="Enter Contact Email" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="details.contactPartner">
                    <ControlLabel>Partner</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.contactPartner} placeholder="Enter Partner" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="details.manager">
                    <ControlLabel>Manager</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.manager} placeholder="Enter Manager" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="details.fiscalPeriodEnd">
                    <ControlLabel>Fiscal Period End</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.fiscalPeriodEnd} placeholder="Enter Fiscal Period End" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="details.tags">
                    <ControlLabel>Tags</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.tags} placeholder="Enter tags" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="details.notes">
                    <ControlLabel>Notes</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.details.notes} placeholder="Enter Notes" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>
            </Form>
        )
    }

    renderCustomerCompanyForm() {
        return (
            <Form>
                <FormGroup controlId="company.businessStructure">
                    <ControlLabel>Business Structure</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.businessStructure} placeholder="Enter businessStructure" />
                    {/* <FormText className="text-muted">We'll never share your email with anyone else.</FormText> */}
                </FormGroup>
                <FormGroup controlId="company.taxNumber">
                    <ControlLabel>Tax Number</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.taxNumber} placeholder="Enter taxNumber" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.phone">
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.phone} placeholder="Enter phone" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.website">
                    <ControlLabel>Website</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.website} placeholder="Enter website" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.gstRegistered">
                    <ControlLabel>GST Registered</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.gstRegistered} placeholder="Enter gst Registered" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="companyNumber">
                    <ControlLabel>Company Number</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.companyNumber} placeholder="Enter company Number" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.fax">
                    <ControlLabel>Fax</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.fax} placeholder="Enter fax" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.address">
                    <ControlLabel>Address</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.address} placeholder="Enter address" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.region">
                    <ControlLabel>Region</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.region} placeholder="Enter region" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.postecode">
                    <ControlLabel>postecode</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.postecode} placeholder="Enter postecode" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

                <FormGroup controlId="company.country">
                    <ControlLabel>country</ControlLabel>
                    <FormControl onChange={this.handleChange} value={this.state.company.country} placeholder="Enter country" />
                    {/* <Form.Text className="text-muted">Client Name</Form.Text> */}
                </FormGroup>

            </Form>
        )
    }

    render() {
        return (
            <div>
                <Tabs
                    defaultActiveKey="details"
                    id="newClient"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >

                    <Tab id="details" eventKey="details" title="Details">
                        {this.renderCustomerDetailsForm()}
                    </Tab>
                    <Tab id="company" eventKey="company" title="Company">
                        {this.renderCustomerCompanyForm()}
                    </Tab>
                    <Tab id="system" eventKey="system" title="System">
                    </Tab>

                </Tabs>

                <ButtonToolbar>
                    <LoaderButton onClick={this.handleAddSubmit.bind(this)}
                        block
                        bsStyle="primary"
                        bsSize="large"
                        disabled={!this.validateCustomerCompanyForm() && !this.validateCustomerDetailsForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Add"
                        loadingText="Adding…"
                    />
                </ButtonToolbar>
            </div>

        )

    }
}