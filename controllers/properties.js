import Property from "../models/property.js";

export const getProperties = async (req, res) => {
  try {
    const getProperties = await Property.find();
    res.json(getProperties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProperty = async (req, res) => {
  res.json(res.property);
};

export const createProperty = async (req, res) => {
  const property = new Property({
    title: req.body.title,
    bed: req.body.bed,
    bath: req.body.bath,
    address: req.body.address,
    zipCode: req.body.zipCode,
    state: req.body.state,
    country: req.body.country,
    imageURLs: req.body.imageURLs,
  });
  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProperty = async (req, res) => {
  res.property.title = req.body.title || res.property.title;
  res.property.bed = req.body.bed || res.property.bed;
  res.property.bath = req.body.bath || res.property.bath;
  res.property.address = req.body.address || res.property.address;
  res.property.zipCode = req.body.zipCode || res.property.zipCode;
  res.property.state = req.body.state || res.property.state;
  res.property.country = req.body.country || res.property.country;
  res.property.imageURLs = req.body.imageURLs || res.property.imageURLs;

  try {
    const updatedProperty = await res.property.save();
    res.json(updatedProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const deletionId = res.property.id;
    await res.property.remove();
    res.json({ message: `Property deleted, id:${deletionId}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
