#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Contact Number Menu");
let contact = [];
let contactsSerialNo = 1;
async function contactMenuInput() {
    const inputContact = await inquirer.prompt({
        type: 'list',
        name: 'contact',
        message: "Select your Option",
        choices: ['Add Contact', 'View Contact', 'Exit Menu']
    });
    let { contact } = inputContact;
    if (contact === 'Add Contact')
        addContact();
    if (contact === 'View Contact')
        viewContact();
    if (contact === 'Exit Menu')
        console.log('\nThank You for using Contact Menu!');
}
contactMenuInput();
async function addContact() {
    const inputContactDetails = await inquirer.prompt([
        {
            type: "input",
            name: "personName",
            message: "Enter person name!"
        },
        {
            type: "number",
            name: "phoneNumber",
            message: "Enter phone number!"
        }
    ]);
    let { personName, phoneNumber } = inputContactDetails;
    contact.push({ ID: contactsSerialNo++, Name: personName, PhoneNo: phoneNumber });
    console.log('\nNew Contact Number has been Added!\n');
    contactMenuInput();
}
async function viewContact() {
    if (contact.length > 0)
        contact.forEach((user) => console.log(`\n ${user.ID}. Person Name: ${user.Name} ---- Contact Number: ${user.PhoneNo}`));
    else
        console.log("\nNo Contacts available!");
    contactMenuInput();
}
