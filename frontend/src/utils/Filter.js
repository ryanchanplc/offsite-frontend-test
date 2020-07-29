export const filterKeywords = (keywords, details, array) => {
  if (keywords.trim() !== '') {
    keywords = keywords.toLowerCase()
    var searchResultID = Object.values(details)
      .filter((element) => {
        if (element == null) return false
        else
          return (
            element.trackName.toLowerCase().includes(keywords) ||
            element.primaryGenreName.toLowerCase().includes(keywords) ||
            element.artistName.toLowerCase().includes(keywords) ||
            element.description.toLowerCase().includes(keywords)
          )
      })
      .map((element) => element.trackId)

    return array.filter((item) => searchResultID.includes(parseInt(item.id)))
  } else {
    return array
  }
}
