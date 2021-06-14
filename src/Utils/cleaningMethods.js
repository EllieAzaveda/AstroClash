export const cleanHoroscopeData = (horoscopeData) => {
  let objKeys = Object.entries(horoscopeData);

  return objKeys.reduce((obj, entry) => {
    if (entry[0] !== 'date_range' && entry[0] !== 'current_date' && entry[0] !== 'lucky_time') {
      obj[entry[0]] = entry[1]
    }
    return obj;
  }, {})
}
