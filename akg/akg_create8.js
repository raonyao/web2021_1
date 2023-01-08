const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*アルバムテーブルとリンクテーブルを紐づけたVIEWテーブル*/

let schema = `
create view album_link1(
  id, album_name, song_id, single_id, offer_id
)
as select album.id, album.name, song_id, single_id, offer_id from album inner join link on album.id = link.album_id;
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
