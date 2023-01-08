const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test1.db');

let sql = `
select id, name, album_id, single_id from songs2;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' : ' + data.album_id+ ' : ' + data.single_id);
		}
	});
});
