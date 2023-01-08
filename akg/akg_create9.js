const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*アルバムテーブルとリンクテーブルを紐づけたVIEWテーブルをさらに、曲テーブルと紐づけたVIEWテーブル*/

let schema = `
create view album_link_song2(
  id, album_name, song_id, song_name, single_id, offer_id
)
as select id, album_name, song.id, song.name, single_id, offer_id from album_link inner join song on album_link1.song_id = song.id;
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
