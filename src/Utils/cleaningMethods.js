export const cleanHoroscopeData = (horoscopeData) => {
  let objKeys = Object.entries(horoscopeData);

  return objKeys.reduce((obj, entry) => {
    if (entry[0] !== 'current_date' && entry[0] !== 'lucky_time') {
      obj[entry[0]] = entry[1]
    }
    return obj;
  }, {})
}

export const cleanAstronomyData = (astronomyData) => {
  let objKeys = Object.entries(astronomyData);

  return objKeys.reduce((obj, entry) => {
    if (entry[0] !== 'service_version' && entry[0] !== 'hdurl') {
      obj[entry[0]] = entry[1]
    }
    return obj;
  }, {})
}
