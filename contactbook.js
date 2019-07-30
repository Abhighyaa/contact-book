        // page lifecycle > Paint > Render
        // JS kab execute hua, process hua
        // Objects in javascript
        // Prototype

        // document.querySelector
        var contacts=[];

        // hoisting
        showContacts();
    
        document.getElementById('add').onclick=function(){
            var found=0;
            name=document.getElementById('name').value
            contact=document.getElementById('contact').value
            contacts.forEach(c => {
                if(c.name.localeCompare(name)==0 && c.contact.localeCompare(contact)==0){
                    alert('Duplicate Entry')
                    found=1
                }
            });
            if(found==0){
                if(validateName(name)&&validateContact(contact)){
                    var c={
                        name : name,
                        contact : contact
                    }
                    contacts.push(c)
                    showContacts()
                    document.getElementById('name').value=''
                    document.getElementById('contact').value=''
                }
                else{
                    alert('Invalid name or contact')
                }
            }
        }
        document.addEventListener('click',function(e){
            if(e.target && e.target.name== 'del'){
                console.log(e.target.id)
                trs = document.getElementsByTagName('tr')
                table= document.getElementsByTagName('table')
                for(var i=contacts.length-1;i>=Number(e.target.id);i--){
                    table[0].removeChild(trs[i])
                }
                console.log(table[0].childNodes)
                k=Number(e.target.id)
                contacts=contacts.slice(0,k).concat(contacts.slice(k+1,contacts.length))
                if(contacts.length==0)
                    document.getElementById('contacts').textContent='No contacts'
                else{
                    console.log(contacts)
                    for(var i=Number(e.target.id);i<contacts.length;i++){
                        var tr=document.createElement('tr')                        
                        tds=[createTd(i+1),createTd(contacts[i].name),createTd(contacts[i].contact),createDelTd(i)]
                        tds.forEach(td => {
                            tr.appendChild(td);
                            td.style.padding="10px"
                        });
                        table[0].appendChild(tr)
                    }
                    
                }
            }
        });

        function createTd(t){
            var td=document.createElement('td');
            var text=document.createTextNode(t);
            td.appendChild(text);
            return td;
        }

        function createDelTd(i){
            var td3=document.createElement('td')
            text=document.createTextNode('Delete')
            del=document.createElement('a')
            del.appendChild(text)
            del.setAttribute("name","del")
            del.setAttribute("id",i)
            td3.appendChild(del)
            return td3;
        }

        function createTable(){
            table=document.createElement('table')
            var tr=document.createElement('thead')
                
            // refactor'ed
            tds = [createTd('S.No'),createTd('Name'),createTd('Contact'),createTd('Action')]
            // refactor'ed
            tds.forEach(td => {tr.appendChild(td)});
            table.appendChild(tr)
            table.style.padding="10px"
            table.style.border="1px solid"
            table.style.borderCollapse="collapse"
            tr.style.padding="10px"
            tr.style.margin="10px"
            tr.style.border="1px solid black"
            document.getElementById('contacts').appendChild(table);
            tds = document.getElementsByTagName('td');
                
            // looping in javascript
            for(var a=0;a<tds.length;a++) {
                tds[a].style.padding="10px"
            }
        }
        function showContacts(){
            if(contacts.length==0){
                document.getElementById('contacts').textContent="No Contacts";
            }
            else{
                if(document.getElementsByTagName('tr').length==0){
                    document.getElementById('contacts').textContent=""
                    createTable()
                }
                
                i=contacts.length-1
                var tr=document.createElement('tr')        
                tds=[createTd(i+1),createTd(contacts[i].name),createTd(contacts[i].contact),createDelTd(i)]
                tds.forEach(td => {
                    tr.appendChild(td);
                    td.style.padding="10px"
                });
                table.appendChild(tr)
            }
        }

        function validateName(n){
            return /^[A-Za-z ]+$/.test(n);
        }
        function validateContact(c){
            duplicate=true
            contacts.forEach(i => {
                if(i.contact.localeCompare(c)==0){
                    duplicate=false;
                }
            });
            return /^[0-9]+$/.test(c) && duplicate
        }
        function showAllContacts(){
            createTable()
            var i=0
            contacts.forEach(c => {
                
                var tr=document.createElement('tr')        
                tds=[createTd(i+1),createTd(c.name),createTd(c.contact),createDelTd(i)]
                i+=1;
                tds.forEach(td => {
                    tr.appendChild(td);
                    td.style.padding="10px"
                });
                table.appendChild(tr)
            });
        }
        document.querySelector('#sortName').onclick=function(){
            if(contacts.length>1){
                order=document.querySelector('#order').value
                document.querySelector('#contacts').textContent=''
                if(order.localeCompare('desc'))
                    contacts=contacts.sort((a,b)=>{return a.name.localeCompare(b.name)});
                else
                    contacts=contacts.sort((a,b)=>{return b.name.localeCompare(a.name)});
                console.log(contacts)
                showAllContacts()
            }
        }

        document.querySelector('#sortContact').onclick=function(){
            if(contacts.length>1){
                order=document.querySelector('#order').value
                document.querySelector('#contacts').textContent=''
                if(order.localeCompare('desc'))
                    contacts=contacts.sort((a,b)=>{return a.contact - b.contact});
                else
                    contacts=contacts.sort((a,b)=>{return b.contact - a.contact});
                console.log(contacts)
                showAllContacts()
            }
        }
        