
/**
 * @see {@link https://www.npmjs.com/package/promise-mysql}
 */
const mysql = require('promise-mysql');


/**
 * Bring DB config in from separate file
 * to keep logic clean.
 */
const conf = require('./config.js');

/**
 * A DB connection with the needed queries
 */
class DB {
  /**
   * Creates a connection if one does not already exist
   * @return {Promise} the connection object
 */
  async createConnection() {
    if (this.conn) return this.conn;
    this.conn = await mysql.createConnection(conf);
    return this.conn;
  }

  /**
 * Reads all songs for specified artist
 * @return {Promise}
 */
  async selectSongsByArtist(artist) {
    console.log(`artist: ${artist}`);
    return this.conn.query(
        'SELECT artist,album,year FROM songs WHERE ?',
        {
          artist,
        }
    );
  }


  /**
 * Reads all artists who appear more than once in list
 * @return {Promise}
 */
  async selectMultiArtists() {
    return this.conn.query(
        'SELECT artist,album,year FROM songs GROUP BY artist HAVING COUNT(*) > 1 ');
  }
}

module.exports = DB;


