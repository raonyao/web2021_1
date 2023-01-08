const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sql = `
select id, album_name, song_id, single_id, offer_id from album_link1 where id = 1;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.album_name + ' : ' + data.song_id + ' : ' + data.single_id + ' : ' + data.offer_id );
		}
	});
});
