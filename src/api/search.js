import axios from 'axios'

function getFacebookPosts (feedType, query) {
  return axios.get('https://farblosbuntbackend.herokuapp.com/' + feedType + '/search?query=' + query)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { getFacebookPosts }
