let trending = [
  { id: 1, term: 'donald-trump', name: 'Donald Trump' },
  { id: 2, term: 'america-first', name: 'America First' },
  { id: 3, term: 'woldbergs', name: 'Wolbergs' },
  { id: 4, term: 'untersuchungshaft', name: 'Untersuchungshaft' },
  { id: 5, term: 'martin-schulz', name: 'Gottkanzler' }
]

function getTrendingTopics () {
  return new Promise((resolve, reject) => {
    resolve(trending)
  })
}

export { getTrendingTopics }
