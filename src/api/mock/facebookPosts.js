let posts = [
  { id: 1, permalink: 'https://www.facebook.com/20531316728/posts/10154009990506729/' },
  { id: 2, permalink: 'https://www.facebook.com/spiegelonline/posts/10155184302089869' },
  { id: 3, permalink: 'https://www.facebook.com/spiegelonline/posts/10155180616504869' },
  { id: 4, permalink: 'https://www.facebook.com/20531316728/posts/10154009990506729/' },
  { id: 5, permalink: 'https://www.facebook.com/20531316728/posts/10154009990506729/' }
]

function getFacebookPosts () {
  return new Promise((resolve, reject) => {
    resolve(posts)
  })
}

export { getFacebookPosts }
