"use strict";
const detroitWarehouse = [
    {
      name: "iPhone SE",
      price: 399,
      fiveG: false,
    },
    {
      name: "iPhone XR",
      price: 499,
      fiveG: false,
    },
    {
      name: "iPhone 11",
      price: 599,
      fiveG: false,
    },
    {
      name: "iPhone 12 Mini",
      price: 729,
      fiveG: true,
    },
    {
      name: "iPhone 12",
      price: 829,
      fiveG: true,
    },
    {
      name: "iPhone 12 Pro",
      price: 999,
      fiveG: true,
    },
    {
      name: "iPhone 12 Max",
      price: 1099,
      fiveG: true,
    },
   {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
   ];

const newYorkWarehouse = [
    {
      name: "iPhone SE",
      price: 399,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Galaxy S10",
      price: 750,
      fiveG: false,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
   ];

const chicagoWarehouse = [
    {
      name: "Galaxy S10",
      price: 750,
      fiveG: false,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "iPhone 12",
      price: 829,
      fiveG: true,
    },
    {
      name: "iPhone 12 Pro",
      price: 999,
      fiveG: true,
    },
    {
      name: "iPhone 12 Max",
      price: 1099,
      fiveG: true,
    },
   {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
   ];

// 1 addPhone
// Add a cell phone to the provided array
const addPhone = (array, name, price, fiveG) => {
    let newPhone = {
        name: name ,
        price: price,
        fiveG: fiveG,
    };

    array.push(newPhone);
};

addPhone(newYorkWarehouse, "Motorolla", 399, false);
//console.log(newYorkWarehouse);


// 2 deletePhoneByIndex
// Delete a cell phone from the provided array at the provided index
const deletePhoneByIndex = (array, index) => {
    array.splice(index, 1);
};

//deletePhoneByIndex(newYorkWarehouse, 9);
//console.log(newYorkWarehouse);



// 3 deletePhoneByName
// Delete the first cell phone from the provided array that has the provided name
const deletePhoneByName = (array, name) => {
    let index = array.findIndex((phone)=>{
        return phone.name === name;
    });
    deletePhoneByIndex(array, index);
};

deletePhoneByName(newYorkWarehouse, "Motorolla");
//console.log(newYorkWarehouse);


// 4 filter5G
// Using the provided array, return a new array where all the phones are either 5G or not, based on the provided boolean value
const filter5G = (array, fiveG) => {
    return array.filter((phone)=>{
        return phone.fiveG === fiveG;
    });
};

//console.log(filter5G(detroitWarehouse, true));


// 5 filterPriceLessThan
// Using the provided array, return a new array where all the phones are less in price than the provided price
const filterPriceLessThan = (array, price) => {
    return array.filter((phone)=>{
        return phone.price < price;
    });
};

//console.log(filterPriceLessThan(detroitWarehouse, 900));


// 6 filterPriceGreaterThan
// Using the provided array, return a new array where all the phones are greater in price than the provided price
const filterPriceGreaterThan = (array, price) => {
    return array.filter((phone)=>{
        return phone.price > price;
    });
};

//console.log(filterPriceGreaterThan(detroitWarehouse, 900));



// 7 findPhoneByName
// Return the first phone in the provided array that matches the provided name
const findPhoneByName = (array, name) => {
    return array.find((phone) =>{
        return phone.name === name;
    });
};

//console.log(findPhoneByName(chicagoWarehouse, "Pixel 4a"));


// 8 calcAverageCost
// Return the average cost of all the phones in the provided array
const calcAverageCost = (array) => {
    let avgCost = 0;
    array.reduce((acc, curr)=>{
        avgCost += curr.price;
         
    });
    return avgCost/array.length;
};

//console.log(calcAverageCost(detroitWarehouse));

// 9 doWeHaveA5GPhone
// Return true if the provided array has a 5G phone and false otherwise.
const doWeHaveA5GPhone = (array) => {
    return array.some((phone)=>{
        return phone.fiveG;
    });
};

//console.log(doWeHaveA5GPhone(chicagoWarehouse));