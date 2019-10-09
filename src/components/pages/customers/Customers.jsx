import React, { useState, useEffect, Fragment } from "react";
import Loader from "../../commons/loader/Loader";
import { Sidebar } from "primereact/sidebar";

import { connect } from "react-redux";
import { getCustomers } from "../../../redux/actions/customer.actions";

const Row = ({ data, onClick }) => {
  return (
    <tr style={{ cursor: "pointer" }} onClick={onClick}>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.website}</td>
    </tr>
  );
};

const SidebarContent = ({ data }) => {
  return (
    <div className="mt-4 px-2">
      <h4 className="text-center">{data.name}</h4>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Username:&nbsp;</strong>
          {data.username}
        </li>
        <li className="list-group-item">
          <strong>Email:&nbsp;</strong>
          {data.email}
        </li>
        <li className="list-group-item">
          <strong>Phone:&nbsp;</strong>
          {data.phone}
        </li>
        <li className="list-group-item">
          <strong>Web Site:&nbsp;</strong>
          {data.website}
        </li>
        <ul className="list-group">
          <h6 className="my-3">Address</h6>
          <li className="list-group-item">
            <strong>Street:&nbsp;</strong>
            {data.address.street}
          </li>
          <li className="list-group-item">
            <strong>Suite:&nbsp;</strong>
            {data.address.suite}
          </li>
          <li className="list-group-item">
            <strong>City:&nbsp;</strong>
            {data.address.city}
          </li>
          <li className="list-group-item">
            <strong>Zip Code:&nbsp;</strong>
            {data.address.zipcode}
          </li>
          <li className="list-group-item">
            <strong>Lat:&nbsp;</strong>
            {data.address.geo.lat}&nbsp;
            <strong>Lat:&nbsp;</strong>
            {data.address.geo.lng}
          </li>
        </ul>
        <ul className="list-group">
          <h6 className="my-3">Company</h6>
          <li className="list-group-item">
            <strong>Name:&nbsp;</strong>
            {data.company.name}
          </li>
          <li className="list-group-item">
            <strong>Catch Phrase:&nbsp;</strong>
            {data.company.catchphrase}
          </li>
          <li className="list-group-item">
            <strong>BS:&nbsp;</strong>
            {data.company.bs}
          </li>
        </ul>
      </ul>
    </div>
  );
};

const Customers = ({ getCustomers, customers }) => {
  const [customer, setCustomer] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCustomers();
  }, []);

  const openSidebar = id => {
    const cust = customers.filter(cust => cust.id === id)[0];
    setCustomer(cust);
    setIsOpen(true);
  };

  let content = <Loader fullPage={true} />;

  if (customers.length) {
    content = (
      <Fragment>
        <h3 className="text-center my-3">Customers</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Web Site</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => {
              return (
                <Row
                  key={customer.id}
                  onClick={() => openSidebar(customer.id)}
                  data={customer}
                />
              );
            })}
          </tbody>
        </table>
        <Sidebar
          visible={isOpen}
          onHide={() => setIsOpen(false)}
          position="right"
          style={{ width: "30em" }}
        >
          {customer && <SidebarContent data={customer} />}
        </Sidebar>
      </Fragment>
    );
  }

  return content;
};

const mapStateToProps = state => ({
  customers: state.customers.list
});

export default connect(
  mapStateToProps,
  { getCustomers }
)(Customers);
