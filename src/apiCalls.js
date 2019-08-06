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
        if (localStorage.getItem("contacts") == null) localStorageContacts = {};
        else
          localStorageContacts = JSON.parse(localStorage.getItem("contacts"));
        localStorageContacts[contactObj.contact] = contactObj.name;
        // console.info(localStorageContacts)
        localStorage.setItem("contacts", JSON.stringify(localStorageContacts));
        resolve(localStorageContacts);
      } else {
        alert(check);
      }
    }, 100);
  });
}

export function deleteContactFun(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var localStorageContacts = JSON.parse(localStorage.getItem("contacts"));

      delete localStorageContacts[id];
      localStorage.setItem("contacts", JSON.stringify(localStorageContacts));
      resolve(localStorageContacts);
    }, 100);
  });
}
