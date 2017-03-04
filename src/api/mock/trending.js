let trending = [
  { id: 1, term: 'agenda-2010', name: 'Agenda 2010' },
  { id: 2, term: 'martin-schulz', name: 'Martin Schulz' },
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
