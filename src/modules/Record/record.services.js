/**
  @param - Database Instance (e.g Record Model)
*/

const recordServices = ({ RecordModel }) => {
  const fetchAllRecords = async (params = {}) => {
    const records = await RecordModel.aggregate(params);
    return records;
  };

  return Object.freeze({
    fetchAllRecords,
  });
};

module.exports = recordServices;
