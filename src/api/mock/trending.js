let trending = [
  { id: 1, term: 'Agenda-2010', name: 'Agenda 2010' },
  { id: 2, term: 'Martin-Schulz', name: 'Martin Schulz' },
  { id: 3, term: 'Donald-Trump', name: 'Donald Trump' },
  { id: 4, term: 'Türkei', name: 'Türkei' },
  { id: 5, term: 'Aschermittwoch', name: 'Aschermittwoch' }
]

function getTrendingTopics () {
  return new Promise((resolve, reject) => {
    resolve(trending)
  })
}

export { getTrendingTopics }
