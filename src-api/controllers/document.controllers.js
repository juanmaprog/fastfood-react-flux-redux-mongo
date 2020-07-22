const getNewGUID = require("../helpers/helperString");

const Document = require("../models/document.model");
const DocumentDetails = require("../models/documentdetail.model");

const documentdetailModel = require("../models/documentdetail.model");

const docCtrl = {};

//======GET======//
docCtrl.allDocuments = async (req, res) => {
  const entities = await Document.find().populate("documentDetails");
  res.json(entities);
};

docCtrl.createDocument = async (req, res) => {
  try {
    //Get all body content.
    const body = req.body;
    //Get only details from body.
    const details = req.body.documentDetails;
    //remove details from body.
    delete body["documentDetails"];

    const cab = new Document(body);

    for (let i = 0; i < details.length; i++) {
      let det = new DocumentDetails(details[i]);
      det.document = cab;
      cab.documentDetails.push(det._id);
      await det.save();
    }

    await cab.save();

    res.json(cab);
  } catch (error) {
    res.json(error);
  }
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
