import React, { useState, useEffect, Fragment } from "react";
import Loader from "../../commons/loader/Loader";
import {Sidebar} from 'primereact/sidebar';

import { connect } from "react-redux";
import {
  getCustomers,
  getSingleCustomer
} from "../../../redux/actions/customer.actions";

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
      <hr/>
     <p> <strong>Phone:&nbsp;</strong>{data.phone}</p>
    </div>
  )
}

const Customers = ({ getCustomers, customersList, getSingleCustomer, customer }) => {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    if(customer !== undefined) {
      setIsOpen(true);
    }
  }, [customer])

  const fetchCustomers = () => {
    getCustomers();
  };

  let content = <Loader fullPage={true} />;

  if (customersList.length > 0) {
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
            {customersList.map(customer => {
              return (
                <Row
                  key={customer.id}
                  onClick={() => getSingleCustomer(customer.id)}
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
          style={{width:'50em'}}
        >
          { customer !== undefined && <SidebarContent data={customer} />}
        </Sidebar>
      </Fragment>
    );
  }

  return content;
};

const mapStateToProps = state => ({
  customersList: state.customers.list,
  customer: state.customers.single
});

export default connect(
  mapStateToProps,
  { getCustomers, getSingleCustomer }
)(Customers);
