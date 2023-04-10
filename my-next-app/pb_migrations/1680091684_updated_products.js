migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0fig7mshdcfgex")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhwjuq9y",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rknuppoo",
    "name": "quantity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efum3ngl",
    "name": "productName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0fig7mshdcfgex")

  // remove
  collection.schema.removeField("lhwjuq9y")

  // remove
  collection.schema.removeField("rknuppoo")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
