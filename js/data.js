
 getData();

 var names = [];
 var descriptions = [];
 var locations = [];
 var i = 0;
 
 async function getData(){

   /*Put future data files inside here for example: const response = await fetch('Name.csv');*/
   /*Look towards ShopInventoryCSV.csv to find an example of how the data should be formated */

   ///////////////////////////////////////////////////////////
   const response = await fetch('SMH - Everything In One.csv'); 
   //////////////////////////////////////////////////////////

   const data = await response.text();

   //const table = data.split('\n').slice(1);
   const table = data.split('\n');

   //console.log(table);

   table.forEach(row =>{
     const columns = row.split(',');
     
     const name = columns[0];
     const description = columns[1];

     names[i] = columns[0];
     descriptions[i] = columns[1];
     locations[i] = columns[2];
     //console.log(name);
     i++;
   
   });

 }
