export function addContactFun(contactObj) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var check = "ok";
      // var contacts = Object.entries(localStorage);
      // contacts.map(c => {
      //   if (
      //     contactObj.name.localeCompare(c.name) === 0 &&
      //     contactObj.contact.localeCompare(c.contact) === 0
      //   )
      //     check = "Duplicate Entry";
      //   else if (contactObj.contact.localeCompare(c.contact) === 0)
      //     check = 'No already saved by "' + c.name + ' "';
      // });

      if (check.localeCompare("ok") === 0) {
        document.getElementById("name").value = "";
        document.getElementById("contact").value = "";

        var localStorageContacts = {};
        var allContacts = [];

        localStorageContacts = JSON.parse(localStorage.getItem("contacts"));

        if (localStorageContacts != null)
          allContacts = localStorageContacts["contacts"];
        allContacts.push(contactObj);

        var storageStructure = JSON.stringify({ contacts: allContacts });

        localStorage.setItem("contacts", storageStructure);

        resolve(JSON.parse(storageStructure)["contacts"]);
      } else {
        alert(check);
      }
    }, 100);
  });
}

export function deleteContactFun(contact) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var localStorageContacts = JSON.parse(localStorage.getItem("contacts"))[
        "contacts"
      ];

      var updatedContacts = [];
      localStorageContacts.forEach((c, index) => {
        if (c.contact != contact) updatedContacts.push(c);
      });
      var storageStructure = JSON.stringify({ contacts: updatedContacts });
      localStorage.setItem("contacts", storageStructure);
      resolve(updatedContacts);
    }, 100);
  });
}
