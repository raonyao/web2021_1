const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select monster.id, monstername, itemname, dropratio from monster inner join item on item.monster_id=monster.id;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.monstername + ' : ' + data.itemname + ' : ' + data.dropratio);
		}
	});
});
