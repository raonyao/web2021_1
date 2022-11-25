const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `select stripping.name as strippingname, dropratio from monster inner join stripping on stripping.monster_id=monster.id where monster.id= 1;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.monstername + ' : ' + data.strippingname + ' : ' + data.dropratio);
		}
	});
});
/*select monster.id, monster.name as monstername, stripping.name as strippingname, dropratio from monster inner join stripping on stripping.monster_id=monster.id;*/