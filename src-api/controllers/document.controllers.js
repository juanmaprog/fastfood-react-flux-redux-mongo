const getNewGUID = require("../helpers/helperString");

const Document = require("../models/document.model");
const DocumentDetails = require("../models/documentdetail.model");

const { json } = require("body-parser");
const documentdetailModel = require("../models/documentdetail.model");

const docCtrl = {};

//======GET======//
docCtrl.allDocuments = async (req, res) => {
  const entities = await Document.find().populate("DocumentDetails");
  res.json(entities);
};

//============POST=============//
docCtrl.createDocument = async (req, res) => {
  //Get all body content.
  const body = req.body;
  //Get only details from body.
  const details = req.body.documentDetails;
  //remove details from body.
  delete body["documentDetails"];
  //Create new document from body result.
  const idDocument = "xxxxxxxx-zzzz-zzzz-zzzz-zzzzzzzzzzzz"; // getNewGUID();
  const document = new Document(body);
  document._id = idDocument;

  const det = new DocumentDetails(details[0]);
  det._id = getNewGUID();
  det.document = document;

  res.json(document);
};

//============PUT=============//
docCtrl.updateDocument = async (req, res) => {
  const id = req.params.idCart;
  const updateEntity = req.body;
  const entity = await Document.findByIdAndUpdate(id, updateEntity);
};

//=========DELETE=========//
docCtrl.deleteDocument = async (req, res) => {
  const id = req.params.idCart;
  await Document.findByIdAndDelete(id);
  res.json("document successfully deleted");
};

module.exports = docCtrl;
