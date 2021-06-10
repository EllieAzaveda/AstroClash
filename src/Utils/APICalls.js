export const baseURL = 'https://aztro.sameerkumar.website';
export const secondBaseURL = 'https://api.nasa.gov/planetary/apod?';

export const checkForErr = (response) => {
  if(response.status >= 500) {
    return 'Uhoh! Something is wrong with our system. Please try back later.'
  } else if (!response.ok) {
    return 'Something went wrong. Please try again later.'
  } else {
    return response.json()
  }
}

export const fetchSingleHoroscope = (sign) => {
  return fetch(`${baseURL}/?sign=${sign}&day=today`, {
    method: 'POST'
  }).then(checkForErr)
    .then(singleHoroscopeData => {
      return singleHoroscopeData
    })
};

export const fetchDailyFact = () => {
  return fetch(`${secondBaseURL}api_key=xCENGAkMUeSm4npGMPsHqwBltGKg0M0FYSLHdiPw`)
  .then(checkForErr)
}
