import Property from "../models/property.js";

const getPropertyById = async (req, res, next) => {
  let property;
  try {
    property = await Property.findById(req.params.id);
    if (property == null) {
      return res.status(404).json({ message: "Cannot find property" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.property = property;
  next();
};

export default getPropertyById;
