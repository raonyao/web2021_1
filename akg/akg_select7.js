const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sql = `
select id, album_name, song_id, song_name, single_id, offer_id from album_link_song2;
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
