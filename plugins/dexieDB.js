export let db;

export async function getDatabase() {
  if (db.isOpen()) {
    console.log("Database is already open");
    return db;
  } else {
    console.log("Database is not open")
    await db.open();
    return db;
  }
}

function initializeDatabase() {
  const Dexie = require('dexie').Dexie;
  let username = 'default';
  const data = JSON.parse(window.localStorage.getItem('pictalk-data'));
  if (data?.user.username) {
    username = data.user.username;
  }
  db = new Dexie(`pictalk-${username}`);
  db.version(1).stores({
    pictogram: 'id, fatherCollectionId, public, userId',
    collection: 'id, collection, fatherCollectionId, partial, public, userId',
  });
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().then(granted => {
      if (granted)
        console.log('Storage will not be cleared except for hard drive space shortage, or explicit user action.');
      else
        console.log('Storage may be cleared by the UA under storage pressure.');
    });
  }
  db.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
  });
}

export function createDatabaseForUser(username) {
  const Dexie = require('dexie').Dexie;
  db = new Dexie(`pictalk-${username}`);
  db.version(1).stores({
    pictogram: 'id, fatherCollectionId, public, userId',
    collection: 'id, collection, fatherCollectionId, partial, public, userId',
  });
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().then(granted => {
      if (granted)
        console.log('Storage will not be cleared except for hard drive space shortage, or explicit user action.');
      else
        console.log('Storage may be cleared by the UA under storage pressure.');
    });
  }
  return db.open();
}

initializeDatabase();