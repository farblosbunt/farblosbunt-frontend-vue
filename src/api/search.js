import axios from 'axios'

function getFacebookPosts (feedType, query, offset) {
  return axios.get('https://farblosbuntbackend.herokuapp.com/' + feedType + '/search?query=' + query + '&offset=' + offset)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { getFacebookPosts }
