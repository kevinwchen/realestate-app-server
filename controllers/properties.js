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
  if (req.body.id != null) {
    res.property.id = req.body.id;
  }
  if (req.body.title != null) {
    res.property.title = req.body.title;
  }
  try {
    const updatedProperty = await res.property.save();
    res.json(updatedProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    await res.property.remove();
    res.json({ message: "Property listing deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
