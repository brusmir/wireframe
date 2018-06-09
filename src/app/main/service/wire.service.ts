import { Injectable } from '@angular/core';

const companies = [
  {name: 'Company1', address: 'Novi Sad', validLicenceTill: 2020, contactPerson: 'Some Person', id: 1},
  {name: 'Company2', address: 'Beograd', validLicenceTill: 2018, contactPerson: 'Some Person', id: 2},
  {name: 'Company3', address: 'Nis', validLicenceTill: 2019, contactPerson: 'Some Person', id: 3},
  {name: 'Company4', address: 'Kragujevac', validLicenceTill: 2021, contactPerson: 'Some Person', id: 4},
  {name: 'Company5', address: 'Subotica', validLicenceTill: 2018, contactPerson: 'Some Person', id: 5}
];

const items = [
  {name: 'Table', orderNumber: 1, category: 'furniture', value: 2000, description: 'Office table', barcode: 25641},
  {name: 'Chair', orderNumber: 2, category: 'furniture', value: 1000, description: 'Office chair', barcode: 28641},
  {name: 'Printer', orderNumber: 3, category: 'equipment', value: 9000, description: 'Office printer', barcode: 35641},
  {name: 'Monitor', orderNumber: 4, category: 'equipment', value: 12000, description: 'Office monitor', barcode: 36641},
  {name: 'Computer', orderNumber: 5, category: 'equipment', value: 70000, description: 'Office computer', barcode: 37641},
];

const users = [
  {name: 'Person1', dateOfSignUp: '02-04-2018', email: 'person1@gmail.com', id: 1, image: 'user.png'},
  {name: 'Person2', dateOfSignUp: '09-08-2017', email: 'person2@gmail.com', id: 2, image: ''},
  {name: 'Person3', dateOfSignUp: '12-10-2017', email: 'person3@gmail.com', id: 3, image: ''},
  {name: 'Person4', dateOfSignUp: '08-01-2018', email: 'person4@gmail.com', id: 4, image: ''},
  {name: 'Person5', dateOfSignUp: '03-03-2018', email: 'person5@gmail.com', id: 5, image: ''}
];

@Injectable()
export class WireService {

  constructor() { }

  getCompanies() {
    return companies;
  }

  getItems() {
    return items;
  }

  getItem(orderNumber) {
    let item = items.filter(function(value, index, array) {
      return value.orderNumber === orderNumber;
    });

    return item;
  }

  removeItems(orderNumber) {
    let index = items.findIndex( item => item.orderNumber === orderNumber);
    if(index > -1){
      items.splice(index, 1);
    }
    return items;
  }

  saveItem(item) {
    items.push(item);
  }

  updateItem(item) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].orderNumber === item.orderNumber) {
        items[i].name = item.name;
        items[i].category = item.category;
        items[i].value = item.value;
        items[i].description = item.description;
        items[i].barcode = item.barcode;
      }
    }
  }

  getCompany(company) {
    let item = companies.filter(function(value, index, array) {
      return value.name === company;
    });
    return item;
  }

  updateCompany(company) {
    for (let i = 0; i < companies.length; i++) {
      if ( companies[i].id === company.id ) {
        companies[i].name = company.name;
        companies[i].address = company.address;
        companies[i].validLicenceTill = company.validLicenceTill;
        companies[i].contactPerson = company.contactPerson;
      }
    }
  }

  saveCompany(company) {
    companies.push(company);
  }

  getUsers() {
    return users;
  }

  getUser(id) {
    let item = users.filter(function(value, index, array) {
      return value.id === id;
    });
    return item;
  }

  updateUser (user) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === user.id) {
        users[i].name = user.name;
        users[i].email = user.email;
        users[i].dateOfSignUp = user.dateOfSignUp;
        users[i].image = user.image;
      }
    }
  }

  saveUser(user) {
    users.push(user);
  }

}
