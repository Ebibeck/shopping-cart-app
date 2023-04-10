migrate((db) => {
  const collection = new Collection({
    "id": "u0fig7mshdcfgex",
    "created": "2023-03-29 12:05:12.480Z",
    "updated": "2023-03-29 12:05:12.480Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "efum3ngl",
        "name": "product",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u0fig7mshdcfgex");

  return dao.deleteCollection(collection);
})
